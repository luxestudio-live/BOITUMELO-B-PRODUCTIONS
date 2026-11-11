"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { ArrowUpRight, Play, Film } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  layoutVariant?: "standard" | "featured-wide" | "tall" | "editorial";
  priority?: boolean;
}

export default function ProjectCard({
  project,
  layoutVariant = "standard",
  priority = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Determine aspect ratio class
  const aspectClass =
    layoutVariant === "featured-wide"
      ? "aspect-[16/9] lg:aspect-[2.39/1]"
      : layoutVariant === "tall"
      ? "aspect-[3/4]"
      : layoutVariant === "editorial"
      ? "aspect-[16/10]"
      : "aspect-[16/9]";

  return (
    <article
      className="group relative flex flex-col bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--gold)] transition-all duration-250 ease-out rounded-[2px] overflow-hidden shadow-[0_10px_30px_rgba(14,14,15,0.06)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
        aria-label={`View film project: ${project.title}`}
      >
        {/* Physical 35mm Perforation Header Strip */}
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-[var(--ink)] text-[11px] font-mono text-[var(--white-on-dark)] border-b border-[rgba(255,255,255,0.12)]">
          <span className="text-[var(--gold)] font-medium uppercase tracking-[0.12em]">
            {project.categoryLabel}
          </span>
          <span className="text-[var(--text-on-dark)]">{project.aspectRatio}</span>
        </div>

        <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#000000]`}>
          {/* Static High-Res Poster Image */}
          <Image
            src={project.heroPoster}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Video Preview on Hover (Capable devices only) */}
          <video
            ref={videoRef}
            src={project.videoPreviewUrl}
            poster={project.heroPoster}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
              isHovered ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-250 ease-out" />

          {/* Viewfinder Corner Framelines */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[var(--gold)]/60 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[var(--gold)]/60 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[var(--gold)]/60 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[var(--gold)]/60 pointer-events-none" />

          {/* Year Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-[#000000]/80 backdrop-blur-md text-[10px] font-mono text-[var(--gold)] border border-[rgba(255,255,255,0.2)] rounded-[2px]">
              {project.year}
            </span>
          </div>

          {/* Quick Play Cue */}
          <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-[#000000]/80 backdrop-blur-sm border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-250 ease-out transform translate-y-2 group-hover:translate-y-0">
            <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Content Metadata Block */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display font-medium text-lg sm:text-xl text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors duration-250 ease-out tracking-wide break-words line-clamp-2">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-[var(--gold-deep)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250 ease-out flex-shrink-0 mt-1" />
            </div>

            <p className="mt-2 text-xs sm:text-sm text-[var(--ink-soft)] line-clamp-2 leading-relaxed font-light [text-wrap:pretty]">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink-soft)] gap-2">
            <span className="truncate max-w-[65%]">{project.location}</span>
            <span className="text-[var(--gold-deep)] font-medium flex-shrink-0">{project.duration}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
