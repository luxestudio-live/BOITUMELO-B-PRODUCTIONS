import EditorialHeading from "@/components/public/EditorialHeading";
import ContactForm from "@/components/public/ContactForm";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MessageSquare, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact Our Studio | Begin a Conversation",
  description:
    "Direct contact channels, studio enquiry form, and Australian service details for BOITUMELO B PRODUCTIONS.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 space-y-20 sm:space-y-32">
      {/* 01: Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-teal tracking-[0.02em] leading-[1.02]">
            Let&apos;s Make{" "}
            <span className="text-brand-gold block sm:inline font-normal">
              Something Happen.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-teal/80 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            Whether you are commissioning a national documentary, planning a music video, or repositioning an iconic brand, we invite you to begin the conversation.
          </p>
        </div>
      </section>

      {/* 02: Grid Layout: Form on Left/Main, Direct Contact & WhatsApp on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Block */}
          <div className="lg:col-span-7 bg-[var(--bg)] border border-[var(--line)] p-8 sm:p-12 rounded-[2px] shadow-[0_10px_30px_rgba(14,14,15,0.06)]">
            <div className="mb-8 pb-6 border-b border-[var(--line)]">
              <h2 className="text-2xl font-display font-medium text-[var(--ink)]">
                Project Commission Enquiry
              </h2>
              <p className="text-xs text-[var(--ink-soft)] mt-1 font-light">
                Provide preliminary parameters regarding your story, timeline, and scope.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Direct Info & Regional Presence Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channels Card */}
            <div className="p-8 bg-[var(--bg)] border border-[var(--line)] rounded-[2px] space-y-6 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--gold)] font-medium block">
                Direct Channels
              </span>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start space-x-3.5 group text-sm text-[var(--ink-soft)] hover:text-[var(--gold-deep)] transition-colors duration-250 ease-out"
                >
                  <Mail className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs font-mono text-[var(--ink-soft)] uppercase">
                      Email Collaboration Desk
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
                  <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs font-mono text-[var(--ink-soft)] uppercase">
                      Telephone
                    </span>
                    <span className="font-mono text-[var(--ink)] group-hover:text-[var(--gold-deep)] font-medium">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* Configurable WhatsApp Button */}
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
                  <span className="text-xs text-[var(--ink-soft)] block mt-1.5 font-mono">
                    Direct Line: {siteConfig.whatsappDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Australian Service Footprint Card */}
            <div className="p-8 bg-[var(--ink)] text-[var(--white-on-dark)] rounded-[2px] border border-[rgba(255,255,255,0.12)] space-y-4 shadow-[0_10px_30px_rgba(14,14,15,0.06)]">
              <h3 className="text-xl font-display font-medium text-[var(--white-on-dark)]">
                Australia-Wide Operations
              </h3>
              <p className="text-sm text-[var(--text-on-dark)] leading-relaxed font-light">
                Headquartered in Australia with regular production footprints across Melbourne, Sydney, Brisbane, and remote regional locations. Our remote travel packages include fully insured mobile cinema camera setups and solar-backed field workflows.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[var(--gold)] font-medium">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{siteConfig.serviceRegion}</span>
              </div>
            </div>

            {/* Turnaround Standards Note */}
            <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[var(--ink-soft)] space-y-1">
                <span className="font-medium text-[var(--ink)] uppercase font-mono block">
                  Studio Response Standard
                </span>
                <p className="leading-relaxed">
                  Every brief receives a thorough review by our creative director. Initial feasibility responses are provided within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

