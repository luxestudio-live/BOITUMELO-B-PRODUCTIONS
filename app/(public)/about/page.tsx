import Link from "next/link";
import Image from "next/image";
import EditorialHeading from "@/components/public/EditorialHeading";
import { ArrowUpRight, ArrowRight, Film, Camera, Compass, Clapperboard, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Our Studio | Our Story & Philosophy",
  description:
    "Discover the vision, creative philosophy, and storytelling ethos of BOITUMELO B PRODUCTIONS, an Australian creative film house.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-36">
      {/* 01: Immersive Opening Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-gold flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>Studio Ethos & Origin</span>
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            Behind Every Frame,{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              There&apos;s a Story.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray-light font-light leading-relaxed max-w-2xl">
            BOITUMELO B PRODUCTIONS was founded on a singular belief: filmmaking is not an exercise in operating equipment—it is the art of giving emotional weight to human truth.
          </p>
        </div>

        {/* Cinematic Wide Still */}
        <div className="mt-12 relative aspect-[21/9] sm:aspect-[2.39/1] rounded-sm overflow-hidden border border-brand-teal/40">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85"
            alt="Director framing a cinema shot on Australian location"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-brand-gold block">
              Director Field Frame // Location Archive
            </span>
          </div>
        </div>
      </section>

      {/* 02: Who We Are & Our Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
              01 // Identity
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-white leading-tight">
              An Australian Studio with a{" "}
              <span className="font-serif italic font-normal text-brand-gray-light">
                Global Cinematic Lens.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-brand-gray-light text-base sm:text-lg leading-relaxed font-light">
            <p>
              Based in Australia, <strong className="text-brand-white font-medium">BOITUMELO B PRODUCTIONS</strong> is an independent creative film and video production house. We work across the country—from the coastal cities of Melbourne and Sydney to the remote ochre desert ranges of central Australia.
            </p>
            <p>
              Our perspective was forged by crossing boundaries between diverse genres. We take the patience, cultural reverence, and narrative depth of documentary cinema and bring it to commercial brand films. Conversely, we take the visual flair, rhythmic tempo, and lighting ingenuity of music videos and infuse it into corporate storytelling.
            </p>
            <p className="text-sm text-brand-gray">
              *Note: Demonstration studio narrative. Real biographical records, specific year of establishment, and verified client history will be populated upon final content onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Four Pillars of Our Philosophy */}
      <section className="bg-brand-black-elevated py-20 sm:py-28 border-y border-brand-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialHeading
            eyebrow="Core Convictions"
            title="The Principles That Guide Us."
            serifAccent="Non-Negotiable Standards."
            lead="Four commitments that define how we collaborate, shoot, and deliver every project."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HeartHandshake,
                title: "Empathy Over Ego",
                desc: "We listen before we shoot. The subject's authentic voice and the client's strategic truth always supersede directorial vanity.",
              },
              {
                icon: Camera,
                title: "Tactile Cinema",
                desc: "We favour physical lighting, vintage anamorphic glass, real atmospheres, and practical textures over generic synthetic computer graphics.",
              },
              {
                icon: Compass,
                title: "Cultural Integrity",
                desc: "Filming across Australia demands deep respect for Country, cultural custodians, and the communities that invite us into their worlds.",
              },
              {
                icon: Clapperboard,
                title: "Commercial Rigor",
                desc: "Artistic brilliance must deliver real-world outcomes. Our productions respect milestones, budgets, and clear commercial briefs.",
              },
            ].map((p, idx) => (
              <div
                key={p.title}
                className="bg-brand-black/60 border border-brand-teal/30 p-8 rounded-sm hover:border-brand-gold/60 transition-colors"
              >
                <p.icon className="w-8 h-8 text-brand-gold mb-5" />
                <h3 className="text-xl font-display font-medium text-brand-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-brand-gray leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Behind The Scenes Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <EditorialHeading
            eyebrow="On Location Archive"
            title="Behind the Frames."
            serifAccent="The Reality of Production."
            lead="Unvarnished glimpses from dawn calls, remote rigs, and midnight filming across Australia."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-brand-teal/30">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
              alt="Rigging camera kit in the desert"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-brand-gray-light">
              01 // Field Sound Archiving
            </span>
          </div>

          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-brand-teal/30">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80"
              alt="Subterranean music video lighting setup"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-brand-gray-light">
              02 // DMX Lighting Array Prep
            </span>
          </div>

          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-brand-teal/30">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80"
              alt="Cellar macro lens filming session"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-brand-gray-light">
              03 // Macro Soil & Texture Study
            </span>
          </div>
        </div>
      </section>

      {/* 05: Meet the Director & Crew Network */}
      <section className="bg-brand-teal-deep py-20 sm:py-28 border-y border-brand-teal/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-brand-teal/60">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
                  alt="Creative Director portrait on set"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold">
                    Creative Leadership
                  </span>
                  <h3 className="text-2xl font-display font-medium text-brand-white mt-1">
                    Boitumelo B.
                  </h3>
                  <p className="text-xs text-brand-gray font-mono">
                    Director & Cinematographer
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-gold">
                Director&apos;s Perspective
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-white leading-tight">
                A Collaborative Network of Master Craftspeople.
              </h2>
              <div className="space-y-4 text-brand-gray-light text-base leading-relaxed font-light">
                <p>
                  While every film is led with singular creative direction, great cinema is inherently collective. BOITUMELO B PRODUCTIONS scales dynamically around each project&apos;s needs—calling upon an elite network of Australian gaffers, sound recordists, drone pilots, editors, and senior DaVinci colorists.
                </p>
                <p>
                  This model gives our collaborators the creative agility of an intimate boutique studio, paired with the production power and camera equipment of a major commercial production house.
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <Link
                  href="/work"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-white hover:text-brand-gold transition-colors"
                >
                  <span>Start a Project</span>
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

