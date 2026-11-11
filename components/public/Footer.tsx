"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Instagram, Video, Youtube, Linkedin, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--ink)] border-t border-[rgba(255,255,255,0.12)] text-[var(--text-on-dark)] relative overflow-hidden">
      <div
        style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom, 3rem))" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 relative z-10"
      >
        {/* Top Editorial Invitation */}
        <div className="border-b border-[rgba(255,255,255,0.12)] pb-16 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-[var(--white-on-dark)] leading-tight">
              Ready to make your video?{" "}
              <span className="text-[var(--gold)] block font-normal mt-1">
                Tell us what you need and build the right plan.
              </span>
            </h2>
          </div>

          <div>
            <Link
              href="/book"
              className="inline-flex items-center space-x-2.5 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-7 py-3.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-sm"
            >
              <span>Book a Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[rgba(255,255,255,0.12)]">
          {/* Brand Signature Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold tracking-[0.22em] text-xl text-[var(--white-on-dark)]">
              BOITUMELO B
            </h3>
            <p className="text-xs uppercase font-mono tracking-[0.2em] text-[var(--gold)] font-medium">
              Productions • Northern Adelaide
            </p>
            <p className="text-sm text-[var(--text-on-dark)] leading-relaxed max-w-sm pt-2 font-light">
              Video filming and editing in Northern Adelaide, South Australia, covering business, real estate, parties and events through a clear process.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-[var(--text-on-dark)]/80">
              <MapPin className="w-3.5 h-3.5 text-[var(--gold)] flex-shrink-0" />
              <span>{siteConfig.serviceRegion}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.15em] text-[var(--gold)] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-on-dark)] hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-250 ease-out flex items-center space-x-1 font-medium"
                >
                  <span>Project Enquiry</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.15em] text-[var(--gold)] font-medium">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.servicesNav.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[var(--text-on-dark)] hover:text-[var(--gold)] transition-colors duration-250 ease-out block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.15em] text-[var(--gold)] font-medium">
              Connect
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-on-dark)]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center space-x-2 hover:text-[var(--gold)] transition-colors duration-250 ease-out"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="font-mono text-xs truncate">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center space-x-2 hover:text-[var(--gold)] transition-colors duration-250 ease-out"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="font-mono text-xs">{siteConfig.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center space-x-1 text-[var(--text-on-dark)]">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.vimeo}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="Vimeo"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-on-dark)]/80">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} BOITUMELO B PRODUCTIONS. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Australian Production House</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/admin" className="hover:text-[var(--gold)] flex items-center space-x-1 min-h-[44px] transition-colors duration-250 ease-out">
              <Shield className="w-3 h-3 text-[var(--gold)]" />
              <span>Studio Portal</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="min-h-[44px] flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] text-[var(--text-on-dark)] hover:text-[var(--gold)] transition-colors duration-250 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded py-1 px-3"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--gold)]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

