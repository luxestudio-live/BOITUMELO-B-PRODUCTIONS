"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudioStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const statementWords = [
    { text: "WE", gold: false },
    { text: "DON'T", gold: false },
    { text: "JUST", gold: false },
    { text: "CAPTURE", gold: false },
    { text: "STORIES.", gold: false },
    { text: "WE", gold: false },
    { text: "MAKE", gold: false },
    { text: "THEM", gold: false },
    { text: "FELT.", gold: true },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current || !titleRef.current) {
      wordsRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
        }
      });
      if (subtextRef.current) subtextRef.current.style.opacity = "1";
      if (footerRef.current) footerRef.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          end: "top 58%",
          scrub: 0.25,
          refreshPriority: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Sequentially illuminate white words
      const whiteElements = wordsRef.current.slice(0, 8);
      tl.fromTo(
        whiteElements,
        { opacity: 0.4 },
        {
          opacity: 1,
          stagger: 0.025,
          duration: 0.2,
          ease: "power2.out",
        },
        0
      );

      // 2. Accent word "FELT." in gold
      const goldElement = wordsRef.current.slice(8);
      tl.fromTo(
        goldElement,
        {
          color: "#B08D57",
          opacity: 0.5,
        },
        {
          color: "#B08D57",
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        },
        0.15
      );

      // 3. Supporting subtext illuminates in parallel
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0.4, y: 8 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.2 },
          0.16
        );
      }

      // 4. Geographic footprint tags illuminate
      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0.4 },
          { opacity: 1, ease: "power1.out", duration: 0.18 },
          0.18
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="The Studio Statement"
      className="relative bg-[var(--ink)] py-28 sm:py-44 border-b border-[rgba(255,255,255,0.12)] overflow-hidden flex items-center justify-center text-[var(--white-on-dark)]"
    >
      <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-8 sm:space-y-10">
        {/* Master Scaled Cinematic Manifesto */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight text-[var(--white-on-dark)] leading-[1.04] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 lg:gap-x-6 gap-y-2 sm:gap-y-3 max-w-5xl mx-auto select-none"
        >
          {statementWords.map((item, idx) => (
            <span
              key={idx}
              ref={(el) => {
                if (el) wordsRef.current[idx] = el;
              }}
              className={`inline-block ${
                item.gold
                  ? "text-[var(--gold)] font-medium"
                  : "text-[var(--white-on-dark)]"
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        {/* Supporting Narrative */}
        <p
          ref={subtextRef}
          className="max-w-2xl mx-auto text-base sm:text-xl text-[var(--text-on-dark)] font-light leading-relaxed pt-2 sm:pt-4 [text-wrap:pretty]"
        >
          In an era of disposable video feeds, true cinema demands reverence. We pair large format anamorphic glass with deep cultural listening to craft films that endure.
        </p>

        {/* Geographic Hubs */}
        <div
          ref={footerRef}
          className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[var(--text-on-dark)] tracking-[0.1em] uppercase"
        >
          <span>MELBOURNE</span>
          <span className="text-[var(--gold)]">•</span>
          <span>SYDNEY</span>
          <span className="text-[var(--gold)]">•</span>
          <span>REGIONAL AUSTRALIA</span>
        </div>
      </div>
    </section>
  );
}
