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
        <div className="relative p-8 sm:p-16 lg:p-20 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] shadow-[0_10px_30px_rgba(14,14,15,0.06)] text-center space-y-6 sm:space-y-8">
          {/* Subtle Viewfinder HUD inside final frame */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--gold)]" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[var(--gold)]" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--gold)]" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--gold)]" />

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[var(--white-on-dark)] tracking-[0.04em] uppercase leading-[1.05]">
            YOUR STORY.{" "}
            <span className="text-[var(--gold)] block sm:inline font-normal">
              OUR NEXT FRAME.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[var(--text-on-dark)] font-light leading-relaxed [text-wrap:pretty]">
            From the opening creative brainstorm to the final colour grade, let&apos;s build an extraordinary piece of cinema that moves people and endures.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2.5 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-8 py-3.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-sm group"
            >
              <span>Start a Project Brief</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] text-[var(--white-on-dark)] hover:text-[var(--gold)] px-7 py-3.5 rounded-[2px] border border-[rgba(255,255,255,0.2)] hover:border-[var(--gold)] transition-all duration-250 ease-out"
            >
              <span>Direct Studio Contact</span>
            </Link>
          </div>

          {/* Direct channels sub-strip */}
          <div className="pt-8 border-t border-[rgba(255,255,255,0.12)] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-[var(--text-on-dark)]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-2 hover:text-[var(--gold)] transition-colors duration-250 ease-out"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-[var(--gold)] transition-colors duration-250 ease-out"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-[var(--gold)]/60 hidden sm:inline">•</span>
            <span>Melbourne • Sydney • Australia Wide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

