import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";

export function DemoOne() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-black shadow-sm">
      <AnimatedShaderBackground className="absolute inset-0 z-0 h-full w-full" />
      <span className="pointer-events-none absolute z-10 whitespace-pre-wrap text-center text-7xl font-semibold leading-none tracking-tighter text-white">
        Shader Animation
      </span>
    </div>
  );
}
