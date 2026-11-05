import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/components/public/VideoPlayer";
import ViewfinderHUD from "@/components/cinematic/ViewfinderHUD";
import EditorialHeading from "@/components/public/EditorialHeading";
import { sampleProjects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, Film, MapPin, Calendar, Clock, Award, Quote, Clapperboard } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return sampleProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = sampleProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | BOITUMELO B PRODUCTIONS`,
    description: project.logline,
    openGraph: {
      title: `${project.title} — BOITUMELO B PRODUCTIONS`,
      description: project.logline,
      images: [{ url: project.heroPoster }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const currentIndex = sampleProjects.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) notFound();

  const project = sampleProjects[currentIndex];
  const nextIndex = (currentIndex + 1) % sampleProjects.length;
  const nextProject = sampleProjects[nextIndex];

  return (
    <article className="pt-28 pb-24 space-y-20 sm:space-y-32">
      {/* 01: Back Nav & Opening Title Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-brand-gray hover:text-brand-gold transition-colors py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-brand-teal/40 border border-brand-teal text-[11px] font-mono uppercase tracking-[0.2em] text-brand-gold rounded-sm">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-brand-gray">
              Year: {project.year}
            </span>
            {project.awardNote && (
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-brand-gold/15 border border-brand-gold/40 text-[11px] font-mono text-brand-gold rounded-sm">
                <Award className="w-3.5 h-3.5" />
                <span>{project.awardNote}</span>
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-brand-gray-light font-serif italic max-w-3xl leading-relaxed">
            &ldquo;{project.logline}&rdquo;
          </p>
        </div>
      </section>

      {/* 02: Full-Width Cinematic Video Player Feature with Viewfinder Overlay */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="relative rounded-sm overflow-hidden border border-brand-gold/60 shadow-2xl">
            <VideoPlayer
              src={project.fullVideoUrl}
              poster={project.heroPoster}
              title={project.title}
              aspectRatio="aspect-[16/9] lg:aspect-[2.39/1]"
            />
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-brand-gray px-1">
            <span>DCI 4K Exhibition Master</span>
            <span>Ambisonic 5.1 Surround Mastering</span>
          </div>
        </div>
      </section>

      {/* 03: Structured Production Overview & Metadata Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-brand-black-elevated border border-brand-teal/50 rounded-sm shadow-xl">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block">
              Client / Commissioner
            </span>
            <p className="text-sm font-medium text-brand-white mt-1">
              {project.client}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block">
              Filming Location
            </span>
            <p className="text-sm font-medium text-brand-white mt-1">
              {project.location}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block">
              Aspect Ratio & Glass
            </span>
            <p className="text-sm font-medium text-brand-white mt-1">
              {project.aspectRatio}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block">
              Camera System
            </span>
            <p className="text-sm font-medium text-brand-white mt-1">
              {project.cameraFormat}
            </p>
          </div>
        </div>
      </section>

      {/* 04: Story, Creative Challenge & Direction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-brand-teal rounded-sm border border-brand-teal-light shadow-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold block mb-2">
                Production Slate & Credits
              </span>
              <ul className="space-y-3 pt-2">
                {project.credits.map((c) => (
                  <li key={c.role} className="border-b border-brand-teal-light/50 pb-2">
                    <span className="text-[10px] font-mono text-brand-gray-light uppercase block">
                      {c.role}
                    </span>
                    <span className="text-sm font-medium text-brand-white">
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {project.quote && (
              <div className="p-6 bg-brand-black-elevated border border-brand-teal/40 rounded-sm shadow-lg">
                <Quote className="w-6 h-6 text-brand-gold mb-3" />
                <p className="text-xs sm:text-sm text-brand-gray-light italic leading-relaxed">
                  &ldquo;{project.quote.text}&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-brand-teal/20 text-xs">
                  <span className="text-brand-white font-medium block">
                    {project.quote.author}
                  </span>
                  <span className="text-brand-gray font-mono text-[10px]">
                    {project.quote.role}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-10 text-brand-gray-light font-light leading-relaxed">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                The Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white leading-tight mb-4">
                Synopsis & Context
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {project.synopsis}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-brand-teal/30">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block">
                  The Creative Challenge
                </span>
                <p className="text-sm leading-relaxed">
                  {project.creativeChallenge}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block">
                  Cinematic Direction
                </span>
                <p className="text-sm leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>
            </div>

            {/* Production Notes Bulleted List */}
            <div className="pt-6 border-t border-brand-teal/30 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-white block">
                Technical Production Notes:
              </span>
              <ul className="space-y-2.5">
                {project.productionNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm">
                    <span className="text-brand-gold font-mono text-xs mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05: Behind the Frames Gallery */}
      {project.behindTheFrames.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialHeading
            eyebrow="Set Stills & Archival"
            title="Behind the Frames."
            serifAccent="The Physical Craft."
            lead="Location documentation, lighting diagrams, and production moments from principal photography."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.behindTheFrames.map((frame, idx) => (
              <figure
                key={idx}
                className="group relative bg-brand-black-elevated border border-brand-teal/50 rounded-sm overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={frame.imageUrl}
                    alt={frame.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                </div>
                <figcaption className="p-4 text-xs font-mono text-brand-gray-light leading-snug">
                  {frame.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* 06: Next Project Full-Width Visual Transition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block relative bg-brand-black-elevated border border-brand-teal/50 hover:border-brand-gold rounded-sm overflow-hidden p-8 sm:p-14 transition-all duration-500 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity">
            <Image
              src={nextProject.heroPoster}
              alt={nextProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Next Production // {nextProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-medium text-brand-white group-hover:text-brand-gold transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm text-brand-gray mt-1 font-light">
                {nextProject.location} • {nextProject.duration}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand-gold">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* 07: Project Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-white">
          Inspired by this production?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto text-sm sm:text-base font-light">
          Let&apos;s explore how a similar cinematic approach can amplify your documentary, artist vision, or brand campaign.
        </p>
        <div className="pt-2 flex items-center justify-center space-x-4">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl"
          >
            <span>Start a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
