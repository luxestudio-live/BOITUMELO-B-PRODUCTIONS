import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import CinematicTestimonials from "@/components/cinematic/CinematicTestimonials";
import { sampleTestimonials } from "@/data/testimonials";
import { ArrowUpRight, ArrowRight, Quote, Film } from "lucide-react";

export const metadata = {
  title: "Testimonials & Collaborator Voices | BOITUMELO B PRODUCTIONS",
  description:
    "Read reflections from directors, brand managers, artists, and curators on collaborating with Australian film studio BOITUMELO B PRODUCTIONS.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-36">
      {/* 01: Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-[0.02em] leading-[1.02]">
            Stories Beyond{" "}
            <span className="text-brand-gold block sm:inline font-normal">
              the Screen.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            The relationships behind the work matter as much as the work itself. We measure our success not solely by festival selections or commercial views, but by the trust and integrity sustained with our creative partners.
          </p>
        </div>
      </section>

      {/* 02: Interactive Quotation Theatre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CinematicTestimonials />
      </section>

      {/* 03: Full Roster of Editorial Quotes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorialHeading
          title="Reflections Across Disciplines."
          serifAccent="Documentary, Music & Commerce."
          lead="Insights from cultural institutions, independent recording artists, and corporate innovators across Australia."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-black-elevated border border-brand-teal/40 hover:border-brand-gold/60 p-8 sm:p-10 rounded-sm flex flex-col justify-between transition-colors space-y-8 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-teal/20 text-xs font-mono">
                  <span className="text-brand-gold uppercase tracking-wider font-semibold">
                    {t.serviceCategory}
                  </span>
                  <span className="text-brand-gray">Film: {t.projectTitle}</span>
                </div>

                <Quote className="w-6 h-6 text-brand-gold/40 mb-4" />
                <p className="text-base text-brand-gray-light leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-brand-teal/20 flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/50 flex-shrink-0">
                  <Image
                    src={t.portraitUrl}
                    alt={t.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-medium text-base text-brand-white">
                    {t.author}
                  </h3>
                  <p className="text-xs font-mono text-brand-gray">
                    {t.role} • {t.company} ({t.year})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04: Bottom End CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-brand-white">
          Let&apos;s Build Your Story Next.
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto text-sm sm:text-base font-light">
          Join our growing circle of collaborative partners across Australia and internationally.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-4">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl"
          >
            <span>Start a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium text-brand-white hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-teal hover:border-brand-gold transition-colors"
          >
            <span>Explore All Work</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
