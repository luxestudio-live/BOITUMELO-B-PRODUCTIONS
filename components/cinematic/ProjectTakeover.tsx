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
      className="relative bg-brand-black overflow-hidden py-16 sm:py-24 flex flex-col items-center"
    >
      {/* Intro Heading */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Film className="w-4 h-4 text-brand-gold" />
          <h2 className="text-base sm:text-lg font-display font-medium text-brand-white uppercase tracking-[0.2em]">
            Featured Production
          </h2>
        </div>
        <span className="text-xs font-mono text-brand-gray-light hidden sm:inline">
          {project.location} • {project.year}
        </span>
      </div>

      {/* Expanding Takeover Media Frame */}
      <div
        ref={mediaContainerRef}
        className="relative w-full aspect-[16/9] lg:aspect-[2.39/1] min-h-[320px] sm:min-h-[480px] max-h-[85vh] overflow-hidden border border-brand-teal/50 shadow-2xl bg-brand-black-surface"
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/35 to-transparent pointer-events-none" />

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
            className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-brand-black/70 border border-brand-gold/60 text-brand-gold flex items-center justify-center hover:scale-105 hover:bg-brand-gold hover:text-brand-black transition-all duration-300 shadow-2xl backdrop-blur-md z-30 group"
            aria-label="Play Featured Film Preview"
          >
            <Play className="w-10 h-10 fill-current translate-x-1" />
          </button>
        )}

        {/* Bottom Left Control Strip when Playing */}
        {isPlaying && (
          <div className="absolute bottom-6 right-6 z-30 flex items-center space-x-3">
            <button
              type="button"
              onClick={toggleMute}
              className="p-2.5 rounded-sm bg-brand-black/80 backdrop-blur-md border border-brand-teal text-brand-white hover:text-brand-gold transition-colors"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-gold" />}
            </button>
            <button
              type="button"
              onClick={toggleVideoPlayback}
              className="text-xs uppercase font-mono tracking-wider px-3.5 py-2.5 rounded-sm bg-brand-black/80 backdrop-blur-md border border-brand-teal text-brand-white hover:text-brand-gold transition-colors"
            >
              Pause
            </button>
          </div>
        )}

        {/* Lower Third Narrative & View Action */}
        <div
          ref={textContentRef}
          className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-3 pointer-events-none"
        >
          {project.awardNote && (
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-black/80 backdrop-blur-md border border-brand-gold/50 rounded-sm text-xs font-mono text-brand-gold pointer-events-auto">
              <Award className="w-3.5 h-3.5" />
              <span>{project.awardNote}</span>
            </div>
          )}

          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-brand-white tracking-wide">
            {project.title}
          </h3>

          <p className="text-xs sm:text-base text-brand-gray-light font-serif italic max-w-2xl leading-relaxed">
            &ldquo;{project.logline}&rdquo;
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4 pointer-events-auto">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl"
            >
              <span>View Film Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <span className="text-xs font-mono text-brand-gray hidden sm:inline">
              Client: {project.client} • Format: {project.cameraFormat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

