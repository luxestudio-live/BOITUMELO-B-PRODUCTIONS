"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sampleTestimonials } from "@/data/testimonials";
import { Quote, ArrowLeft, ArrowRight, Film } from "lucide-react";

export default function CinematicTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = sampleTestimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sampleTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? sampleTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      aria-label="Scene 08: Client Voices"
      className="relative bg-[var(--bg-soft)] py-24 sm:py-36 border-b border-[var(--line)] overflow-hidden text-[var(--ink)]"
    >
      {/* Decorative Large Cinematic Background Quote Watermark */}
      <div className="absolute top-12 right-12 text-[var(--gold)]/10 pointer-events-none select-none">
        <Quote className="w-64 h-64" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Header Heading */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--line)]">
          <div className="flex items-center space-x-3">
            <Quote className="w-4 h-4 text-[var(--gold)]" />
            <h2 className="text-xl sm:text-2xl font-display font-medium text-[var(--ink)]">
              Client Perspectives
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handlePrev}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-3 rounded-[2px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--ink)] hover:text-[var(--gold-deep)] transition-all duration-250 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shadow-sm"
              aria-label="Previous client testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-3 rounded-[2px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--ink)] hover:text-[var(--gold-deep)] transition-all duration-250 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shadow-sm"
              aria-label="Next client testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Master Editorial Quotation Theatre - White Card */}
        <div
          key={current.id}
          className="bg-[var(--bg)] border border-[var(--line)] rounded-[2px] p-6 sm:p-12 shadow-[0_10px_30px_rgba(14,14,15,0.06)] space-y-8 animate-fade-in"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[var(--bg-soft)] rounded-[2px] text-[10px] sm:text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium border border-[var(--line)] max-w-full">
              <span className="truncate">Project: {current.projectTitle} // {current.serviceCategory}</span>
            </div>
            <Quote className="w-6 h-6 text-[var(--gold)] shrink-0 hidden sm:block" />
          </div>

          <blockquote className="text-xl sm:text-3xl md:text-4xl font-serif italic text-[var(--ink)] font-light leading-snug">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--gold)] flex-shrink-0">
                <Image
                  src={current.portraitUrl}
                  alt={current.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-[var(--ink)]">
                  {current.author}
                </h3>
                <p className="text-xs font-mono text-[var(--ink-soft)]">
                  {current.role} • {current.company}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/testimonials"
                className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] hover:text-[var(--gold)] font-medium transition-colors duration-250 ease-out"
              >
                Read All Testimonials →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

