import Link from "next/link";
import { Calendar, Video, Scissors, ArrowUpRight } from "lucide-react";

export default function HomeThePlan() {
  const steps = [
    {
      num: "01",
      title: "Book and brief",
      desc: "Book a time to discuss your project, expectations, planning, payments, filming, editing and revisions.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "Prepare and film",
      desc: "Send the project brief and pre-production information, then filming takes place according to the agreed expectations.",
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
    <section
      aria-label="The 3-Step Plan"
      className="relative bg-[var(--bg-soft)] py-20 sm:py-32 border-b border-[var(--line)] overflow-hidden text-[var(--ink)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
              A Clear Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--ink)] leading-tight">
              The Plan.{" "}
              <span className="text-[var(--gold)] block sm:inline font-normal">
                Three Simple Steps.
              </span>
            </h2>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] font-medium bg-[var(--ink)] text-[var(--white-on-dark)] hover:bg-[var(--gold)] hover:text-[var(--ink)] px-6 py-3 rounded-[2px] transition-all duration-250 ease-out shadow-sm"
          >
            <span>Book a Project Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
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
      </div>
    </section>
  );
}
