import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import ProjectCard from "@/components/public/ProjectCard";
import VideoPlayer from "@/components/public/VideoPlayer";
import ViewfinderHUD from "@/components/cinematic/ViewfinderHUD";
import CinematicInquiries from "@/components/cinematic/CinematicInquiries";
import { ServiceDetail } from "@/data/services";
import { sampleProjects } from "@/data/projects";
import { ArrowUpRight, ArrowRight, CheckCircle2, Film, Clapperboard, Sparkles } from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceDetail;
  aestheticVariant: "documentary" | "music" | "corporate" | "commercial";
}

export default function ServiceDetailView({
  service,
  aestheticVariant,
}: ServiceDetailViewProps) {
  const relatedProjects = sampleProjects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-36">
      {/* 01: Distinct Cinematic Hero with HUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-300">
            <span className="text-brand-gold font-semibold">{service.shortTitle}</span>
            <span>•</span>
            <span>Australian Production Standard</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            {service.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            {service.tagline}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {service.visualDirection.aestheticTokens.map((token) => (
              <span
                key={token}
                className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 bg-brand-teal/40 border border-brand-teal/60 text-brand-gold rounded-sm shadow-sm"
              >
                {token}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Video Preview / Poster with Viewfinder Overlay */}
        <div className="mt-12 relative rounded-sm overflow-hidden border border-brand-gold/60 shadow-2xl">
          <VideoPlayer
            src={service.videoPreviewUrl}
            poster={service.heroImage}
            title={service.title}
            aspectRatio="aspect-[21/9] sm:aspect-[2.39/1]"
          />
        </div>
      </section>

      {/* 02: In-Depth Narrative & Visual Direction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-brand-black-elevated border border-brand-teal/50 rounded-sm shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold block mb-2">
                Cinematic Art Direction
              </span>
              <h2 className="text-2xl font-display font-medium text-brand-white">
                {service.visualDirection.title}
              </h2>
              <p className="mt-4 text-sm text-brand-gray-light leading-relaxed font-light">
                {service.visualDirection.description}
              </p>
            </div>

            <div className="p-8 bg-brand-teal rounded-sm border border-brand-teal-light shadow-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold block mb-2">
                Production Engagement
              </span>
              <h3 className="text-xl font-display font-medium text-brand-white">
                Commission a Production
              </h3>
              <p className="mt-2 text-xs text-brand-gray-light leading-relaxed">
                We accept a limited number of production commissions per season to ensure singular directorial focus.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-md"
              >
                <span>Initiate Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-brand-gray-light text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl font-normal text-brand-white leading-relaxed">
              {service.introNarrative}
            </p>
            <p>
              Every production under this vertical benefits from our dedicated cinema camera packages, seasoned lighting technicians, and in-house post-production color science. We collaborate intimately with our clients—maintaining full transparency across every stage of pre-production, principal photography, and master editorial delivery.
            </p>

            {/* Scope Deliverables */}
            <div className="pt-6 border-t border-brand-teal/30 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-brand-white">
                Core Deliverables & Technical Specs:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    className="p-5 bg-brand-black-elevated border border-brand-teal/40 rounded-sm"
                  >
                    <div className="flex items-center space-x-2 text-brand-gold mb-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-white">
                        {cap.name}
                      </span>
                    </div>
                    <p className="text-xs text-brand-gray leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Suggested Creative Workflow */}
      <section className="bg-brand-black-elevated py-20 sm:py-28 border-y border-brand-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialHeading
            title="The Creative Journey."
            serifAccent={`Crafted for ${service.shortTitle}.`}
            lead="How we navigate from the opening brainstorming conversation to final exhibition masters."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-brand-black/70 border border-brand-teal/40 p-8 rounded-sm hover:border-brand-gold/60 transition-colors shadow-lg"
              >
                <span className="text-3xl font-display font-bold text-brand-teal-light">
                  {p.step}
                </span>
                <h3 className="text-lg font-display font-medium text-brand-white mt-4">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-brand-gray leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Representative Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <EditorialHeading
              title="Related Productions."
              serifAccent="Evidence of Craft."
              lead={`Examine completed films produced under our ${service.shortTitle} discipline.`}
            />
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium text-brand-gold hover:text-brand-gold-light py-2"
            >
              <span>Explore Full Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} layoutVariant="editorial" />
            ))}
          </div>
        </section>
      )}

      {/* 05: Frequently Asked Questions Terminal */}
      <CinematicInquiries
        title={`${service.shortTitle} Inquiries.`}
        serifAccent="Everything You Need to Know."
        lead={`Specific technical standards, delivery formats, and production protocols for ${service.title.toLowerCase()} commissions.`}
        eyebrow={`${service.shortTitle} Specifications`}
        enableCategories={false}
        inquiries={service.faqs.map((faq) => ({
          q: faq.question,
          a: faq.answer,
          category: service.shortTitle,
          specs: "Format: 4K / 8K Cinema Master • Audio: 24-bit 48kHz • Delivery: Master ProRes / Web Streams",
        }))}
      />

      {/* 06: Service Page Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-brand-white">
          Commission a {service.shortTitle} Production
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto text-sm sm:text-base font-light">
          Whether you have an established treatment or an initial narrative seed, let&apos;s evaluate the possibilities together.
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
            <span>View All Work</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
