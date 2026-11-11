"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Menu, ArrowUpRight } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-out bg-[var(--bg)] text-[var(--ink)] border-b border-[var(--line)] ${
          scrolled ? "py-3.5 shadow-[0_10px_30px_rgba(14,14,15,0.06)]" : "py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-[2px]"
            aria-label="BOITUMELO B PRODUCTIONS Home"
          >
            <span className="font-display font-medium tracking-[0.2em] text-base sm:text-lg text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors duration-250 ease-out">
              BOITUMELO B
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] group-hover:text-[var(--ink)] transition-colors duration-250 ease-out">
              Productions • Northern Adelaide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group text-[12px] uppercase tracking-[0.12em] transition-colors duration-250 ease-out relative py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded-[2px] ${
                    isActive
                      ? "text-[var(--ink)] font-medium"
                      : "text-[var(--ink)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[var(--gold)] transition-all duration-250 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center space-x-2 text-[12px] uppercase tracking-[0.12em] font-medium bg-[var(--ink)] text-[var(--white-on-dark)] hover:bg-[var(--gold)] hover:text-[var(--ink)] px-5 py-2.5 rounded-[2px] transition-all duration-250 ease-out shadow-[0_10px_30px_rgba(14,14,15,0.06)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--ink)] hover:text-[var(--gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-[2px] transition-colors duration-250 ease-out"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Fullscreen Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

