import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import ProjectCard from "@/components/public/ProjectCard";
import VideoPlayer from "@/components/public/VideoPlayer";
import { ServiceDetail } from "@/data/services";
import { sampleProjects } from "@/data/projects";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Video,
  Scissors,
  Clapperboard,
  Sparkles,
  HelpCircle,
} from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceDetail;
  aestheticVariant?: "business" | "real-estate" | "events" | "corporate" | "commercial" | "documentary" | "music";
}

export default function ServiceDetailView({
  service,
}: ServiceDetailViewProps) {
  const relatedProjects = sampleProjects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  const stepIcons = [Calendar, Video, Scissors];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 sm:space-y-32 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Headline + Tagline + Answer Nugget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Clapperboard className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Service Specification • {service.title}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            {service.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            {service.tagline}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {service.visualDirection.aestheticTokens.map((token) => (
              <span
                key={token}
                className="text-[11px] font-mono uppercase tracking-[0.1em] px-3 py-1.5 bg-[var(--bg-soft)] text-[var(--gold-deep)] border border-[var(--line)] rounded-[2px]"
              >
                {token}
              </span>
            ))}
          </div>
        </div>

        {/* Answer Nugget Callout */}
        {service.answerNugget && (
          <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-4xl">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" />
              <span>Answer Nugget • {service.title}</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
              {service.answerNugget}
            </p>
          </div>
        )}

        {/* Hero Video Preview / Poster with Clean Framing */}
        <div className="mt-12 relative rounded-[2px] overflow-hidden border border-[var(--gold)]/40 shadow-[0_10px_30px_rgba(14,14,15,0.06)]">
          <VideoPlayer
            src={service.videoPreviewUrl}
            poster={service.heroImage}
            title={service.title}
            aspectRatio="aspect-[21/9] sm:aspect-[2.39/1]"
          />
        </div>
      </section>

      {/* 02: Narrative Overview & Scope Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[var(--bg)] border border-[var(--line)] rounded-[2px] shadow-subtle">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium block mb-2">
                Visual Standards
              </span>
              <h2 className="text-2xl font-display font-medium text-[var(--ink)]">
                {service.visualDirection.title}
              </h2>
              <p className="mt-4 text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                {service.visualDirection.description}
              </p>
            </div>

            <div className="p-8 bg-[var(--ink)] rounded-[2px] border border-[rgba(255,255,255,0.12)] shadow-subtle text-[var(--white-on-dark)]">
              <h3 className="text-xl font-display font-medium text-[var(--white-on-dark)]">
                Book a Project Consultation
              </h3>
              <p className="mt-2 text-xs text-[var(--text-on-dark)] leading-relaxed font-light">
                Discuss your project, expectations, planning, payments, filming, editing and revisions before filming begins.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-6 py-3 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl font-normal text-[var(--ink)] leading-relaxed">
              {service.introNarrative}
            </p>

            <blockquote className="border-l-2 border-[var(--gold)] pl-6 py-2 text-base sm:text-lg text-[var(--ink)] font-serif italic">
              &ldquo;You can’t fix it in post.&rdquo; Planning and briefing ensure nothing important is left behind.
            </blockquote>

            {/* Scope Deliverables */}
            <div className="pt-6 border-t border-[var(--line)] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--ink)] font-semibold">
                What this service includes:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    className="p-5 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px]"
                  >
                    <div className="flex items-center space-x-2 text-[var(--gold-deep)] mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--gold)]" />
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink)]">
                        {cap.name}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: How Does the Process Work? (3 Steps) */}
      <section className="bg-[var(--bg-soft)] py-16 sm:py-24 border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[var(--line)] pb-6">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
              3-Step Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)] mt-2">
              How does the process work?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((p, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={p.step}
                  className="bg-[var(--bg)] border border-[var(--line)] p-8 rounded-[2px] hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-subtle space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-medium text-[var(--gold)]">
                      {p.step}
                    </span>
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04: Representative Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
                Portfolio Preview
              </span>
              <h2 className="text-3xl font-display font-medium text-[var(--ink)] mt-2">
                Related Work
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] font-medium text-[var(--gold-deep)] hover:text-[var(--gold)]"
            >
              <span>See Full Portfolio</span>
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

      {/* 05: Questions & Clarity */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[var(--line)] pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
            Clarity & FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)] mt-2">
            Questions about {service.title}
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-2"
            >
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                <h3 className="font-display font-medium text-lg text-[var(--ink)]">
                  {faq.question}
                </h3>
              </div>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 06: Service Page Closing Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <div className="p-10 sm:p-16 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] text-[var(--white-on-dark)] space-y-6 shadow-subtle">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--white-on-dark)] leading-tight">
            Ready to discuss your {service.shortTitle.toLowerCase()}?
          </h2>
          <p className="text-[var(--text-on-dark)] max-w-xl mx-auto text-base font-light">
            Book a project consultation and explain what you need filmed.
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
              <span>View All Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
