import Link from "next/link";
import PortfolioGrid from "@/components/public/PortfolioGrid";
import { sampleProjects } from "@/data/projects";
import {
  Film,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  Layers,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Video Portfolio Adelaide | Videography Work & Projects",
  description:
    "See video work across business, real estate, parties and events, then discuss your own project with a Northern Adelaide videographer.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 sm:space-y-28 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Intro + Answer Nugget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Film className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Project Archive • Northern Adelaide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            See the work
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            You want to know what the finished video can look like. The best way to
            judge a video service is to see the work before you book.
          </p>
        </div>

        {/* Answer Nugget Callout */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span>Answer Nugget • Portfolio</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
            The video portfolio should show completed filming and editing work across
            categories identified in the interview, including real estate, parties and
            events. The business owner began directing and producing videos at about 12
            years old and now works as a solo video operator in Northern Adelaide.
          </p>
        </div>
      </section>

      {/* 02: Guidance Notes: What can you see here? & What types of work are available? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <Eye className="w-4 h-4 text-[var(--gold)]" />
              <span>What can you see here?</span>
            </div>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              This portfolio shows examples of completed video projects, with enough
              context to understand what each project involved.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <Layers className="w-4 h-4 text-[var(--gold)]" />
              <span>Available Project Types</span>
            </div>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              Real estate, parties and events are key examples of projects that can be
              filmed. Business video work is also part of the wider service focus.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium">
              <HelpCircle className="w-4 h-4 text-[var(--gold)]" />
              <span>What should you look for?</span>
            </div>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              Look at whether the footage feels professional, whether the editing works
              for the project and whether the finished video matches the purpose of the
              job.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Main Interactive Filtering Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid initialProjects={sampleProjects} />
      </section>

      {/* 04: Want to discuss your project? CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <div className="p-10 sm:p-16 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] text-[var(--white-on-dark)] space-y-6 shadow-subtle">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--white-on-dark)] leading-tight">
            Want to discuss your project?
          </h2>
          <p className="text-[var(--text-on-dark)] max-w-xl mx-auto text-base font-light">
            If you have seen work that gives you an idea for your own project, bring
            that idea to the consultation.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2.5 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] px-8 py-3.5 rounded-[2px] transition-all duration-250 ease-out shadow-sm"
            >
              <span>Book a Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
