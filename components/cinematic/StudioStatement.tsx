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
    { text: "MAKE", gold: true },
    { text: "THEM", gold: true },
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
      // Starts as headline enters lower viewport (88%) and completes BEFORE reaching center (58%).
      // This guarantees that 100% of all words—especially the golden climax "MAKE THEM FELT."—
      // are fully illuminated, radiant, and perfectly readable while in the center of the screen.
      // It stays 100% bright as the user reads and scrolls through the section.
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

      // 1. Sequentially illuminate blue words with clean contrast (starts at 0.5 for WCAG AA compliance)
      const tealElements = wordsRef.current.slice(0, 6);
      tl.fromTo(
        tealElements,
        { opacity: 0.5 },
        {
          opacity: 1,
          stagger: 0.025,
          duration: 0.2,
          ease: "power2.out",
        },
        0
      );

      // 2. Extra warm amber bloom for the golden climax words "MAKE THEM FELT."
      const goldElements = wordsRef.current.slice(6);
      tl.fromTo(
        goldElements,
        {
          color: "#CB8D44",
          opacity: 0.7,
          textShadow: "0 0 0px rgba(203, 141, 68, 0)",
        },
        {
          color: "#CB8D44",
          opacity: 1,
          textShadow:
            "0 0 35px rgba(203, 141, 68, 0.4), 0 0 14px rgba(203, 141, 68, 0.25)",
          stagger: 0.025,
          duration: 0.2,
          ease: "power1.out",
        },
        0.08
      );

      // 3. Supporting subtext illuminates in parallel
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0.5, y: 10 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.2 },
          0.14
        );
      }

      // 4. Geographic footprint tags illuminate
      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0.5 },
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
      className="relative bg-white py-28 sm:py-44 border-b border-brand-teal/15 overflow-hidden flex items-center justify-center"
    >
      {/* Atmospheric radial spotlight in Deep Teal & Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-8 sm:space-y-10">
        {/* Master Scaled Cinematic Manifesto */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight text-brand-teal leading-[1.04] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 lg:gap-x-6 gap-y-2 sm:gap-y-3 max-w-5xl mx-auto select-none"
        >
          {statementWords.map((item, idx) => (
            <span
              key={idx}
              ref={(el) => {
                if (el) wordsRef.current[idx] = el;
              }}
              className={`inline-block ${
                item.gold
                  ? "text-brand-gold font-semibold"
                  : "text-brand-teal"
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        {/* Supporting Narrative */}
        <p
          ref={subtextRef}
          className="max-w-2xl mx-auto text-base sm:text-xl text-brand-teal/80 font-light leading-relaxed pt-2 sm:pt-4 [text-wrap:pretty]"
        >
          In an era of disposable video feeds, true cinema demands reverence. We pair large format anamorphic glass with deep cultural listening to craft films that endure.
        </p>

        {/* Geographic Hubs */}
        <div
          ref={footerRef}
          className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-brand-teal/70 tracking-widest uppercase"
        >
          <span>MELBOURNE</span>
          <span className="text-brand-gold">•</span>
          <span>SYDNEY</span>
          <span className="text-brand-gold">•</span>
          <span>REGIONAL AUSTRALIA</span>
        </div>
      </div>
    </section>
  );
}
