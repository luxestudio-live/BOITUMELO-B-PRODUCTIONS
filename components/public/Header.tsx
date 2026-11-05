"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-teal/40 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
            aria-label="BOITUMELO B PRODUCTIONS Home"
          >
            <span className="font-display font-bold tracking-[0.22em] text-base sm:text-lg text-brand-white group-hover:text-brand-gold transition-colors duration-300">
              BOITUMELO B
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-brand-gray group-hover:text-brand-white transition-colors duration-300">
              Productions • Australia
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
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded ${
                    isActive
                      ? "text-brand-gold font-medium"
                      : "text-brand-gray-light hover:text-brand-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-sm hover:shadow-brand-gold/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-brand-white hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
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

