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
      className="relative bg-brand-teal py-28 sm:py-36 border-b border-brand-teal-light overflow-hidden text-brand-white"
    >
      {/* Decorative Large Cinematic Background Quote Watermark */}
      <div className="absolute top-12 right-12 text-brand-black/20 pointer-events-none select-none">
        <Quote className="w-64 h-64" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header Heading */}
        <div className="flex items-center justify-between pb-6 border-b border-brand-teal-light/50">
          <div className="flex items-center space-x-3">
            <Quote className="w-4 h-4 text-brand-gold" />
            <h2 className="text-xl sm:text-2xl font-display font-medium text-brand-white">
              Client Perspectives
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handlePrev}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-3 rounded-sm bg-brand-black/40 border border-brand-teal-light hover:border-brand-gold text-brand-white hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Previous client testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-3 rounded-sm bg-brand-black/40 border border-brand-teal-light hover:border-brand-gold text-brand-white hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Next client testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Master Editorial Quotation Theatre */}
        <div key={current.id} className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 bg-brand-black/50 backdrop-blur-sm rounded-sm text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-brand-gold border border-brand-teal-light max-w-full">
            <span className="truncate">Project: {current.projectTitle} // {current.serviceCategory}</span>
          </div>

          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-brand-white font-light leading-snug">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-brand-teal-light/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold flex-shrink-0">
                <Image
                  src={current.portraitUrl}
                  alt={current.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-brand-white">
                  {current.author}
                </h3>
                <p className="text-xs font-mono text-brand-gray-light">
                  {current.role} • {current.company}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/testimonials"
                className="text-xs font-mono uppercase tracking-widest text-brand-gold hover:underline"
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

