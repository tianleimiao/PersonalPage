"use client";

import Image from "next/image";

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
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950/25 via-neutral-950/45 to-neutral-950/70"
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

        <div className="hero-animate-group pointer-events-none absolute right-6 top-6 z-20 md:right-12 md:top-10 lg:right-20">
          <div className="inline-block max-w-[min(100vw-3rem,20rem)] text-right">
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-blue-500 sm:text-sm">
              AI · Product · Launch
            </p>
            <div
              className="mt-2 flex w-full justify-between text-blue-400/50 sm:mt-2.5"
              aria-hidden
            >
              <Infinity className="h-5 w-5 shrink-0 animate-float" strokeWidth={1.5} />
              <Rocket className="h-5 w-5 shrink-0 animate-float" style={{ animationDelay: "0.15s" }} strokeWidth={1.5} />
              <Shield className="h-5 w-5 shrink-0 animate-float" style={{ animationDelay: "0.3s" }} strokeWidth={1.5} />
              <Brain className="h-5 w-5 shrink-0 animate-float" style={{ animationDelay: "0.45s" }} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-6xl">
          <div className="hero-animate-group bg-transparent p-8 md:px-12 md:py-10">
            <h1 className="font-heading text-[clamp(3rem,8vw,4rem)] font-bold leading-[1.05] tracking-[0.08em] text-white">
              <span className="animate-gradient-x block bg-gradient-to-r from-white via-blue-100 to-neutral-400 bg-clip-text text-transparent">
                Kai Tianlei Miao
              </span>
              <span className="mt-4 block text-[clamp(1.35rem,3.5vw,1.75rem)] font-semibold tracking-[0.06em] text-neutral-400">
                <span className="text-neutral-500">I craft</span>
                <WordRotator />
                <span className="text-neutral-500"> that convert.</span>
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Hero 2 */}
      <section
        id="hero-capabilities"
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-neutral-800/80 bg-neutral-950 px-6 shadow-sm md:px-12 lg:px-20"
      >
        <div
          className="hero2-ambient pointer-events-none absolute left-[12%] top-[20%] h-[min(28rem,50vw)] w-[min(28rem,50vw)] rounded-full bg-blue-600/15 blur-[100px] mix-blend-screen"
          aria-hidden
        />
        <div
          className="hero2-ambient-delay pointer-events-none absolute bottom-[15%] right-[8%] h-[min(22rem,45vw)] w-[min(22rem,45vw)] rounded-full bg-indigo-500/10 blur-[90px] mix-blend-screen"
          aria-hidden
        />
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
        <div
          className="hero-panel-animate reveal-section relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center py-16 md:min-h-0 md:py-24"
          data-hero-on-view
        >
          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
            <span
              className="hero2-float-dot pointer-events-none absolute -left-2 top-1/4 h-2 w-2 rounded-full bg-blue-400/60 blur-[1px] md:left-0"
              aria-hidden
            />
            <span
              className="hero2-float-dot pointer-events-none absolute bottom-1/3 right-[20%] h-1.5 w-1.5 rounded-full bg-blue-300/50 blur-[1px] [animation-delay:-2s]"
              aria-hidden
            />

            <div
              className="reveal-item relative w-full shrink-0 md:w-[32%] md:min-w-[240px] md:max-w-sm"
              data-delay="0"
            >
              <div className="relative mx-auto w-full">
                <div
                  className="pointer-events-none absolute -inset-[3px] z-0 overflow-hidden rounded-[1.05rem] opacity-80"
                  aria-hidden
                >
                  <div
                    className="hero2-photo-orbit absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.45)_95deg,transparent_190deg,rgba(96,165,250,0.25)_280deg,transparent_360deg)]"
                  />
                </div>
                <div className="relative z-10 aspect-[3/4] w-full overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-900 shadow-[0_0_40px_-12px_rgba(59,130,246,0.35)] ring-1 ring-blue-500/15">
                  <Image
                    src="/images/20260403002505_61_11.jpg"
                    alt="Kai Tianlei Miao"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="hero2-corner-tl z-20" aria-hidden />
                <div className="hero2-corner-br z-20" aria-hidden />
              </div>
            </div>
            <div className="hero2-accent-line reveal-item relative min-w-0 flex-1 space-y-5 pl-6 md:pl-8" data-delay="1">
              <p className="font-heading text-sm font-medium uppercase tracking-widest text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                About
              </p>
              <div className="space-y-5 text-[clamp(1rem,1.85vw,1.125rem)] leading-relaxed text-neutral-400">
                <p>
                  <strong className="font-medium text-neutral-200">I build AI products fast</strong> — from idea to
                  something people actually use.
                </p>
                <p>
                  As a founder, I focus on turning concepts into{" "}
                  <strong className="font-medium text-neutral-200">working systems</strong>, not demos.{" "}
                  <strong className="font-medium text-neutral-200">Rapid prototyping with AI</strong> is my default: test
                  fast, validate fast, ship fast. If it doesn&apos;t survive real users, it doesn&apos;t count.
                </p>
                <p>
                  I work across the <strong className="font-medium text-neutral-200">full stack</strong> — problem framing,
                  data, models, evaluation, and production. I care about systems that operate under uncertainty: messy inputs,
                  unpredictable users, real consequences.
                </p>
                <p>
                  My background is in <strong className="font-medium text-neutral-200">autonomous systems</strong> and
                  maritime collision avoidance — COLREGs-aware planning, multi-sensor fusion (Radar / AIS / LiDAR /
                  camera), and systems that had to work in real environments, not controlled ones. That&apos;s where I
                  learned: <strong className="font-medium text-neutral-200">robustness &gt; elegance</strong>.
                </p>
                <p>
                  PhD trained my thinking. Building products trained my judgment.
                </p>
                <p>
                  Now I&apos;m focused on one thing: using AI to compress the time from idea → product → validation.
                </p>
                <p className="text-neutral-500">
                  Outside of work: pickleball, gym, and treating recovery like part of the system.
                </p>
              </div>
            </div>
          </div>
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
            © {year} Kai Tianlei Miao. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
