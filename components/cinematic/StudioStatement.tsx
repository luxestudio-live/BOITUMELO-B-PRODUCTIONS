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
      // Trigger directly on the headline itself.
      // Starts as headline enters lower viewport (82%), completes as it reaches upper center (38%).
      // This ensures 100% of all words are radiant, bright, and legible while in full center view.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 82%",
          end: "top 38%",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });

      // 1. Sequentially illuminate words with clean contrast
      tl.to(
        wordsRef.current,
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
        },
        0
      );

      // 2. Extra warm amber bloom for the golden climax words "MAKE THEM FELT."
      const goldElements = wordsRef.current.slice(6);
      tl.to(
        goldElements,
        {
          color: "#E2A65F",
          textShadow:
            "0 0 35px rgba(203, 141, 68, 0.75), 0 0 15px rgba(203, 141, 68, 0.45)",
          stagger: 0.05,
          ease: "power1.out",
        },
        0.22
      );

      // 3. Supporting subtext illuminates in parallel
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0.4, y: 14 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 },
          0.32
        );
      }

      // 4. Geographic footprint tags illuminate
      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0.4 },
          { opacity: 1, ease: "power1.out", duration: 0.25 },
          0.42
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Scene 04: The Studio Statement"
      className="relative bg-brand-teal-deep py-28 sm:py-44 border-b border-brand-teal/40 overflow-hidden flex items-center justify-center"
    >
      {/* Atmospheric radial spotlight in Deep Teal & Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-teal/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-8 sm:space-y-10">
        {/* Master Scaled Cinematic Manifesto */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight text-brand-white leading-[1.04] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 lg:gap-x-6 gap-y-2 sm:gap-y-3 max-w-5xl mx-auto select-none"
        >
          {statementWords.map((item, idx) => (
            <span
              key={idx}
              ref={(el) => {
                if (el) wordsRef.current[idx] = el;
              }}
              style={{ opacity: 0.45 }}
              className={`inline-block transition-colors duration-300 ${
                item.gold
                  ? "text-brand-gold font-serif italic font-normal"
                  : "text-brand-white"
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        {/* Supporting Narrative */}
        <p
          ref={subtextRef}
          style={{ opacity: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-light leading-relaxed pt-2 sm:pt-4 [text-wrap:pretty]"
        >
          In an era of disposable video feeds, true cinema demands reverence. We pair large format anamorphic glass with deep cultural listening to craft films that endure.
        </p>

        {/* Geographic Hubs */}
        <div
          ref={footerRef}
          style={{ opacity: 0.8 }}
          className="pt-2 sm:pt-4 flex items-center justify-center space-x-3 text-xs font-mono text-slate-300 tracking-widest uppercase"
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
