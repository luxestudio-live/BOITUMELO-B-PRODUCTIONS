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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            The Work Speaks.{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              Stories Told in Motion.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
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
