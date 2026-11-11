"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sampleProjects, ProjectItem } from "@/data/projects";
import { ArrowUpRight, Play, Film, SlidersHorizontal } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalFilmstrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // 6 Curated films across all 4 disciplines
  const stripProjects = sampleProjects.slice(0, 6);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion || !sectionRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Calculate horizontal scroll distance
      const scrollDistance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          refreshPriority: 2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (slug: string) => {
    setHoveredProject(slug);
    const v = videoRefs.current[slug];
    if (v) {
      v.play().catch(() => {});
    }
  };

  const handleMouseLeave = (slug: string) => {
    setHoveredProject(null);
    const v = videoRefs.current[slug];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <section
      id="filmstrip-section"
      ref={sectionRef}
      aria-label="Scene 03: The Cinematic Filmstrip"
      className="relative bg-[var(--bg)] overflow-hidden border-y border-[var(--line)] pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-0 md:h-screen md:flex md:flex-col md:justify-center scroll-mt-20"
    >
      {/* Section Heading & Viewfinder Cue */}
      <div className="px-5 sm:px-8 mb-6 md:mb-0 md:absolute md:top-8 md:left-12 z-10 flex items-center justify-between w-full md:w-auto pointer-events-auto md:pointer-events-none">
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <Film className="w-4 h-4 text-[var(--gold)] shrink-0" />
          <h2 className="text-xs sm:text-sm md:text-base font-display font-medium text-[var(--ink)] uppercase tracking-[0.2em]">
            Selected Works <span className="text-[var(--gold-deep)] font-normal">/ 35mm & Large Format</span>
          </h2>
        </div>
        <span className="md:hidden text-[10px] font-mono uppercase tracking-[0.1em] text-[var(--gold-deep)] bg-[var(--bg-soft)] px-2.5 py-1 rounded-[2px] border border-[var(--line)] mr-1 sm:mr-4">
          Archive 01–06
        </span>
      </div>

      <div className="hidden md:flex absolute top-8 right-12 z-10 items-center space-x-2 text-xs font-mono uppercase tracking-[0.1em] text-[var(--ink-soft)] pointer-events-none">
        <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--gold)]" />
        <span>Scroll Down to Pan Left ◄►</span>
      </div>

      {/* Filmstrip Track Container */}
      <div className="w-full h-full flex items-center overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none px-5 sm:px-8 md:px-0 scroll-smooth">
        <div
          ref={trackRef}
          className="flex items-center space-x-5 sm:space-x-8 md:space-x-12 md:pl-20 md:pr-32 w-max"
        >
          {stripProjects.map((p, idx) => {
            const isHovered = hoveredProject === p.slug;

            // Varied cinematic framing per project
            const frameRatio =
              idx === 0
                ? "aspect-[16/10] md:aspect-[2.39/1] w-[82vw] max-w-[340px] sm:w-[460px] md:w-[480px] lg:w-[620px]"
                : idx === 1
                ? "aspect-[16/10] md:aspect-[1.85/1] w-[82vw] max-w-[340px] sm:w-[440px] md:w-[440px] lg:w-[560px]"
                : idx === 2
                ? "aspect-[16/10] md:aspect-[2.20/1] w-[82vw] max-w-[340px] sm:w-[460px] md:w-[480px] lg:w-[600px]"
                : idx === 3
                ? "aspect-[16/10] md:aspect-[16/9] w-[82vw] max-w-[340px] sm:w-[420px] md:w-[420px] lg:w-[540px]"
                : "aspect-[16/10] md:aspect-[2.39/1] w-[82vw] max-w-[340px] sm:w-[460px] md:w-[480px] lg:w-[580px]";

            return (
              <div
                key={p.id}
                className="group relative flex-shrink-0 flex flex-col justify-end snap-center md:snap-align-none"
                onMouseEnter={() => handleMouseEnter(p.slug)}
                onMouseLeave={() => handleMouseLeave(p.slug)}
              >
                {/* Physical 35mm Film Frame Box - Keeps authentic dark film look */}
                <Link
                  href={`/work/${p.slug}`}
                  className={`relative block ${frameRatio} rounded-[2px] overflow-hidden border border-[#0E0E0F]/15 group-hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-[0_10px_30px_rgba(14,14,15,0.06)] bg-[#0E0E0F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]`}
                  aria-label={`View film case study: ${p.title}`}
                >
                  {/* Poster Image */}
                  <Image
                    src={p.heroPoster}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 600px"
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Silent Hover Video Loop */}
                  <video
                    ref={(el) => {
                      videoRefs.current[p.slug] = el;
                    }}
                    src={p.videoPreviewUrl}
                    poster={p.heroPoster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0"
                    }`}
                  />

                  {/* Dark Vignette Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F]/80 via-transparent to-[#0E0E0F]/20 opacity-80 group-hover:opacity-60 transition-opacity duration-250 ease-out" />

                  {/* Camera Corner Frameline Markers */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[var(--gold)]/60 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[var(--gold)]/60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[var(--gold)]/60 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[var(--gold)]/60 pointer-events-none" />
                </Link>

                {/* Editorial Metadata Below Frame on White Background */}
                <div className="mt-3.5 space-y-1.5 px-0.5">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.1em]">
                    <span className="text-[var(--gold-deep)] uppercase font-medium truncate">
                      REEL 0{idx + 1} <span className="hidden sm:inline">// {p.categoryLabel}</span>
                    </span>
                    <span className="shrink-0 text-[var(--ink-soft)] font-mono">{p.aspectRatio}</span>
                  </div>

                  {/* Thin gold line above each title */}
                  <div className="w-full h-[1px] bg-[var(--gold)]/40 group-hover:bg-[var(--gold)] transition-colors duration-250 ease-out" />

                  <div className="flex items-center justify-between pt-0.5">
                    <Link
                      href={`/work/${p.slug}`}
                      className="font-display font-medium text-base sm:text-lg md:text-xl text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors duration-250 ease-out truncate mr-2"
                    >
                      {p.title}
                    </Link>
                    <Link
                      href={`/work/${p.slug}`}
                      className="w-6 h-6 rounded-full border border-[var(--line)] group-hover:border-[var(--gold)] flex items-center justify-center text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-all duration-250 ease-out shrink-0"
                      aria-label={`Open ${p.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <p className="text-[12px] text-[var(--ink-soft)] font-light line-clamp-1">
                    {p.subtitle}
                  </p>

                  <div className="pt-0.5 flex items-center justify-between text-[11px] font-mono text-[var(--ink-soft)]">
                    <span className="truncate mr-2">{p.location}</span>
                    <span className="shrink-0">{p.cameraFormat}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Cue */}
      <div className="md:hidden mt-5 flex items-center justify-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-[2px] bg-[var(--bg-soft)] text-[var(--gold-deep)] border border-[var(--line)] text-[10px] font-mono uppercase tracking-[0.1em] shadow-subtle">
          <span>◄ Swipe Reel to Pan 01–06 ►</span>
        </div>
      </div>
    </section>
  );
}

