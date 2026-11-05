import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Film, Disc3 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between p-4 sm:p-8 lg:p-12 relative overflow-hidden film-grain select-none">
      {/* Background Optical Tungsten Halation */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 48%, rgba(203, 141, 68, 0.12) 0%, rgba(8, 18, 21, 0.6) 50%, transparent 100%)",
        }}
      />

      {/* Top Projector Booth Telemetry Header */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-brand-teal/40 pb-4 text-xs font-mono uppercase tracking-[0.2em] text-brand-gray-light">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5 px-2.5 py-1 bg-brand-black/90 border border-brand-teal/60 rounded-sm text-[#FF4D4D] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D] inline-block" />
            <span>OPTICAL FAULT</span>
          </span>
          <span className="hidden sm:inline text-brand-gray">
            REEL UNLATCHED
          </span>
        </div>

        <div className="text-brand-gold font-semibold tracking-[0.25em]">
          TIMECODE: 00:04:04:00
        </div>

        <div className="hidden md:flex items-center space-x-2 text-brand-gray">
          <span>GATE: 2.39:1 ANAMORPHIC</span>
          <span className="text-brand-gold">•</span>
          <span>DCI ARCHIVE</span>
        </div>
      </header>

      {/* Center Optical Calibration Slate */}
      <section className="relative z-10 my-auto py-8 sm:py-12 max-w-4xl mx-auto w-full text-center space-y-8">
        {/* The Anamorphic Viewfinder Framing Container */}
        <div className="relative border border-brand-teal/60 bg-brand-black-elevated/90 backdrop-blur-md p-8 sm:p-16 rounded-sm shadow-2xl">
          {/* Signature 4-Corner Viewfinder Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-gold pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-gold pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-gold pointer-events-none" />

          {/* SVG Optical Resolution Chart in Background */}
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 pointer-events-none opacity-20 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-brand-gold stroke-current fill-none stroke-[0.75]"
            >
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="70" />
              <circle cx="100" cy="100" r="50" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="30" />
              <circle cx="100" cy="100" r="10" />
              <line x1="0" y1="100" x2="200" y2="100" />
              <line x1="100" y1="0" x2="100" y2="200" />
              <line x1="20" y1="20" x2="180" y2="180" strokeDasharray="2 4" />
              <line x1="20" y1="180" x2="180" y2="20" strokeDasharray="2 4" />
            </svg>
          </div>

          {/* Monumental 404 Display Typography */}
          <div className="relative space-y-4">
            <div className="font-display font-bold text-7xl sm:text-8xl md:text-9xl tracking-[0.06em] leading-none text-brand-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              404
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-brand-gold bg-brand-teal/40 px-3 py-1 rounded-sm border border-brand-teal/60">
                FRAME NOT REGISTERED
              </span>

              <h1 className="text-2xl sm:text-4xl font-display font-medium text-brand-white uppercase tracking-[0.05em] leading-tight">
                Leader Runout. Frame Not Found.
              </h1>

              <p className="text-sm sm:text-base text-brand-gray-light font-light leading-relaxed [text-wrap:pretty]">
                The coordinates you requested do not exist in our Australian production vault. The projector shutter has engaged to protect the negative.
              </p>
            </div>
          </div>

          {/* Recovery Actions: High-Contrast Decisive Triggers */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              href="/"
              className="min-h-[48px] inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] font-semibold bg-brand-gold text-brand-black px-7 py-3.5 rounded-sm hover:bg-brand-gold-light hover:shadow-[0_0_25px_rgba(203,141,68,0.4)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Main Reel</span>
            </Link>

            <Link
              href="/work"
              className="min-h-[48px] inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] font-semibold text-brand-white hover:text-brand-gold px-7 py-3.5 rounded-sm border border-brand-teal hover:border-brand-gold bg-brand-black/80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>Explore Selected Films</span>
              <ArrowUpRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Production House Colophon */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-brand-teal/40 pt-4 text-xs font-mono text-brand-gray">
        <span>BOITUMELO B PRODUCTIONS • AUSTRALIAN ARCHIVE</span>
        <span className="hidden sm:inline">MELBOURNE • SYDNEY • REGIONAL AUSTRALIA</span>
        <span className="text-brand-gold font-medium">35MM & LARGE FORMAT CINEMA</span>
      </footer>
    </main>
  );
}
