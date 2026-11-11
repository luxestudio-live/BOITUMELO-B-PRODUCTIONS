import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Video,
  Scissors,
  Clapperboard,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Video Services Adelaide | Filming & Editing",
  description:
    "Get filming and video editing in Northern Adelaide for business, real estate, parties and events. Start with a clear project brief and plan.",
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  const processSteps = [
    {
      num: "01",
      title: "Book and brief",
      desc: "Book a date and time to discuss your project, expectations, planning, payments, filming, editing and revisions.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "Prepare and film",
      desc: "Send the project brief and pre-production information, then filming begins according to what you agreed.",
      icon: Video,
    },
    {
      num: "03",
      title: "Edit and deliver",
      desc: "The footage is edited and polished, followed by the usual one revision before the finished video is delivered.",
      icon: Scissors,
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 sm:space-y-32 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Intro + Answer Nugget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Clapperboard className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Filming & Editing • Northern Adelaide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            Make your video work
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            You need content that looks professional and matches what you had in mind.
            You may be struggling with filming, editing, marketing or simply having
            enough good-quality content to use. You may also be worried about spending
            money on a video that does not turn out the way you wanted.
          </p>

          <p className="text-base sm:text-lg font-medium text-[var(--gold-deep)]">
            The process starts before the camera comes out.
          </p>
        </div>

        {/* Answer Nugget Callout */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span>Answer Nugget • Video Services</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
            Video Services covers filming and editing for businesses, real estate,
            parties and events. The process starts with a booking and project brief,
            followed by pre-production, filming, editing and at least one revision
            before the finished video is delivered.
          </p>
        </div>
      </section>

      {/* 02: What video services do you offer? (3 Category Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)]">
              What video services do you offer?
            </h2>
          </div>
          <p className="text-sm text-[var(--ink-soft)] max-w-md font-light">
            Video services cover filming and editing for different types of projects,
            specifically business-related video work, real estate, parties and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <article
              key={service.slug}
              className="bg-[var(--bg)] border border-[var(--line)] rounded-[2px] overflow-hidden p-6 sm:p-8 hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-subtle flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="relative aspect-[16/10] rounded-[2px] overflow-hidden border border-[var(--line)] bg-[var(--ink)]">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[var(--ink)] text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--gold)] rounded-[2px] border border-[var(--gold)]/30">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-medium text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                    {service.tagline}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[var(--line)]">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--ink)] font-semibold block">
                    Includes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--ink-soft)]">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap.name} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)] shrink-0 mt-0.5" />
                        <span>{cap.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--line)]">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs uppercase font-mono tracking-[0.12em] font-medium bg-[var(--ink)] text-[var(--white-on-dark)] hover:bg-[var(--gold)] hover:text-[var(--ink)] px-5 py-3 rounded-[2px] transition-all duration-250 ease-out"
                >
                  <span>Explore {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03: Who are video services for? */}
      <section className="bg-[var(--bg-soft)] py-16 sm:py-24 border-y border-[var(--line)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
            Audience & Fit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)]">
            Who are video services for?
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed font-light">
            Video services are suitable for customers who need someone to handle the
            filming and editing for a project.
          </p>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed font-light">
            You need a reasonable budget for professional video work. Filming, editing
            and the other parts of a project take time, money, effort and skill.
          </p>
        </div>
      </section>

      {/* 04: How does the process work? (3 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[var(--line)] pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
            The Plan
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)] mt-2">
            How does the process work?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[var(--bg)] border border-[var(--line)] p-8 rounded-[2px] hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-subtle space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-medium text-[var(--gold)]">
                    {step.num}
                  </span>
                  <Icon className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-xl font-display font-medium text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 05: Why does planning matter? ("You can't fix it in post") */}
      <section className="bg-[var(--ink)] text-[var(--white-on-dark)] py-16 sm:py-24 border-y border-[rgba(255,255,255,0.12)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold)] font-medium">
            Pre-Production Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--white-on-dark)] leading-tight">
            Why does planning matter?
          </h2>
          <p className="text-lg sm:text-xl text-[var(--gold-light)] font-medium">
            Good footage starts with good preparation.
          </p>
          <blockquote className="border-l-2 border-[var(--gold)] pl-6 py-2 text-lg sm:text-2xl text-[var(--white-on-dark)] font-serif italic">
            &ldquo;You can’t fix it in post.&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg text-[var(--text-on-dark)] leading-relaxed font-light">
            The briefing and pre-production happen before filming because problems cannot
            always be fixed during editing. Editing can polish footage, but it cannot
            replace something that was never captured properly.
          </p>
        </div>
      </section>

      {/* 06: What can you expect? */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
          Commitment & Delivery
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)]">
          What can you expect?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <ShieldCheck className="w-5 h-5 text-[var(--gold)]" />
            <h3 className="font-display font-medium text-lg text-[var(--ink)]">
              Clear Conversation Upfront
            </h3>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              You can expect a clear conversation about what needs to happen before
              filming begins.
            </p>
          </div>
          <div className="p-6 bg-[var(--bg-soft)] border border-[var(--line)] rounded-[2px] space-y-3">
            <Scissors className="w-5 h-5 text-[var(--gold)]" />
            <h3 className="font-display font-medium text-lg text-[var(--ink)]">
              Polished Edit & One Revision
            </h3>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">
              You can also expect your footage to be edited and polished before it is
              sent to you for review. The usual process includes at least one revision.
            </p>
          </div>
        </div>
      </section>

      {/* 07: Closing CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <div className="p-10 sm:p-16 rounded-[2px] border border-[var(--gold)]/40 bg-[var(--ink)] text-[var(--white-on-dark)] space-y-6 shadow-subtle">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--white-on-dark)] leading-tight">
            Ready to make your video?
          </h2>
          <p className="text-[var(--text-on-dark)] max-w-xl mx-auto text-base font-light">
            Book a project consultation and talk through what you need.
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
