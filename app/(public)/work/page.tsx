import EditorialHeading from "@/components/public/EditorialHeading";
import PortfolioGrid from "@/components/public/PortfolioGrid";
import { sampleProjects } from "@/data/projects";
import { Film } from "lucide-react";

export const metadata = {
  title: "Our Work | Film & Video Production Portfolio",
  description:
    "Explore our complete archive of documentary cinema, music videos, brand commercials, and corporate films.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-brand-teal/40 border border-brand-teal/60 rounded-sm">
            <Film className="w-3.5 h-3.5 text-brand-gold animate-pulse-subtle" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-brand-gold font-medium">
              Curated Production Archive // 35mm & Large Format
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            The Work Speaks.{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              Stories Told in Motion.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray-light font-light leading-relaxed max-w-2xl">
            A collection of stories told through motion, imagination, and intention. Each project represents a unique collaboration crafted without creative shortcuts.
          </p>
        </div>
      </section>

      {/* Main Interactive Filtering Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid initialProjects={sampleProjects} />
      </section>
    </div>
  );
}
