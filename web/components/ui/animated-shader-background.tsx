"use client";

import {
  useRef,
  useLayoutEffect,
  useEffect,
  type ComponentProps,
} from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";
import { heroShaderBackdropClassName } from "@/components/ui/hero-shader-backdrop";

/** Avoid useLayoutEffect SSR warning in Next.js while still running before paint on the client. */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type AnimatedShaderBackgroundProps = ComponentProps<"div">;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;

  #define NUM_OCTAVES 3

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
      mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.3;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.4;
    }
    return v;
  }

  void main() {
    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
    vec2 v;
    vec4 o = vec4(0.0);

    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

    for (float i = 0.0; i < 22.0; i++) {
      v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
      float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 22.0));
      vec4 auroraColors = vec4(
        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
        1.0
      );
      vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
      float thinnessFactor = smoothstep(0.0, 1.0, i / 22.0) * 0.6;
      o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
    }

    o = tanh(pow(o / 100.0, vec4(1.6)));
    gl_FragColor = o * 1.5;
  }
`;

export function AnimatedShaderBackground({
  className,
  style,
  children,
  ...props
}: AnimatedShaderBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const container = rootRef.current;
    const canvasHost = canvasHostRef.current;
    if (!container || !canvasHost) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    const syncSize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      renderer.setSize(w, h, false);
      material.uniforms.iResolution.value.set(renderer.domElement.width, renderer.domElement.height);
    };

    canvasHost.appendChild(canvas);
    syncSize();

    const ro = new ResizeObserver(() => syncSize());
    ro.observe(container);

    let frameId = 0;

    // Warm up GPU pipeline before the next paint to reduce “pop-in” after reload.
    renderer.compile(scene, camera);
    material.uniforms.iTime.value += 0.016;
    renderer.render(scene, camera);

    // Start the CSS sweep only after the first frame exists. Shader compile blocks the main thread
    // for a long time; if the mask animation runs during that gap, it finishes before pixels show.
    let revealRafOuter = 0;
    let revealRafInner = 0;
    const startReveal = () => {
      canvasHost.classList.add("shader-reveal-canvas--active");
    };
    revealRafOuter = requestAnimationFrame(() => {
      revealRafOuter = 0;
      revealRafInner = requestAnimationFrame(startReveal);
    });

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      material.uniforms.iTime.value += 0.016;
      if (material.uniforms.iTime.value > 1e6) material.uniforms.iTime.value = 0;
      renderer.render(scene, camera);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      if (revealRafOuter) cancelAnimationFrame(revealRafOuter);
      if (revealRafInner) cancelAnimationFrame(revealRafInner);
      cancelAnimationFrame(frameId);
      canvasHost.classList.remove("shader-reveal-canvas--active");
      ro.disconnect();
      if (canvas.parentNode === canvasHost) {
        canvasHost.removeChild(canvas);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative min-h-0 w-full overflow-hidden",
        /* Layered CSS fallback until WebGL draws (avoids a flat patch during shader compile). */
        heroShaderBackdropClassName,
        className
      )}
      style={style}
      {...props}
    >
      <div
        ref={canvasHostRef}
        className="shader-reveal-canvas pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      />
      {children}
    </div>
  );
}

/** Default export matches the provided snippet name. */
export default AnimatedShaderBackground;
