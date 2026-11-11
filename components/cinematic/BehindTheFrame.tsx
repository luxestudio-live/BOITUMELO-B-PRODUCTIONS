import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BehindTheFrame() {
  return (
    <section
      aria-label="Behind the Frame"
      className="relative bg-white py-24 sm:py-36 border-b border-brand-teal/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-teal/15">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-brand-teal leading-tight">
              Behind the Frame.{" "}
              <span className="text-brand-gold block sm:inline font-normal">
                The Living Craft.
              </span>
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs font-mono uppercase tracking-widest text-brand-gold hover:text-brand-gold-dark inline-flex items-center space-x-2 py-2 font-medium"
          >
            <span>Read Studio Origin Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition with Layered Still Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Layered Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-brand-teal/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80"
                alt="Camera rig setup at dawn in Flinders Ranges"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold block">
                  Field Archive • Dawn Call Wilpena Pound
                </span>
                <p className="text-xs text-white/90 mt-1 font-light [text-wrap:pretty]">
                  Capturing atmospheric low-light gradients on large format sensors.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Frame */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 aspect-[16/10] rounded-sm overflow-hidden border-2 border-brand-gold shadow-2xl bg-brand-black hover:scale-[1.03] transition-transform duration-500 ease-cinematic">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                alt="Lighting synchronization testing"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative Storytelling */}
          <div className="lg:col-span-6 space-y-8 text-brand-teal/80 font-light leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal leading-snug">
              We approach every production as an act of dedicated human listening.
            </h3>

            <p className="text-base sm:text-lg">
              Cinematography is not the accumulation of gear—it is the deliberate stewardship of light, acoustic frequency, and human intimacy. From two-week cultural immersion projects in remote Australian desert homelands to high-precision automotive commercials on coastal highways, our methodology remains identical:
            </p>

            <blockquote className="border-l-2 border-brand-gold pl-5 py-1 text-base sm:text-lg text-brand-teal font-display tracking-wide">
              &ldquo;No camera angle is accidental. No cut is arbitrary. If a frame does not carry emotional or strategic weight, it does not survive the edit.&rdquo;
            </blockquote>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-brand-teal/15 text-xs font-mono">
              <div>
                <span className="text-brand-gold font-semibold text-sm sm:text-base block">
                  CASA Certified
                </span>
                <span className="text-brand-teal/70">High-Risk Drone Flight Ops</span>
              </div>
              <div>
                <span className="text-brand-gold font-semibold text-sm sm:text-base block">
                  5.1 Surround
                </span>
                <span className="text-brand-teal/70">Ambisonic Sound Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

