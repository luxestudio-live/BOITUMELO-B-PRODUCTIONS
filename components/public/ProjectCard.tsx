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
      className="group relative flex flex-col bg-white border border-brand-teal/15 hover:border-brand-gold transition-all duration-500 rounded-sm overflow-hidden shadow-sm hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        aria-label={`View film project: ${project.title}`}
      >
        {/* Physical 35mm Perforation Header Strip */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-brand-teal text-xs font-mono text-white border-b border-brand-teal-light">
          <span className="text-brand-gold font-semibold uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <span className="text-slate-300">{project.aspectRatio}</span>
        </div>

        <div className={`relative w-full ${aspectClass} overflow-hidden bg-brand-black-surface`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Viewfinder Corner Framelines */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-brand-gold/60 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-brand-gold/60 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-brand-gold/60 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-brand-gold/60 pointer-events-none" />

          {/* Year Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-brand-black/80 backdrop-blur-md text-xs font-mono text-brand-gold border border-brand-teal/50 rounded-sm">
              {project.year}
            </span>
          </div>

          {/* Quick Play Cue */}
          <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-black/80 backdrop-blur-sm border border-brand-gold/60 text-brand-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Content Metadata Block */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display font-medium text-lg sm:text-xl text-brand-teal group-hover:text-brand-gold transition-colors duration-300 tracking-wide break-words line-clamp-2">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
            </div>

            <p className="mt-2 text-xs sm:text-sm text-brand-teal/80 line-clamp-2 leading-relaxed font-light [text-wrap:pretty]">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-brand-teal/10 flex items-center justify-between text-xs font-mono text-brand-teal/70 gap-2">
            <span className="truncate max-w-[65%]">{project.location}</span>
            <span className="text-brand-gold font-medium flex-shrink-0">{project.duration}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
