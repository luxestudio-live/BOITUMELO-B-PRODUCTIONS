"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sampleProjects } from "@/data/projects";
import { ArrowUpRight, Play, Film, Award, Volume2, VolumeX } from "lucide-react";
import ViewfinderHUD from "./ViewfinderHUD";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectTakeover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Flagship project: The Last Echo
  const project = sampleProjects[0];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion || !containerRef.current || !mediaContainerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Scene 05: Image expands from framed inset (80vw) into a dramatic full-viewport takeover (100vw)
      gsap.fromTo(
        mediaContainerRef.current,
        {
          width: "82vw",
          borderRadius: "8px",
          scale: 0.94,
        },
        {
          width: "100vw",
          borderRadius: "0px",
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 72%",
            end: "top 30%",
            scrub: 0.6,
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      ref={containerRef}
      aria-label="Featured Production Showcase"
      className="relative bg-[var(--bg-soft)] overflow-hidden py-16 sm:py-24 flex flex-col items-center border-b border-[var(--line)]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* White Card with Gold Hairline Border */}
        <div className="bg-[var(--bg)] border border-[var(--gold)]/40 rounded-[2px] p-4 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(14,14,15,0.06)] space-y-6 sm:space-y-8">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <div className="flex items-center space-x-3">
              <Film className="w-4 h-4 text-[var(--gold)]" />
              <h2 className="text-xs sm:text-sm font-display font-medium text-[var(--ink)] uppercase tracking-[0.2em]">
                Featured Production
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--ink-soft)] tracking-[0.1em] hidden sm:inline">
              {project.location} • {project.year}
            </span>
          </div>

          {/* Expanding Takeover Media Frame */}
          <div
            ref={mediaContainerRef}
            className="relative w-full aspect-[16/9] lg:aspect-[2.39/1] min-h-[380px] sm:min-h-[480px] max-h-[85vh] overflow-hidden rounded-[2px] border border-[#0E0E0F]/20 shadow-md bg-[#0E0E0F]"
          >
            {/* Poster Image */}
            <Image
              src={project.heroPoster}
              alt={project.title}
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video Player Element */}
            <video
              ref={videoRef}
              src={project.fullVideoUrl}
              poster={project.heroPoster}
              playsInline
              loop
              muted={isMuted}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0F]/90 via-[#0E0E0F]/40 to-transparent pointer-events-none" />

            {/* Camera HUD Overlaid on Takeover */}
            <ViewfinderHUD
              timecode="00:18:42:14"
              aspectRatioLabel={project.aspectRatio}
              lensLabel={project.cameraFormat}
            />

            {/* Center Play/Pause Trigger if not playing */}
            {!isPlaying && (
              <button
                type="button"
                onClick={toggleVideoPlayback}
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0E0E0F]/80 border border-[var(--gold)]/80 text-[var(--gold)] flex items-center justify-center hover:scale-105 hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-250 ease-out shadow-lg backdrop-blur-md z-30 group"
                aria-label="Play Featured Film Preview"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
              </button>
            )}

            {/* Bottom Left Control Strip when Playing */}
            {isPlaying && (
              <div className="absolute bottom-6 right-6 z-30 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2.5 rounded-[2px] bg-[#0E0E0F]/85 backdrop-blur-md border border-[var(--gold)]/40 text-[var(--white-on-dark)] hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[var(--gold)]" />}
                </button>
                <button
                  type="button"
                  onClick={toggleVideoPlayback}
                  className="text-[12px] uppercase font-mono tracking-[0.12em] px-3.5 py-2.5 rounded-[2px] bg-[#0E0E0F]/85 backdrop-blur-md border border-[var(--gold)]/40 text-[var(--white-on-dark)] hover:text-[var(--gold)] transition-colors duration-250 ease-out"
                >
                  Pause
                </button>
              </div>
            )}

            {/* Lower Third Narrative inside film overlay */}
            <div
              ref={textContentRef}
              className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-8 lg:p-10 max-w-4xl space-y-2 pointer-events-none"
            >
              {project.awardNote && (
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0E0E0F]/85 backdrop-blur-md border border-[var(--gold)]/50 rounded-[2px] text-[11px] font-mono text-[var(--gold)] pointer-events-auto">
                  <Award className="w-3.5 h-3.5" />
                  <span>{project.awardNote}</span>
                </div>
              )}

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[var(--white-on-dark)] tracking-wide">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-on-dark)] font-serif italic max-w-2xl leading-relaxed">
                &ldquo;{project.logline}&rdquo;
              </p>
            </div>
          </div>

          {/* Action Row Under Media Box */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center space-x-2 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-7 py-3 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out shadow-[0_10px_30px_rgba(14,14,15,0.06)]"
            >
              <span>View Film Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <span className="text-xs font-mono text-[var(--ink-soft)] tracking-[0.1em] hidden sm:inline">
              Client: {project.client} • Format: {project.cameraFormat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

