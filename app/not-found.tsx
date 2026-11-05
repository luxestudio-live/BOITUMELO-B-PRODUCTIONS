import Link from "next/link";
import { Film, ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="relative">
        <Film className="w-20 h-20 text-brand-teal animate-pulse-subtle mx-auto" />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-brand-gold">
          404
        </span>
      </div>

      <div className="space-y-3 max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-brand-white">
          Frame Not Found.
        </h1>
        <p className="text-sm sm:text-base text-brand-gray font-light leading-relaxed">
          The page or project you were looking for doesn&apos;t exist or has moved. Return to the home page or browse our selected films.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-white hover:text-brand-gold px-6 py-3.5 rounded-sm border border-brand-teal hover:border-brand-gold transition-colors"
        >
          <span>Explore Selected Films</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="pt-12 text-xs font-mono text-brand-teal-light">
        BOITUMELO B PRODUCTIONS • AUSTRALIA
      </div>
    </div>
  );
}

