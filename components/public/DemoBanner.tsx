"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, X, Shield } from "lucide-react";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Demonstration Notice"
      className="bg-brand-teal-dark border-b border-brand-teal/60 text-brand-gray-light py-2 px-4 text-xs font-mono relative z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Info className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
          <p className="truncate">
            <span className="text-brand-gold font-semibold uppercase tracking-wider mr-1.5">
              Prototype Preview:
            </span>
            Demonstration build for BOITUMELO B PRODUCTIONS. All video records and client profiles are demonstration mockups.
          </p>
        </div>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link
            href="/admin"
            className="text-[11px] text-brand-gold hover:underline flex items-center space-x-1"
          >
            <Shield className="w-3 h-3" />
            <span className="hidden sm:inline">CMS Preview</span>
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-brand-gray hover:text-brand-white p-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold"
            aria-label="Dismiss demo banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

