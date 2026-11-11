import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import CinematicInquiries from "@/components/cinematic/CinematicInquiries";
import { servicesData } from "@/data/services";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Production Services | Film, Music Video, Corporate & Commercial",
  description:
    "Explore our four production disciplines: Documentary & Film, Music Videos, Corporate Video, and Brand & Commercial Cinema.",
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-36">
      {/* 01: Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-teal tracking-[0.02em] leading-[1.02]">
            Every Story Deserves{" "}
            <span className="text-brand-gold block sm:inline font-normal">
              Its Own Vision.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-teal/80 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            We reject one-size-fits-all video packages. Each production vertical is structured around bespoke narrative methodologies, custom lighting architectures, and tailored post-production workflows.
          </p>
        </div>
      </section>

      {/* 02: Detailed Services Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesList.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <article
              key={service.slug}
              id={service.slug}
              className="bg-white border border-brand-teal/15 rounded-sm overflow-hidden p-8 sm:p-12 lg:p-16 hover:border-brand-gold/70 transition-colors shadow-sm hover:shadow-md"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
                {/* Media Image / Visual Frame */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-brand-teal/20 shadow-xl group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-brand-teal text-xs font-mono uppercase tracking-[0.2em] text-brand-gold rounded-sm border border-brand-teal-light font-medium shadow-sm">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Narrative & Scope Highlights */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-teal leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-brand-teal/80 leading-relaxed font-light">
                    {service.introNarrative}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-teal font-semibold block">
                      Scope Highlights:
                    </span>
                    <ul className="space-y-2">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <li key={cap.name} className="flex items-start space-x-3 text-sm text-brand-teal/80">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-brand-teal font-medium">{cap.name}:</strong>{" "}
                            {cap.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center space-x-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-sm"
                    >
                      <span>Explore Dedicated Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/book"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-teal/70 hover:text-brand-gold transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 03: Common Production Inquiries Terminal */}
      <CinematicInquiries />

      {/* 04: Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-brand-teal">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-brand-teal/80 max-w-xl mx-auto text-sm sm:text-base font-light">
          Fill out our multi-step project brief builder or reach out directly to begin the creative conversation.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-4">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl"
          >
            <span>Start a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-teal hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-teal/20 hover:border-brand-gold transition-colors"
          >
            <span>Direct Contact</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

