import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  Home as HomeIcon,
  PartyPopper,
  Film,
  Compass,
} from "lucide-react";

export default function HomeOrientationAndOptions() {
  const jumpInOptions = [
    {
      title: "Create better business content",
      description:
        "Get help with filming and editing when creating professional business content yourself is difficult.",
      linkText: "Explore Business Videos",
      href: "/services/business-videos",
      icon: Briefcase,
    },
    {
      title: "Show your property",
      description:
        "Discuss video for your real estate project and plan what needs to be captured.",
      linkText: "Explore Real Estate Videos",
      href: "/services/real-estate-videos",
      icon: HomeIcon,
    },
    {
      title: "Capture your event",
      description:
        "Plan video coverage for your party or event, then let the filming and editing be handled for you.",
      linkText: "Explore Events & Parties",
      href: "/services/events-parties",
      icon: PartyPopper,
    },
    {
      title: "See the work",
      description:
        "Look through available project examples before deciding what you want for your own video.",
      linkText: "View the Portfolio",
      href: "/work",
      icon: Film,
    },
  ];

  return (
    <section
      aria-label="Orientation and Services Overview"
      className="relative bg-[var(--bg)] py-20 sm:py-28 border-b border-[var(--line)] overflow-hidden text-[var(--ink)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* 2. ANSWER NUGGET */}
        <div className="p-6 sm:p-8 bg-[var(--bg-soft)] border-l-2 border-[var(--gold)] rounded-r-[2px] border-y border-r border-[var(--line)] shadow-subtle max-w-5xl mx-auto">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)] font-medium mb-3">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span>Answer Nugget • Northern Adelaide Videography</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--ink)] font-normal leading-relaxed">
            The business provides video filming and editing in Northern Adelaide,
            South Australia, for projects including real estate, parties and events.
            The owner began directing and producing videos at about 12 years old and
            now works as a one-person video crew.
          </p>
        </div>

        {/* 3. ORIENTATION PARAGRAPH */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Compass className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Orientation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[var(--ink)] leading-tight">
            Need better content?
          </h2>

          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl mx-auto">
            You may be struggling with recording, editing, marketing or creating enough
            good-quality content. You may also be worried about whether your video will
            look professional.
          </p>

          <p className="text-sm sm:text-base text-[var(--gold-deep)] font-medium tracking-wide pt-1">
            Start with a clear brief. Plan the project properly. Then film and edit it
            according to what you need.
          </p>
        </div>

        {/* 4. JUMP-IN OPTIONS (4 CARDS) */}
        <div className="space-y-6">
          <div className="border-b border-[var(--line)] pb-4 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--gold-deep)] font-medium">
              Jump-In Options
            </span>
            <span className="text-xs font-mono text-[var(--ink-soft)] hidden sm:inline">
              Choose your project focus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jumpInOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="bg-[var(--bg)] border border-[var(--line)] p-6 sm:p-7 rounded-[2px] hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-subtle flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-[0.12em] text-[var(--gold)] font-medium">
                        0{idx + 1}
                      </span>
                      <Icon className="w-5 h-5 text-[var(--gold)]" />
                    </div>

                    <h3 className="text-lg font-display font-medium text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors leading-snug">
                      {option.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                      {option.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[var(--line)]">
                    <Link
                      href={option.href}
                      className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.12em] font-medium text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors"
                    >
                      <span>{option.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
