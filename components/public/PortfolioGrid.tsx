"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/public/ProjectCard";
import { ProjectItem, ProjectCategory } from "@/data/projects";
import { Film, Filter } from "lucide-react";

interface PortfolioGridProps {
  initialProjects: ProjectItem[];
}

type FilterOption = "all" | "business-videos" | "real-estate" | "events-parties";

const filterTabs: { label: string; value: FilterOption }[] = [
  { label: "All Projects", value: "all" },
  { label: "Business Videos", value: "business-videos" },
  { label: "Real Estate", value: "real-estate" },
  { label: "Events & Parties", value: "events-parties" },
];

export default function PortfolioGrid({ initialProjects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return initialProjects;
    if (activeFilter === "business-videos") {
      return initialProjects.filter(
        (p) => p.category === "corporate-video" || p.category === "brand-commercials"
      );
    }
    if (activeFilter === "real-estate") {
      return initialProjects.filter(
        (p) =>
          p.slug === "lumina-architects" ||
          p.slug === "the-last-echo" ||
          p.category === "corporate-video"
      );
    }
    if (activeFilter === "events-parties") {
      return initialProjects.filter(
        (p) => p.category === "music-videos" || p.category === "documentary-film"
      );
    }
    return initialProjects;
  }, [activeFilter, initialProjects]);

  return (
    <div className="space-y-12">
      <h2 className="sr-only">Selected Productions Archive</h2>
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3" role="tablist" aria-label="Project Categories">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(tab.value)}
                className={`text-[11px] uppercase font-mono tracking-[0.12em] px-4 py-2 rounded-[2px] transition-all duration-250 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] ${
                  isSelected
                    ? "bg-[var(--gold)] text-[var(--ink)] font-medium shadow-sm"
                    : "text-[var(--ink)] bg-[var(--bg-soft)] border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--gold-deep)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-[var(--ink-soft)] hidden sm:inline">
          Showing {filteredProjects.length} of {initialProjects.length} Works
        </span>
      </div>

      {/* Dynamic Projects Grid with Uneven Editorial Rhythm */}
      {filteredProjects.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-brand-teal/20 rounded-sm p-8 space-y-4">
          <Film className="w-10 h-10 text-brand-gold/50 mx-auto" />
          <h3 className="text-xl font-display font-medium text-brand-teal">
            No projects found in this category.
          </h3>
          <p className="text-sm text-brand-teal/80 font-light max-w-md mx-auto">
            Try switching to another category tab to view available films in our catalogue.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="min-h-[44px] px-6 py-2.5 text-xs uppercase font-mono tracking-widest text-white bg-brand-gold hover:bg-brand-gold-light rounded-sm transition-colors inline-flex items-center"
            >
              Reset Filters
            </button>
          </div>
        </div>
      ) : (
        <div key={activeFilter} className="space-y-8 animate-fade-in">
          {/* If "All Projects" is selected, highlight the first item as a dramatic wide banner */}
          {activeFilter === "all" && filteredProjects.length > 0 && (
            <div className="mb-8">
              <ProjectCard project={filteredProjects[0]} layoutVariant="featured-wide" priority />
            </div>
          )}

          {/* Staggered Grid for remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(activeFilter === "all" ? filteredProjects.slice(1) : filteredProjects).map(
              (project, idx) => {
                const variant =
                  idx % 5 === 0 ? "tall" : idx % 3 === 0 ? "editorial" : "standard";
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    layoutVariant={variant}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}

