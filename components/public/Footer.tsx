"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Instagram, Video, Youtube, Linkedin, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black-elevated border-t border-brand-teal/40 text-brand-white relative overflow-hidden">
      {/* Decorative subtle ambient teal glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

      <div
        style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom, 3rem))" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 relative z-10"
      >
        {/* Top Editorial Invitation */}
        <div className="border-b border-brand-teal/30 pb-16 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-brand-white leading-tight">
              Have a story in mind?{" "}
              <span className="text-brand-gold block font-normal mt-1">
                Let&apos;s make something worth remembering.
              </span>
            </h2>
          </div>

          <div>
            <Link
              href="/book"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-brand-teal/30">
          {/* Brand Signature Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold tracking-[0.22em] text-xl text-brand-white">
              BOITUMELO B
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
              Productions • Australia
            </p>
            <p className="text-sm text-brand-gray leading-relaxed max-w-sm pt-2">
              An Australian creative film and video production house specialising in cinematic documentary, visionary music videos, corporate narratives, and commercial cinema.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-brand-gray">
              <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>{siteConfig.serviceRegion}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] text-brand-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-brand-gold hover:text-brand-gold-light transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Project Enquiry</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] text-brand-gold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.servicesNav.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200 block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.25em] text-brand-gold">
              Connect
            </h4>
            <div className="space-y-2 text-sm text-brand-gray-light">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center space-x-2 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-mono text-xs truncate">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center space-x-2 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-mono text-xs">{siteConfig.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center space-x-1 text-brand-gray">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-brand-gold hover:bg-brand-teal/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.vimeo}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-brand-gold hover:bg-brand-teal/30 transition-colors"
                aria-label="Vimeo"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-brand-gold hover:bg-brand-teal/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-brand-gold hover:bg-brand-teal/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} BOITUMELO B PRODUCTIONS. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Australian Production House</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/admin" className="hover:text-brand-gold flex items-center space-x-1 min-h-[44px] items-center">
              <Shield className="w-3 h-3 text-brand-teal-light" />
              <span>Studio Portal</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="min-h-[44px] flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-brand-gray-light hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded py-1 px-3"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
}

