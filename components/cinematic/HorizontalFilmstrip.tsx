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
      className="relative bg-brand-black-elevated overflow-hidden border-y border-brand-teal/40 pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-0 md:h-screen md:flex md:flex-col md:justify-center scroll-mt-20"
    >
      {/* Section Heading & Viewfinder Cue */}
      <div className="px-5 sm:px-8 mb-6 md:mb-0 md:absolute md:top-8 md:left-12 z-10 flex items-center justify-between w-full md:w-auto pointer-events-auto md:pointer-events-none">
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <Film className="w-4 h-4 text-brand-gold shrink-0" />
          <h2 className="text-xs sm:text-sm md:text-base font-display font-medium text-brand-white uppercase tracking-[0.2em]">
            Selected Works <span className="text-brand-gold font-normal">/ 35mm & Large Format</span>
          </h2>
        </div>
        <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-brand-gold bg-brand-black/90 px-2.5 py-1 rounded border border-brand-teal/40 mr-1 sm:mr-4">
          Archive 01–06
        </span>
      </div>

      <div className="hidden md:flex absolute top-8 right-12 z-10 items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand-gray-light pointer-events-none">
        <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
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

            // Varied cinematic framing per project (16/10 on mobile for generous image height, authentic anamorphic/flat ratios on desktop)
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
                {/* Physical 35mm Perforation Style Bar Above Frame with responsive label truncation */}
                <div className="flex items-center justify-between pb-2 px-1 text-[11px] sm:text-xs font-mono text-brand-gray-light gap-3">
                  <span className="text-brand-gold font-semibold uppercase tracking-wider truncate">
                    REEL 0{idx + 1} <span className="hidden sm:inline">// {p.categoryLabel}</span>
                    <span className="sm:hidden">// {p.categoryLabel.includes("&") ? p.categoryLabel.split("&")[0].trim() : p.categoryLabel.split(" ")[0]}</span>
                  </span>
                  <span className="shrink-0 text-brand-gray-light">{p.aspectRatio}</span>
                </div>

                {/* The Video / Poster Frame Box */}
                <Link
                  href={`/work/${p.slug}`}
                  className={`relative block ${frameRatio} rounded-sm overflow-hidden border border-brand-teal/50 group-hover:border-brand-gold transition-all duration-500 shadow-2xl bg-brand-black-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold`}
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

                  {/* Dark Vignette Overlay for Crisp Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/45 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Camera Corner Frameline Markers */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-gold/60 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-gold/60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-gold/60 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-gold/60 pointer-events-none" />

                  {/* Bottom Third Info with Dedicated Scrim */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 md:p-6 flex flex-col justify-end space-y-1 z-10 bg-gradient-to-t from-black via-black/85 to-transparent pt-6 sm:pt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-medium text-lg sm:text-xl md:text-2xl text-brand-white group-hover:text-brand-gold transition-colors tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] truncate mr-2">
                        {p.title}
                      </h3>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-gold text-brand-black flex items-center justify-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs text-brand-gray-light font-light line-clamp-1">
                      {p.subtitle}
                    </p>

                    <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-[10px] sm:text-xs font-mono text-brand-gray-light">
                      <span className="truncate mr-2">{p.location}</span>
                      <span className="shrink-0">{p.cameraFormat}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Cue */}
      <div className="md:hidden mt-5 flex items-center justify-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-black/80 border border-brand-teal/40 text-[10px] font-mono text-brand-gold uppercase tracking-[0.2em]">
          <span>◄ Swipe Reel to Pan 01–06 ►</span>
        </div>
      </div>
    </section>
  );
}

