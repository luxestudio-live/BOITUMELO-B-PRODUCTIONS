"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudioStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

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

    if (prefersReducedMotion || !containerRef.current) {
      // Set full opacity immediately
      wordsRef.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Progressively illuminate each word as the statement scrolls through viewport
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.15, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 35%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Scene 04: The Studio Statement"
      className="relative bg-brand-teal-deep py-28 sm:py-44 border-b border-brand-teal/40 overflow-hidden"
    >
      {/* Subtle atmospheric radial spotlight in Deep Teal & Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-teal/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-10">
        <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-brand-black/60 border border-brand-teal/50 rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse-subtle" />
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-brand-gold">
            Scene 04 // Studio Philosophy
          </span>
        </div>

        {/* Master Scaled Cinematic Manifesto */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-brand-white leading-[1.08] flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-2 max-w-5xl mx-auto">
          {statementWords.map((item, idx) => (
            <span
              key={idx}
              ref={(el) => {
                if (el) wordsRef.current[idx] = el;
              }}
              className={`transition-colors duration-300 ${
                item.gold
                  ? "text-brand-gold font-serif italic font-normal"
                  : "text-brand-white"
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-brand-gray-light font-light leading-relaxed pt-4">
          In an era of disposable video feeds, true cinema demands reverence. We pair large format anamorphic glass with deep cultural listening to craft films that endure.
        </p>

        <div className="pt-4 flex items-center justify-center space-x-3 text-xs font-mono text-brand-gray">
          <span>MELBOURNE</span>
          <span className="text-brand-teal">•</span>
          <span>SYDNEY</span>
          <span className="text-brand-teal">•</span>
          <span>REGIONAL AUSTRALIA</span>
        </div>
      </div>
    </section>
  );
}

