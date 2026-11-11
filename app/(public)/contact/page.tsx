import Link from "next/link";
import ContactForm from "@/components/public/ContactForm";
import { siteConfig } from "@/data/site-config";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Calendar,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Contact Videographer Adelaide | Book a Video Consultation",
  description:
    "Need a videographer in Northern Adelaide? Contact the business to discuss your project, filming needs, editing and the next steps.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 sm:space-y-28 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Intro + Answer Nugget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Northern Adelaide • South Australia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            Let’s discuss your project
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            You know you need a video. You may not know exactly how to make it
            happen. Start with a conversation about what you need.
          </p>
        </div>

        {/* Answer Nugget Callout */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span>Answer Nugget • Contact & Service Area</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
            The video business is based in Northern Adelaide, South Australia, where
            the owner works as a one-person video crew. Northern Adelaide is the
            preferred service area because shorter travel makes filming jobs more
            practical and reduces unpaid travel time and petrol costs.
          </p>
        </div>
      </section>

      {/* 02: Key Questions: What happens when I contact you? / What should I bring? / Where do you work? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <Calendar className="w-4 h-4 text-[var(--gold)]" />
              <span>What happens when I contact you?</span>
            </div>
            <h3 className="font-display font-medium text-lg text-[var(--ink)]">
              The first step is a booking.
            </h3>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              You book a date and time to discuss the project. The consultation covers
              expectations, payments, planning, filming, editing and revisions.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <FileText className="w-4 h-4 text-[var(--gold)]" />
              <span>What should I bring?</span>
            </div>
            <h3 className="font-display font-medium text-lg text-[var(--ink)]">
              Whatever information you have.
            </h3>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              A project brief or pre-production details help establish what needs to
              happen before filming starts. If you are not sure what you need, explain
              what you are trying to achieve and we can discuss options.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <MapPin className="w-4 h-4 text-[var(--gold)]" />
              <span>Where do you work?</span>
            </div>
            <h3 className="font-display font-medium text-lg text-[var(--ink)]">
              Northern Adelaide base.
            </h3>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              The business is based in Northern Adelaide, South Australia. Shorter
              travel makes it easier to manage jobs efficiently as a one-person crew.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Contact Form & Direct Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Block */}
          <div className="lg:col-span-7 bg-[var(--bg)] border border-[var(--line)] p-8 sm:p-12 rounded-[2px] shadow-subtle">
            <div className="mb-8 pb-6 border-b border-[var(--line)]">
              <h2 className="text-2xl font-display font-medium text-[var(--ink)]">
                Send a Message or Project Details
              </h2>
              <p className="text-xs text-[var(--ink-soft)] mt-1 font-light">
                Tell us about your project, timeline and what you want to achieve.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Direct Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Ready to talk? Consultation Card */}
            <div className="p-8 bg-[var(--ink)] text-[var(--white-on-dark)] rounded-[2px] border border-[rgba(255,255,255,0.12)] space-y-4 shadow-subtle">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold)] font-medium block">
                Direct Booking
              </span>
              <h3 className="text-2xl font-display font-medium text-[var(--white-on-dark)]">
                Ready to talk?
              </h3>
              <p className="text-sm text-[var(--text-on-dark)] leading-relaxed font-light">
                Tell us what you need and book a project consultation to establish
                expectations and planning before filming begins.
              </p>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-between p-3.5 bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] rounded-[2px] text-[11px] font-mono uppercase tracking-[0.12em] font-medium transition-all duration-250 ease-out shadow-sm"
                >
                  <span>Book a Project Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Direct Channels Card */}
            <div className="p-8 bg-[var(--bg)] border border-[var(--line)] rounded-[2px] space-y-6 shadow-subtle">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium block">
                Direct Channels
              </span>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start space-x-3.5 group text-sm text-[var(--ink-soft)] hover:text-[var(--gold-deep)] transition-colors duration-250 ease-out"
                >
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs font-mono text-[var(--ink-soft)] uppercase">
                      Email
                    </span>
                    <span className="font-mono text-[var(--ink)] group-hover:text-[var(--gold-deep)] font-medium">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start space-x-3.5 group text-sm text-[var(--ink-soft)] hover:text-[var(--gold-deep)] transition-colors duration-250 ease-out"
                >
                  <Phone className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs font-mono text-[var(--ink-soft)] uppercase">
                      Telephone
                    </span>
                    <span className="font-mono text-[var(--ink)] group-hover:text-[var(--gold-deep)] font-medium">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between p-3.5 bg-[var(--ink)] text-[var(--white-on-dark)] hover:bg-[var(--gold)] hover:text-[var(--ink)] rounded-[2px] text-[11px] font-mono uppercase tracking-[0.12em] transition-all duration-250 ease-out shadow-sm"
                  >
                    <span className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-[var(--gold)]" />
                      <span>WhatsApp Direct Message</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] flex items-start space-x-3.5">
              <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
              <div className="text-xs text-[var(--ink-soft)] space-y-1">
                <span className="font-medium text-[var(--ink)] uppercase font-mono block">
                  Service Area
                </span>
                <p className="leading-relaxed">
                  Based in Northern Adelaide, South Australia. Serving Northern Adelaide
                  and surrounding metropolitan areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
