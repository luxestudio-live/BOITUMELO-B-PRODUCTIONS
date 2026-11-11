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
      className="relative bg-[var(--bg)] py-24 sm:py-36 border-y border-[var(--line)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[var(--line)]">
          <div className="flex items-center space-x-3">
            <Layers className="w-4 h-4 text-[var(--gold)]" />
            <h2 className="text-xl sm:text-2xl font-display font-medium text-[var(--ink)]">
              Production Disciplines
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--ink-soft)] hidden sm:inline">
            Interactive Vertical Index
          </span>
        </div>

        {/* 2-Column Layout: Left Large Titles Roster, Right Live Cinema Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive Vertical Roster */}
          <div className="lg:col-span-6 space-y-4" role="tablist" aria-label="Production Disciplines">
            {servicesList.map((service, index) => {
              const isSelected = activeSlug === service.slug;
              const indexStr = `0${index + 1}`;

              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  tabIndex={0}
                  role="tab"
                  aria-selected={isSelected}
                  className={`group relative p-5 sm:p-7 rounded-[2px] border transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                    isSelected
                      ? "bg-[var(--ink)] border-[var(--gold)] text-[var(--white-on-dark)] shadow-[0_10px_30px_rgba(14,14,15,0.06)]"
                      : "bg-[var(--bg-soft)] border-[var(--line)] hover:border-[var(--gold)]/50 text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Gold index number */}
                      <span className="text-xs font-mono tracking-[0.12em] text-[var(--gold)] font-medium">
                        {indexStr}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl font-display font-medium transition-colors duration-250 ease-out ${
                          isSelected
                            ? "text-[var(--white-on-dark)]"
                            : "text-[var(--ink)] group-hover:text-[var(--gold-deep)]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 ml-4 transition-transform duration-250 ease-out ${
                        isSelected
                          ? "text-[var(--gold)] translate-x-0.5 -translate-y-0.5"
                          : "text-[var(--ink-soft)] group-hover:text-[var(--gold-deep)]"
                      }`}
                    />
                  </div>

                  {/* Expandable Info for active state */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.12)] space-y-3 animate-fade-in">
                      <p className="text-xs sm:text-sm text-[var(--text-on-dark)] leading-relaxed font-light">
                        {service.tagline}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.visualDirection.aestheticTokens.slice(0, 3).map((token) => (
                          <span
                            key={token}
                            className="text-[11px] font-mono uppercase tracking-[0.1em] px-2.5 py-1 bg-[#000000]/40 text-[var(--gold-light)] rounded-[2px] border border-[var(--gold)]/30"
                          >
                            {token}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] text-[var(--gold)] hover:text-[var(--gold-light)] py-1 font-medium transition-colors duration-250 ease-out"
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
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[2px] overflow-hidden border border-[var(--gold)]/60 shadow-[0_10px_30px_rgba(14,14,15,0.06)] bg-[#0E0E0F] animate-fade-in"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F]/80 via-transparent to-transparent pointer-events-none" />

              {/* Camera Viewfinder Overlay */}
              <ViewfinderHUD
                aspectRatioLabel="ACTIVE DISCIPLINE"
                lensLabel={activeService.shortTitle}
              />

              {/* Lower Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--white-on-dark)] bg-[#0E0E0F]/80 backdrop-blur-md px-3 py-1 rounded-[2px] border border-[var(--line)]/30">
                  {activeService.shortTitle} Cinema Frame
                </span>
                <Link
                  href={`/services/${activeService.slug}`}
                  className="bg-[var(--gold)] text-[var(--ink)] font-medium px-3.5 py-1.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out uppercase tracking-[0.12em] text-[11px] shadow-sm"
                >
                  View Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

