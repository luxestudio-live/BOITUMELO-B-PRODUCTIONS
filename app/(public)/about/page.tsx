import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/asset-path";
import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Camera,
  Scissors,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "About Our Studio | Videographer Northern Adelaide",
  description:
    "Discover the story and filming philosophy behind Boitumelo B Productions. Operating as a one-person crew in Northern Adelaide since directing at age 12.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 sm:space-y-32 bg-[var(--bg)] text-[var(--ink)]">
      {/* 01: Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            Behind Every Frame,{" "}
            <span className="text-[var(--gold-deep)] block sm:inline font-normal">
              A Clear Process.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            Filming and video editing across Northern Adelaide for business, real
            estate, parties and events. Clear expectations before the camera comes
            out.
          </p>
        </div>

        {/* Studio Image Frame */}
        <div className="mt-12 p-1.5 sm:p-2 rounded-[2px] border border-[var(--line)] shadow-subtle bg-[var(--ink)]">
          <div className="relative aspect-[16/9] rounded-[2px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85"
              alt="Director framing a cinema shot on location"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[var(--white-on-dark)]">
              <span className="text-[var(--gold)] uppercase tracking-[0.12em]">
                Northern Adelaide • Local Filming Operations
              </span>
              <span className="hidden sm:inline text-slate-300">
                One-Person Crew • Practical & Direct
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Narrative & Philosophy ("You Can't Fix It in Post") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)] leading-tight">
              Good footage starts with{" "}
              <span className="text-[var(--gold-deep)] font-normal">
                good preparation.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed font-light max-w-[68ch] [text-wrap:pretty]">
            <p>
              Based in Northern Adelaide, South Australia, <strong className="text-[var(--ink)] font-semibold">BOITUMELO B PRODUCTIONS</strong> focuses on helping clients create professional video content when recording, editing, and producing content themselves is difficult or taking too much time.
            </p>
            <p>
              The business operates as a one-person crew. This structure was chosen deliberately: shorter travel across Northern Adelaide makes local filming work practical, keeps communications direct with the person holding the camera and cutting the footage, and reduces unpaid travel overheads.
            </p>
            <blockquote className="border-l border-[var(--gold-deep)]/40 pl-6 py-2 text-base sm:text-lg text-[var(--ink)] font-serif italic">
              &ldquo;You can’t fix it in post.&rdquo; Editing can polish footage, but it cannot replace something that was never captured properly. That is why planning, briefing, and clear expectations must happen before filming starts.
            </blockquote>
            <p>
              Every project includes the standard one revision stage, ensuring that you review the edited footage and have your feedback addressed before final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Four Practical Commitments */}
      <section className="bg-[var(--bg-soft)] py-20 sm:py-28 border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[var(--line)] pb-6">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[var(--ink)]">
              How We Work With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Book and Brief First",
                desc: "Every project starts with a conversation discussing expectations, planning, payments, filming, editing and revisions.",
              },
              {
                icon: Camera,
                title: "One-Person Crew",
                desc: "Direct, personal service in Northern Adelaide. Shorter travel and focused execution without extra crew overheads.",
              },
              {
                icon: Scissors,
                title: "One Revision Included",
                desc: "The footage is edited, polished, and reviewed together so you receive a finished video that matches what you agreed.",
              },
              {
                icon: ShieldCheck,
                title: "Clear Foundations",
                desc: "No surprises. We establish what needs to be captured before the camera comes out to avoid post-production issues.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-[var(--bg)] border border-[var(--line)] p-8 rounded-[2px] hover:border-[var(--gold)] transition-all duration-250 ease-out shadow-subtle space-y-4"
              >
                <p.icon className="w-6 h-6 text-[var(--gold)]" />
                <h3 className="text-lg font-display font-medium text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: The Founder / Operator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--ink)] text-[var(--white-on-dark)] p-8 sm:p-14 lg:p-16 rounded-[2px] border border-[rgba(255,255,255,0.12)] shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] sm:aspect-[4/5] relative rounded-[2px] overflow-hidden shadow-sm bg-[#0B1320] border border-[var(--gold)]/30">
                <Image
                  src={getAssetPath("/images/boitumelo-owner.jpg")}
                  alt="Boitumelo B. — Owner & Director, Boitumelo B Productions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-[#0B1320]/90 backdrop-blur-md p-4 sm:p-5 rounded-[4px] border border-[var(--gold)]/40 shadow-2xl inline-block max-w-full">
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-white drop-shadow-sm">
                      Boitumelo B.
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[var(--gold-light)] font-mono uppercase tracking-[0.14em] mt-1.5 font-semibold flex items-center gap-2 flex-wrap">
                      <span>Owner & Videographer</span>
                      <span className="text-[var(--gold)]">•</span>
                      <span>Northern Adelaide</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white leading-tight">
                Directing & Producing Since Age 12
              </h2>
              <div className="space-y-4 text-slate-200 text-base leading-relaxed font-light">
                <p>
                  The owner&apos;s interest in video production began around age 12, inspired by a YouTube trend where creators produced full shows using Bratz dolls. That early hands-on experimentation sparked a lasting dedication to visual storytelling, camera angles, pacing, and post-production polish.
                </p>
                <p>
                  Today, that passion translates into practical, dependable videography for Northern Adelaide businesses, property listings, and personal milestones—ensuring clients get great video without the hassle of filming and editing themselves.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-6 py-3.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-sm"
                >
                  <span>Book a Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] text-[var(--white-on-dark)] hover:text-[var(--gold)] px-6 py-3.5 rounded-[2px] border border-[rgba(255,255,255,0.2)] hover:border-[var(--gold)] transition-all duration-250 ease-out"
                >
                  <span>See the Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
