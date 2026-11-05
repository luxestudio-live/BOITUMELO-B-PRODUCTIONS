"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData, ServiceDetail } from "@/data/services";
import { ArrowUpRight, ArrowRight, Layers, CheckCircle2, Film } from "lucide-react";
import ViewfinderHUD from "./ViewfinderHUD";

export default function InteractiveServices() {
  const servicesList = Object.values(servicesData);
  const [activeSlug, setActiveSlug] = useState<string>(servicesList[0].slug);

  const activeService =
    servicesData[activeSlug] || servicesList[0];

  return (
    <section
      aria-label="Production Disciplines in Motion"
      className="relative bg-brand-teal-deep py-24 sm:py-36 border-y border-brand-teal/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-brand-teal/30">
          <div className="flex items-center space-x-3">
            <Layers className="w-4 h-4 text-brand-gold" />
            <h2 className="text-xl sm:text-2xl font-display font-medium text-brand-white">
              Production Disciplines
            </h2>
          </div>
          <span className="text-xs font-mono text-brand-gray-light hidden sm:inline">
            Interactive Vertical Index
          </span>
        </div>

        {/* 2-Column Layout: Left Large Titles Roster, Right Live Cinema Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive Vertical Roster */}
          <div className="lg:col-span-6 space-y-4" role="tablist" aria-label="Production Disciplines">
            {servicesList.map((service, index) => {
              const isSelected = activeSlug === service.slug;

              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  tabIndex={0}
                  role="tab"
                  aria-selected={isSelected}
                  className={`group relative p-6 sm:p-8 rounded-sm border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                    isSelected
                      ? "bg-brand-black/80 border-brand-gold/80 shadow-2xl"
                      : "bg-brand-black/40 border-brand-teal/40 hover:border-brand-teal hover:bg-brand-black/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-2xl sm:text-3xl font-display font-medium transition-colors ${
                        isSelected
                          ? "text-brand-white"
                          : "text-brand-gray-light group-hover:text-brand-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        isSelected
                          ? "text-brand-gold translate-x-0.5 -translate-y-0.5"
                          : "text-brand-gray opacity-40 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {/* Expandable Info for active state */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-brand-teal/30 space-y-3 animate-fade-in">
                      <p className="text-xs sm:text-sm text-brand-gray-light leading-relaxed font-light">
                        {service.tagline}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.visualDirection.aestheticTokens.slice(0, 3).map((token) => (
                          <span
                            key={token}
                            className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-brand-teal/40 text-brand-gray-light rounded border border-brand-teal/50"
                          >
                            {token}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider text-brand-gold hover:text-brand-gold-light py-1 font-semibold"
                        >
                          <span>Explore Full Specification</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Live Cinema Monitor */}
          <div className="lg:col-span-6">
            <div
              key={activeService.slug}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden border border-brand-gold/60 shadow-2xl bg-brand-black-surface animate-fade-in"
            >
              {/* Dynamic Image / Footage */}
              <Image
                key={activeService.slug}
                src={activeService.heroImage}
                alt={activeService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover animate-fade-in transition-transform duration-700 hover:scale-105"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent pointer-events-none" />

              {/* Camera Viewfinder Overlay */}
              <ViewfinderHUD
                aspectRatioLabel="ACTIVE DISCIPLINE"
                lensLabel={activeService.shortTitle}
              />

              {/* Lower Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-white bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded border border-brand-teal/50">
                  {activeService.shortTitle} Cinema Frame
                </span>
                <Link
                  href={`/services/${activeService.slug}`}
                  className="bg-brand-gold text-brand-black font-semibold px-3 py-1 rounded hover:bg-brand-gold-light transition-colors uppercase tracking-wider text-xs"
                >
                  View Vertical Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

