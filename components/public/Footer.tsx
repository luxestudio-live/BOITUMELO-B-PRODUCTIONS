"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Instagram, Facebook, Video, Youtube, Linkedin, Shield } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";
import { subscribeSettings } from "@/lib/firebase-service";

export default function Footer() {
  const [settings, setSettings] = useState({
    email: siteConfig.email,
    phone: siteConfig.phone,
    tiktok: siteConfig.tiktok,
    instagram: siteConfig.instagram,
    facebook: siteConfig.facebook,
    vimeo: siteConfig.vimeo,
  });

  useEffect(() => {
    const unsub = subscribeSettings((data) => {
      if (data) {
        setSettings((prev) => ({
          ...prev,
          email: data.email || prev.email,
          phone: data.phone || prev.phone,
          tiktok: data.tiktok || prev.tiktok,
          instagram: data.instagram || prev.instagram,
          facebook: data.facebook || prev.facebook,
          vimeo: data.vimeo || prev.vimeo,
        }));
      }
    });
    return () => unsub();
  }, []);

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
            <Link
              href="/"
              className="group inline-flex items-center space-x-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-[2px]"
              aria-label="BOITUMELO B PRODUCTIONS Home"
            >
              <Image
                src={getAssetPath("/images/logo-mark.png")}
                alt="Boitumelo B Emblem"
                width={88}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-250 ease-out group-hover:scale-105"
              />
              <div className="flex flex-col border-l border-[rgba(255,255,255,0.18)] pl-3.5 py-0.5">
                <span className="font-display font-bold tracking-[0.2em] text-lg sm:text-xl text-[var(--white-on-dark)] leading-tight">
                  BOITUMELO B
                </span>
                <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.2em] text-[var(--gold)] font-medium leading-tight mt-0.5">
                  Productions • Northern Adelaide
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--text-on-dark)] leading-relaxed max-w-sm pt-2 font-light">
              Video filming and editing in Northern Adelaide, South Australia, covering business, real estate, parties and events through a clear process.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[var(--gold)] flex-shrink-0" />
              <span>{siteConfig.serviceRegion}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[var(--gold-light)] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-on-dark)] hover:text-[var(--gold-light)] transition-colors duration-250 ease-out"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-[var(--gold-light)] hover:text-white transition-colors duration-250 ease-out flex items-center space-x-1 font-medium"
                >
                  <span>Project Enquiry</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[var(--gold-light)] font-medium">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.servicesNav.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[var(--text-on-dark)] hover:text-[var(--gold-light)] transition-colors duration-250 ease-out block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[var(--gold-light)] font-medium">
              Connect
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-on-dark)]">
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center space-x-2 hover:text-[var(--gold-light)] transition-colors duration-250 ease-out"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--gold-light)]" />
                <span className="font-mono text-xs truncate">{settings.email}</span>
              </a>
              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center space-x-2 hover:text-[var(--gold-light)] transition-colors duration-250 ease-out"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--gold-light)]" />
                <span className="font-mono text-xs">{settings.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center space-x-1 text-slate-300">
              <a
                href={settings.tiktok}
                target="_blank"
                rel="noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
              <a
                href={settings.instagram}
                target="_blank"
                rel="noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.facebook}
                target="_blank"
                rel="noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                aria-label="YouTube"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
            className="min-h-[44px] flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] text-slate-300 hover:text-[var(--gold)] transition-colors duration-250 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded py-1 px-3"
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

