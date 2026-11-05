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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            Let&apos;s Make{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              Something Happen.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            Whether you are commissioning a national documentary, planning a music video, or repositioning an iconic brand, we invite you to begin the conversation.
          </p>
        </div>
      </section>

      {/* 02: Grid Layout: Form on Left/Main, Direct Contact & WhatsApp on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Block */}
          <div className="lg:col-span-7 bg-brand-black-elevated/70 border border-brand-teal/40 p-8 sm:p-12 rounded-sm shadow-xl">
            <div className="mb-8 pb-6 border-b border-brand-teal/30">
              <h2 className="text-2xl font-display font-medium text-brand-white">
                Project Commission Enquiry
              </h2>
              <p className="text-xs text-brand-gray mt-1 font-light">
                Provide preliminary parameters regarding your story, timeline, and scope.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Direct Info & Regional Presence Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channels Card */}
            <div className="p-8 bg-brand-black-elevated border border-brand-teal/40 rounded-sm space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block">
                Direct Channels
              </span>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start space-x-3.5 group text-sm text-brand-gray-light hover:text-brand-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[11px] font-mono text-brand-gray uppercase">
                      Email Collaboration Desk
                    </span>
                    <span className="font-mono text-brand-white group-hover:text-brand-gold">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start space-x-3.5 group text-sm text-brand-gray-light hover:text-brand-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[11px] font-mono text-brand-gray uppercase">
                      Telephone
                    </span>
                    <span className="font-mono text-brand-white group-hover:text-brand-gold">
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
                    className="w-full flex items-center justify-between p-3.5 bg-brand-teal/40 border border-brand-teal hover:border-brand-gold rounded-sm text-xs font-mono uppercase tracking-wider text-brand-white hover:text-brand-gold transition-all"
                  >
                    <span className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-brand-gold" />
                      <span>WhatsApp Direct Message</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] text-brand-gray block mt-1 font-mono">
                    Direct Line: {siteConfig.whatsappDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Australian Service Footprint Card */}
            <div className="p-8 bg-brand-teal rounded-sm border border-brand-teal-light space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block">
                Operating Footprint
              </span>
              <h3 className="text-xl font-display font-medium text-brand-white">
                Australia-Wide Operations
              </h3>
              <p className="text-sm text-brand-gray-light leading-relaxed font-light">
                Headquartered in Australia with regular production footprints across Melbourne, Sydney, Brisbane, and remote regional locations. Our remote travel packages include fully insured mobile cinema camera setups and solar-backed field workflows.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-brand-gold">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{siteConfig.serviceRegion}</span>
              </div>
            </div>

            {/* Turnaround Standards Note */}
            <div className="p-6 bg-brand-black-elevated/40 border border-brand-teal/30 rounded-sm flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div className="text-xs text-brand-gray space-y-1">
                <span className="font-medium text-brand-white uppercase font-mono block">
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

