import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clapperboard, MapPin, Sparkles } from "lucide-react";

export default function BehindTheFrame() {
  return (
    <section
      aria-label="Why Trust Us"
      className="relative bg-[var(--bg)] py-24 sm:py-36 border-b border-[var(--line)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
              Studio Background & Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--ink)] leading-tight">
              Why Trust Us.{" "}
              <span className="text-[var(--gold)] block sm:inline font-normal">
                Clear Expectations.
              </span>
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] hover:text-[var(--gold)] inline-flex items-center space-x-2 py-2 font-medium transition-colors duration-250 ease-out"
          >
            <span>Read Studio Background</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition with Layered Still Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Layered Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-[#0E0E0F]/15 shadow-[0_10px_30px_rgba(14,14,15,0.06)] bg-[#0E0E0F]">
              <Image
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80"
                alt="Filming and camera setup on location"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold)] block">
                  Studio Craft • Northern Adelaide
                </span>
                <p className="text-xs text-[var(--text-on-dark)] mt-1 font-light [text-wrap:pretty]">
                  Pre-production, filming and editing handled as a dedicated solo operator.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Frame */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 aspect-[16/10] rounded-[2px] overflow-hidden border-2 border-[var(--gold)] shadow-[0_10px_30px_rgba(14,14,15,0.06)] bg-[#0E0E0F] hover:scale-[1.03] transition-transform duration-250 ease-out">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                alt="Studio editing and sound design monitor"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-[var(--ink-soft)] font-light leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-[var(--ink)] leading-snug">
              You want to know your video will look good before you spend your money.
            </h3>

            <p className="text-base sm:text-lg">
              The process is designed to make the expectations clear before filming
              begins. The process starts with a booking and project brief where
              planning, payments, filming, editing and revisions are established
              upfront.
            </p>

            <blockquote className="border-l-2 border-[var(--gold)] pl-6 py-1.5 text-base sm:text-lg text-[var(--ink)] font-serif italic">
              &ldquo;The owner has been interested in directing and producing since
              about age 12, beginning with creating and producing a Bratz doll show
              inspired by a YouTube trend.&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg">
              Pre-production comes before filming because project briefs and
              information must be gathered before production begins. The usual process
              includes one revision, so the edited video is reviewed together before
              final delivery.
            </p>

            <p className="text-base sm:text-lg">
              Operating as a one-person crew in Northern Adelaide makes local filming
              work practical, personal and responsive without unnecessary overheads.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[var(--line)] text-xs font-mono">
              <div>
                <span className="text-[var(--gold-deep)] font-medium text-sm sm:text-base block">
                  Since Age 12
                </span>
                <span className="text-[var(--ink-soft)]">Directing & Producing</span>
              </div>
              <div>
                <span className="text-[var(--gold-deep)] font-medium text-sm sm:text-base block">
                  1 Revision Included
                </span>
                <span className="text-[var(--ink-soft)]">Review Before Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
