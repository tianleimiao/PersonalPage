"use client";

import { useLandingEffects } from "@/hooks/use-landing-effects";
import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";
import { Brain, Infinity, Rocket, Shield } from "lucide-react";
import { SvgBeamDefs } from "@/components/svg-beam-defs";
import { WordRotator } from "@/components/word-rotator";

const year = new Date().getFullYear();

export function LandingPage() {
  useLandingEffects();

  return (
    <>
      <SvgBeamDefs />

      {/* Hero 1 — shader + full intro (readable panel so content stays visible) */}
      <header
        id="hero-intro"
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-neutral-800/80 bg-neutral-950 px-6 shadow-sm md:px-12 lg:px-20"
      >
        <AnimatedShaderBackground className="pointer-events-none absolute inset-0 z-0 h-full min-h-[92vh] w-full opacity-80" />

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950/50 via-neutral-950/75 to-neutral-950"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-1/4 top-1/4 h-[50vw] w-[50vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
          <div className="animation-delay-2000 animate-blob absolute right-1/4 top-1/3 h-[40vw] w-[40vw] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-screen" />
          <div className="animation-delay-4000 animate-blob absolute -bottom-32 left-1/2 h-[40vw] w-[80vw] -translate-x-1/2 rounded-full bg-blue-900/20 blur-[140px] mix-blend-screen" />
        </div>

        <div className="perspective-grid-wrap pointer-events-none absolute inset-0 z-[2] opacity-30">
          <div className="perspective-grid" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[3] flex justify-between px-[8%] opacity-60 md:px-[12%]"
          aria-hidden
        >
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="hidden h-full w-3 sm:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="hidden h-full w-3 md:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <svg
          className="pointer-events-none absolute inset-0 z-[3] h-full w-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path className="noodle-path" vectorEffect="non-scaling-stroke" d="M 6 58 Q 28 32 44 48 T 74 40" />
          <path
            className="noodle-path"
            vectorEffect="non-scaling-stroke"
            d="M 94 38 Q 68 62 52 52 T 26 58"
            style={{ animationDelay: "-1.2s" }}
            strokeDasharray="6 20"
          />
        </svg>

        <div className="relative z-20 mx-auto w-full max-w-6xl">
          <div className="hero-animate-group rounded-2xl border border-neutral-800/80 bg-neutral-950/75 p-8 shadow-xl backdrop-blur-md md:px-12 md:py-10">
            <p className="mb-6 font-heading text-sm font-medium uppercase tracking-widest text-blue-500">
              Studio · Product · Launch
            </p>
            <div
              className="mb-6 flex justify-center gap-8 text-blue-400/50 md:justify-start"
              aria-hidden
            >
              <Infinity className="h-5 w-5 animate-float" strokeWidth={1.5} />
              <Rocket className="h-5 w-5 animate-float" style={{ animationDelay: "0.15s" }} strokeWidth={1.5} />
              <Shield className="h-5 w-5 animate-float" style={{ animationDelay: "0.3s" }} strokeWidth={1.5} />
              <Brain className="h-5 w-5 animate-float" style={{ animationDelay: "0.45s" }} strokeWidth={1.5} />
            </div>
            <h1 className="mb-8 font-heading text-[clamp(3rem,8vw,4rem)] font-bold leading-[1.05] tracking-[0.08em] text-white">
              <span className="animate-gradient-x block bg-gradient-to-r from-white via-blue-100 to-neutral-400 bg-clip-text text-transparent">
                Your Name
              </span>
              <span className="mt-4 block text-[clamp(1.35rem,3.5vw,1.75rem)] font-semibold tracking-[0.06em] text-neutral-400">
                <span className="text-neutral-500">I craft</span>
                <WordRotator />
                <span className="text-neutral-500"> that convert.</span>
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed text-neutral-400">
              Welcome to <strong className="text-white">your-app</strong> — a{" "}
              <strong className="text-neutral-200">creative &amp; product</strong> studio that{" "}
              <strong className="text-neutral-200">ships polished experiences</strong> from first sketch to production.
              Agency precision, personal touch.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#hero-capabilities"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-8 py-3.5 font-heading font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-blue-600"
              >
                View work
              </a>
              <a
                href="#hero-voice"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/80 px-8 py-3.5 font-heading font-semibold tracking-wide text-neutral-200 shadow-sm transition-colors hover:border-blue-500/50"
              >
                Collaborate
              </a>
            </div>
            <p className="mt-8 text-sm text-neutral-500">
              Scroll for capabilities &amp; testimonial — content stays readable over the shader.
            </p>
          </div>
        </div>
      </header>

      {/* Hero 2 */}
      <section
        id="hero-capabilities"
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-neutral-800/80 px-6 shadow-sm md:px-12 lg:px-20"
      >
        <div
          className="pointer-events-none absolute inset-0 flex justify-between px-[10%] opacity-50 md:px-[14%]"
          aria-hidden
        >
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="hidden h-full w-3 md:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            className="noodle-path"
            vectorEffect="non-scaling-stroke"
            d="M 12 70 Q 38 45 55 62 T 88 35"
            style={{ animationDelay: "-0.6s" }}
          />
          <path
            className="noodle-path"
            vectorEffect="non-scaling-stroke"
            d="M 85 72 Q 55 88 35 55 T 10 48"
            strokeDasharray="5 22"
          />
        </svg>
        <div className="hero-panel-animate reveal-section relative z-10 mx-auto w-full max-w-6xl" data-hero-on-view>
          <p className="reveal-item mb-6 font-heading text-sm font-medium uppercase tracking-widest text-blue-500" data-delay="0">
            Capabilities
          </p>
          <h2
            className="reveal-item mb-6 font-heading text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[1.08] tracking-[0.1em] text-white"
            data-delay="1"
          >
            Build depth.
            <br className="hidden sm:block" />
            <span className="text-neutral-500">Ship clarity.</span>
          </h2>
          <p
            className="reveal-item mb-14 max-w-2xl text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-neutral-400"
            data-delay="2"
          >
            Holodex focus: the core offering center stage, supporting craft on the flanks — brand, product, and growth
            in one studio rhythm.
          </p>
          <div className="holodex-track reveal-item" data-delay="3">
            <article className="holodex-item flashlight-card p-8">
              <div className="card-inner">
                <h3 className="mb-3 font-heading text-xl font-bold tracking-wide text-white">Brand systems</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Visual language, typography, and motion guidelines that scale across touchpoints.
                </p>
              </div>
            </article>
            <article className="holodex-item flashlight-card p-8">
              <div className="card-inner">
                <h3 className="mb-3 font-heading text-xl font-bold tracking-wide text-white">Product UI</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  High-fidelity interfaces, design systems, and handoff-ready specs for engineering teams.
                </p>
              </div>
            </article>
            <article className="holodex-item flashlight-card p-8">
              <div className="card-inner">
                <h3 className="mb-3 font-heading text-xl font-bold tracking-wide text-white">Launch &amp; growth</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Landing pages, campaigns, and iterative optimization once you are live.
                </p>
              </div>
            </article>
          </div>
          <p className="reveal-item mt-14" data-delay="4">
            <a
              href="#hero-voice"
              className="inline-flex items-center font-heading text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-400"
            >
              Next — voices →
            </a>
          </p>
        </div>
      </section>

      {/* Hero 3 */}
      <section
        id="hero-voice"
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-neutral-800/80 px-6 shadow-sm md:px-12 lg:px-20"
      >
        <div
          className="pointer-events-none absolute inset-0 flex justify-between px-[6%] opacity-55 md:px-[18%]"
          aria-hidden
        >
          <svg className="hidden h-full w-3 sm:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="hidden h-full w-3 md:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="h-full w-3" viewBox="0 0 12 800" preserveAspectRatio="none">
            <line x1="6" y1="0" x2="6" y2="800" className="beam-line-vertical" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <svg
          className="pointer-events-none absolute left-0 top-1/2 h-[70%] w-[55%] -translate-y-1/2 opacity-30"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path className="noodle-path" vectorEffect="non-scaling-stroke" d="M 200 55 C 130 12 70 88 0 45" />
        </svg>
        <div className="hero-panel-animate reveal-section relative z-10 mx-auto w-full max-w-4xl" data-hero-on-view>
          <p className="reveal-item mb-8 font-heading text-sm font-semibold uppercase tracking-widest text-blue-500" data-delay="0">
            Testimonial
          </p>
          <blockquote
            className="reveal-item mb-12 font-heading text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.15] tracking-[0.08em] text-white"
            data-delay="1"
          >
            “Rare mix of taste and execution. They treated our launch like their own — clear process, fast iterations,
            and a dark-mode-ready product we are proud to show investors.”
          </blockquote>
          <footer className="reveal-item" data-delay="2">
            <cite className="not-italic text-[clamp(1rem,2vw,1.15rem)] text-neutral-400">
              <span className="font-heading font-semibold tracking-wide text-white">Alex Rivera</span>
              · Founder, Northwind Labs
            </cite>
          </footer>
          <p className="reveal-item mt-14" data-delay="3">
            <a
              href="#footer"
              className="inline-flex items-center font-heading text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-400"
            >
              Footer &amp; links →
            </a>
          </p>
        </div>
      </section>

      <footer
        id="footer"
        className="border-t border-neutral-800/80 bg-neutral-950 px-6 py-16 shadow-sm md:px-12 lg:px-20"
      >
        <div className="reveal-section mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="reveal-item mb-3 font-heading text-2xl font-bold tracking-[0.12em] text-white" data-delay="0">
              your-app
            </p>
            <p className="reveal-item max-w-md text-sm text-neutral-500" data-delay="1">
              Next.js + WebGL hero. Replace copy and links. Deploy static export to GitHub Pages.
            </p>
          </div>
          <nav className="reveal-item flex flex-wrap gap-8" data-delay="2" aria-label="Footer">
            <a href="#hero-intro" className="text-sm text-neutral-400 transition-colors hover:text-blue-500">
              Intro
            </a>
            <a href="#hero-capabilities" className="text-sm text-neutral-400 transition-colors hover:text-blue-500">
              Work
            </a>
            <a href="#hero-voice" className="text-sm text-neutral-400 transition-colors hover:text-blue-500">
              Voice
            </a>
            <a href="https://github.com" className="text-sm text-neutral-400 transition-colors hover:text-blue-500">
              GitHub
            </a>
            <a href="mailto:hello@example.com" className="text-sm text-neutral-400 transition-colors hover:text-blue-500">
              Email
            </a>
          </nav>
          <p className="reveal-item text-xs text-neutral-600" data-delay="3">
            © {year} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
