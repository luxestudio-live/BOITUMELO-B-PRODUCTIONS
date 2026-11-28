import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function FinalFrameCTA() {
  return (
    <section
      aria-label="Final Frame Call to Action"
      className="relative bg-[var(--bg)] overflow-hidden py-20 sm:py-32 flex items-center justify-center border-t border-[var(--line)]"
    >
      {/* Viewfinder Framing Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative p-8 sm:p-16 lg:p-20 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] shadow-[0_10px_30px_rgba(11,19,32,0.07)] text-center space-y-6 sm:space-y-8">
          {/* Subtle Viewfinder HUD inside final frame */}
          <svg className="absolute top-4 left-4 w-4 h-4 text-[var(--gold)] pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 15V1h14" /></svg>
          <svg className="absolute top-4 right-4 w-4 h-4 text-[var(--gold)] pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 15V1H1" /></svg>
          <svg className="absolute bottom-4 left-4 w-4 h-4 text-[var(--gold)] pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1v14h14" /></svg>
          <svg className="absolute bottom-4 right-4 w-4 h-4 text-[var(--gold)] pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 1v14H1" /></svg>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-white tracking-[0.03em] leading-[1.05]">
            Ready to make your video?
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-light leading-relaxed [text-wrap:pretty]">
            Tell us what you need, discuss the project and build the right plan before filming begins.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2.5 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-8 py-3.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-sm group"
            >
              <span>Book a Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] text-white hover:text-[var(--gold)] px-7 py-3.5 rounded-[2px] border border-white/20 hover:border-[var(--gold)] transition-all duration-250 ease-out"
            >
              <span>Direct Studio Contact</span>
            </Link>
          </div>

          {/* Direct channels sub-strip */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-slate-200">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-2 text-slate-200 hover:text-[var(--gold-light)] transition-colors duration-250 ease-out"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--gold-light)] shrink-0" />
              <span className="text-slate-200 hover:text-[var(--gold-light)]">{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-slate-200 hover:text-[var(--gold-light)] transition-colors duration-250 ease-out"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
              <span className="text-slate-200 hover:text-[var(--gold-light)]">WhatsApp Direct</span>
            </a>
            <span className="text-[var(--gold)]/60 hidden sm:inline">•</span>
            <span className="text-slate-200">Northern Adelaide • South Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
