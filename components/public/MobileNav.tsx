"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { X, ArrowRight, Instagram, Video, Mail, Phone } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-brand-black/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fade-in overflow-y-auto"
    >
      {/* Top Header inside overlay */}
      <div className="flex items-center justify-between border-b border-brand-teal/40 pb-5">
        <Link
          href="/"
          onClick={onClose}
          className="font-display font-bold tracking-[0.2em] text-lg text-brand-white"
        >
          BOITUMELO B
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="p-2 text-brand-gray-light hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
          aria-label="Close navigation menu"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Nav Links with large typography */}
      <nav className="my-auto py-8 space-y-4" aria-label="Mobile Navigation Links">
        {siteConfig.navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between text-2xl sm:text-3xl font-display uppercase tracking-[0.12em] transition-all duration-300 py-1 ${
                  isActive
                    ? "text-brand-gold font-semibold translate-x-2"
                    : "text-brand-white hover:text-brand-gold hover:translate-x-2"
                }`}
              >
                <span>
                  <span className="text-xs font-mono text-brand-gray mr-3">0{idx + 1}</span>
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          );
        })}

        {/* Highlighted Booking Action */}
        <div className="pt-6">
          <Link
            href="/book"
            onClick={onClose}
            className="w-full flex items-center justify-center space-x-2 text-sm uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black py-4 px-6 rounded-sm hover:bg-brand-gold-light transition-all shadow-lg"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Footer Info inside Overlay */}
      <div className="border-t border-brand-teal/40 pt-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gray">
          Australia • Cinematic Production Studio
        </p>
        <div className="flex items-center space-x-6 text-sm text-brand-gray-light">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center space-x-1.5 hover:text-brand-gold transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs font-mono">{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden sm:flex items-center space-x-1.5 hover:text-brand-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs font-mono">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

