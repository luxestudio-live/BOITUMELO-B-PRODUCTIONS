import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function FinalFrameCTA() {
  return (
    <section
      aria-label="Final Frame Call to Action"
      className="relative bg-white overflow-hidden py-28 sm:py-44 flex items-center justify-center border-t border-brand-teal/15"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FA]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

      {/* Viewfinder Framing Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative p-6 sm:p-16 lg:p-20 rounded-sm border border-brand-gold/60 bg-brand-teal shadow-2xl text-center space-y-6 sm:space-y-8">
          {/* Subtle Viewfinder HUD inside final frame */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-gold" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-gold" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-gold" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-gold" />

          <h2 className="text-3xl sm:text-6xl md:text-7xl font-display font-medium text-white tracking-[0.04em] uppercase leading-[0.98]">
            YOUR STORY.{" "}
            <span className="text-brand-gold block sm:inline font-normal">
              OUR NEXT FRAME.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-200 font-light leading-relaxed [text-wrap:pretty]">
            From the opening creative brainstorm to the final colour grade, let&apos;s build an extraordinary piece of cinema that moves people and endures.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/book"
              className="inline-flex items-center space-x-3 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-white px-9 py-4 rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl hover:shadow-brand-gold/30 group"
            >
              <span>Start a Project Brief</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] text-white hover:text-brand-gold px-7 py-4 rounded-sm border border-brand-gold/60 hover:bg-brand-gold/20 transition-colors bg-brand-teal-dark/60"
            >
              <span>Direct Studio Contact</span>
            </Link>
          </div>

          {/* Direct channels sub-strip */}
          <div className="pt-8 border-t border-brand-teal-light/40 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-slate-300">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-brand-gold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-brand-gold/60 hidden sm:inline">•</span>
            <span>Melbourne • Sydney • Australia Wide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

