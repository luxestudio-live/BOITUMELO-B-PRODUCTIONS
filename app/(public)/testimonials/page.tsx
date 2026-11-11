import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import CinematicTestimonials from "@/components/cinematic/CinematicTestimonials";
import { sampleTestimonials } from "@/data/testimonials";
import { ArrowUpRight, ArrowRight, Quote, Sparkles } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | Videographer Adelaide",
  description:
    "Hear from customers who partnered with Boitumelo B Productions for business videos, real estate, parties and events.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 sm:space-y-32 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Header + Answer Nugget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Quote className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Social Proof • Northern Adelaide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            Hear from customers
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            Customers finish projects feeling happy, excited and surprised by the
            result, including reactions such as &ldquo;wow, this looks so good&rdquo;.
          </p>
        </div>

        {/* Social Proof Callout */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span>Customer Experience</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
            The interview describes customers finishing projects feeling happy,
            excited and surprised by the result, including reactions such as
            &ldquo;wow, this looks so good&rdquo;. From the initial booking and brief
            through to the revision and delivery, our goal is a clear and dependable
            collaboration.
          </p>
        </div>
      </section>

      {/* 02: Interactive Quotation Theatre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CinematicTestimonials />
      </section>

      {/* 03: Full Roster of Editorial Quotes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[var(--line)] pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
            Project Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)] mt-2">
            Client Voices Across Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--gold)] p-8 sm:p-10 rounded-[2px] flex flex-col justify-between transition-all duration-250 ease-out space-y-8 shadow-subtle"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--line)] text-xs font-mono">
                  <span className="text-[var(--gold-deep)] uppercase tracking-wider font-semibold">
                    {t.serviceCategory}
                  </span>
                  <span className="text-[var(--ink-soft)]">Project: {t.projectTitle}</span>
                </div>

                <Quote className="w-6 h-6 text-[var(--gold)] mb-4" />
                <p className="text-base text-[var(--ink)] leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--gold)] shrink-0">
                  <Image
                    src={t.portraitUrl}
                    alt={t.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-medium text-base text-[var(--ink)]">
                    {t.author}
                  </h3>
                  <p className="text-xs font-mono text-[var(--ink-soft)]">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04: Bottom End CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <div className="p-10 sm:p-16 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] text-[var(--white-on-dark)] space-y-6 shadow-subtle">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--white-on-dark)] leading-tight">
            Ready to make your video?
          </h2>
          <p className="text-[var(--text-on-dark)] max-w-xl mx-auto text-base font-light">
            Tell us what you need, discuss the project and build the right plan before
            filming begins.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2.5 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] px-8 py-3.5 rounded-[2px] transition-all duration-250 ease-out shadow-sm"
            >
              <span>Book a Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] text-[var(--white-on-dark)] hover:text-[var(--gold)] px-6 py-3.5 rounded-[2px] border border-[rgba(255,255,255,0.2)] hover:border-[var(--gold)] transition-all duration-250 ease-out"
            >
              <span>See the Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
