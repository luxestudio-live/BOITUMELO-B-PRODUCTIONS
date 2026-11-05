import Link from "next/link";
import Image from "next/image";
import HeroShowreel from "@/components/public/HeroShowreel";
import EditorialHeading from "@/components/public/EditorialHeading";
import ProjectCard from "@/components/public/ProjectCard";
import { sampleProjects } from "@/data/projects";
import { servicesData } from "@/data/services";
import { sampleTestimonials } from "@/data/testimonials";
import { ArrowUpRight, ArrowRight, Film, Sparkles, CheckCircle2, Quote } from "lucide-react";

export default function HomePage() {
  const featuredProjects = sampleProjects.filter((p) => p.featured);
  const mainFeature = featuredProjects[0] || sampleProjects[0];
  const supportingProjects = featuredProjects.slice(1, 4);
  const homeTestimonials = sampleTestimonials.slice(0, 3);
  const servicesList = Object.values(servicesData);

  return (
    <div className="space-y-24 sm:space-y-36">
      {/* SECTION 01: Full-Screen Cinematic Showreel Hero */}
      <HeroShowreel />

      {/* SECTION 02: Editorial Studio Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Studio Introduction">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>Perspective & Intent</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-white leading-[1.08] tracking-tight">
              We don&apos;t just capture moments.{" "}
              <span className="font-serif italic font-normal text-brand-gray-light block mt-1">
                We shape how they&apos;re remembered.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-brand-gray-light text-base sm:text-lg leading-relaxed font-light">
            <p>
              In an era overwhelmed by disposable digital clips, genuine cinematic storytelling remains the most potent medium on earth. At <strong className="text-brand-white font-medium">BOITUMELO B PRODUCTIONS</strong>, we approach every frame with narrative discipline, visual reverence, and emotional honesty.
            </p>
            <p>
              Operating across Australia and on select international assignments, our studio bridges independent documentary cinema with the commercial precision demanded by visionary brands, cultural institutions, and recording artists. We do not operate as camera operators for hire—we are dedicated creative collaborators.
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gold hover:text-brand-gold-light transition-colors py-2"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-brand-teal text-xs">•</span>
              <Link
                href="/services"
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gray hover:text-brand-white transition-colors py-2"
              >
                <span>Our Capabilities</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Selected Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Selected Projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <EditorialHeading
            eyebrow="Selected Portfolio"
            title="The Work Speaks."
            serifAccent="Framed with Intention."
            lead="A curated collection of recent productions spanning non-fiction cinema, music films, and commercial campaigns."
          />
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gold hover:text-brand-gold-light py-2"
          >
            <span>View All Projects ({sampleProjects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Main Heroic Feature Project */}
          <ProjectCard project={mainFeature} layoutVariant="featured-wide" priority />

          {/* Staggered Supporting Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {supportingProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layoutVariant={idx % 2 === 0 ? "editorial" : "standard"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Creative Capabilities (Services Breakdown) */}
      <section className="bg-brand-teal-deep py-20 sm:py-32 border-y border-brand-teal/40 relative overflow-hidden" aria-label="Creative Capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <EditorialHeading
              eyebrow="Core Disciplines"
              title="Creative Capabilities."
              serifAccent="Bespoke Film Direction."
              lead="Four specialized production verticals engineered to elevate narrative impact across distinct audiences and mediums."
            />
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gold hover:text-brand-gold-light py-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className="group relative bg-brand-black/60 border border-brand-teal/40 hover:border-brand-gold/60 p-8 sm:p-10 rounded-sm transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-brand-teal/30">
                    <span className="text-xs font-mono tracking-[0.3em] text-brand-gold font-semibold">
                      VERTICAL // {service.number}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-brand-gray group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-6 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm text-brand-gray leading-relaxed font-light">
                    {service.tagline}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.visualDirection.aestheticTokens.slice(0, 3).map((token) => (
                      <span
                        key={token}
                        className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-brand-teal/30 border border-brand-teal/50 text-brand-gray-light rounded-sm"
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-teal/20">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs uppercase tracking-[0.2em] font-medium text-brand-white group-hover:text-brand-gold transition-colors inline-flex items-center space-x-2"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: The Creative Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Creative Philosophy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[16/11] relative rounded-sm overflow-hidden border border-brand-teal/40">
              <Image
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1400&q=85"
                alt="Behind the scenes cinema production at golden hour"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-gold block mb-1">
                  On Location • Flinders Ranges
                </span>
                <p className="text-xs text-brand-gray-light">
                  Capturing dawn atmospheric light on large format sensors.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <EditorialHeading
              eyebrow="Creative Doctrine"
              title="Every Frame Has a Purpose."
              serifAccent="Crafted Without Shortcuts."
            />

            <div className="space-y-4 text-brand-gray-light text-base leading-relaxed font-light">
              <p>
                We reject meaningless visual clutter. In cinematography, lighting is not merely illumination—it is emotional atmosphere. Camera movement is not an arbitrary camera trick—it is the audience&apos;s physical empathy in space.
              </p>
              <p>
                Whether spending two weeks listening to desert elders in the Northern Territory or staging multi-camera nocturnal music sequences in Melbourne, we honour the trust placed in our studio. We believe that true luxury in filmmaking lives in nuance: authentic sound design, respectful human collaboration, and uncompromising color science.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-brand-teal/30">
              <div>
                <span className="text-2xl sm:text-3xl font-display font-medium text-brand-gold">
                  100%
                </span>
                <p className="text-xs uppercase tracking-wider text-brand-gray mt-1 font-mono">
                  Bespoke Craftsmanship
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-medium text-brand-gold">
                  4K / 8K
                </span>
                <p className="text-xs uppercase tracking-wider text-brand-gray mt-1 font-mono">
                  Cinema Master Deliveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: How We Create (Production Journey) */}
      <section className="bg-brand-black-elevated py-20 sm:py-28 border-y border-brand-teal/30" aria-label="Production Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialHeading
            align="center"
            eyebrow="Our Methodology"
            title="How We Create."
            serifAccent="From Concept to Final Cut."
            lead="A disciplined, transparent production journey designed to foster creative boldness while protecting timeline and budget certainty."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                name: "Discover",
                lead: "Unearthing the core narrative thesis, creative ambition, and strategic objectives through deep listening.",
              },
              {
                step: "02",
                name: "Develop",
                lead: "Shaping the visual treatment, casting, location architecture, lighting tests, and scheduling blueprint.",
              },
              {
                step: "03",
                name: "Produce",
                lead: "Principal photography orchestrated with precision cinema camera packages, naturalistic lighting, and empathetic direction.",
              },
              {
                step: "04",
                name: "Refine & Deliver",
                lead: "Meticulous edit pacing, bespoke sound mixing, precision DaVinci color grading, and multi-platform master packages.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="relative bg-brand-black/70 border border-brand-teal/30 p-8 rounded-sm hover:border-brand-gold/50 transition-colors"
              >
                <span className="text-3xl font-display font-bold text-brand-teal-light">
                  {p.step}
                </span>
                <h3 className="text-xl font-display font-medium text-brand-white mt-4">
                  {p.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-brand-gray leading-relaxed font-light">
                  {p.lead}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07: Client Voices (Testimonials) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Client Voices">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <EditorialHeading
            eyebrow="Collaborator Feedback"
            title="Client Voices."
            serifAccent="Words Behind the Frames."
            lead="Reflections from artists, curators, and brand leaders who have trusted BOITUMELO B PRODUCTIONS with their stories."
          />
          <Link
            href="/testimonials"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gold hover:text-brand-gold-light py-2"
          >
            <span>Read All Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {homeTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-black-elevated border border-brand-teal/30 p-8 sm:p-10 rounded-sm flex flex-col justify-between relative group hover:border-brand-gold/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-gold/40 mb-6" />
                <p className="text-sm sm:text-base text-brand-gray-light leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-teal/20 flex items-center space-x-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-brand-gold/40 flex-shrink-0">
                  <Image
                    src={t.portraitUrl}
                    alt={t.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-medium text-sm text-brand-white">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-brand-gray font-mono">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 08: Final Cinematic Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" aria-label="Final Call to Action">
        <div className="relative bg-brand-teal rounded-sm p-10 sm:p-16 lg:p-20 overflow-hidden border border-brand-teal-light shadow-2xl">
          {/* Subtle background graphic texture */}
          <div className="absolute inset-0 film-grain opacity-50 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-black/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-gold">
              Begin the Collaboration
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-brand-white tracking-tight leading-[1.05]">
              Your story deserves more{" "}
              <span className="font-serif italic font-normal text-brand-gray-light block">
                than ordinary.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-light font-light max-w-xl leading-relaxed">
              From the initial conversation to the master color grade, let&apos;s create a piece of cinema that moves people and endures.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl"
              >
                <span>Let&apos;s Create Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-brand-white hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-teal-light hover:border-brand-gold transition-colors"
              >
                <span>Direct Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

