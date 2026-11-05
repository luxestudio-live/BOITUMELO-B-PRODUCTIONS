"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime exception for diagnostic monitoring
    console.error("Runtime exception captured by global boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center space-y-8 select-none">
      {/* Cinematic HUD Warning Icon */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-brand-teal/40 border border-brand-gold/60 flex items-center justify-center mx-auto text-brand-gold shadow-2xl backdrop-blur-md">
          <AlertTriangle className="w-10 h-10 stroke-[1.5]" />
        </div>
      </div>

      <div className="space-y-3 max-w-lg">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
          Playback Interrupted
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-medium text-brand-white leading-tight">
          Visual Stream Paused.
        </h1>
        <p className="text-sm sm:text-base text-brand-gray-light font-light leading-relaxed [text-wrap:pretty]">
          An unexpected interruption occurred while rendering this frame. You can reload the cinematic experience or return to the studio home page.
        </p>
        {error.digest && (
          <p className="text-[11px] font-mono text-brand-gray pt-1">
            Reference Digest: #{error.digest}
          </p>
        )}
      </div>

      {/* Recovery Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={() => reset()}
          className="min-h-[44px] inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reload Experience</span>
        </button>

        <Link
          href="/"
          className="min-h-[44px] inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] font-medium text-brand-white hover:text-brand-gold px-7 py-3.5 rounded-sm border border-brand-teal hover:border-brand-gold transition-colors bg-brand-black-elevated/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <Home className="w-4 h-4" />
          <span>Return to Studio</span>
        </Link>
      </div>

      <div className="pt-8 text-xs font-mono text-slate-400 tracking-widest uppercase">
        BOITUMELO B PRODUCTIONS • AUSTRALIA
      </div>
    </div>
  );
}

