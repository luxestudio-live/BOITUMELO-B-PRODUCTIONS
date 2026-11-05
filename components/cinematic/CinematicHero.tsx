"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, ArrowDown, ArrowUpRight, Clapperboard } from "lucide-react";
import ViewfinderHUD from "./ViewfinderHUD";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const sideFramesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current || !frameRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Scene 01 -> Scene 02 Transformation:
      // The full-viewport video contracts into a letterboxed cinematic frame
      // while typography scales and shifts, and peripheral film stills emerge.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=85%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          refreshPriority: 3,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        frameRef.current,
        {
          scale: 0.86,
          borderRadius: "8px",
          borderColor: "#CB8D44",
          boxShadow: "0 25px 70px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(203, 141, 68, 0.15)",
          ease: "power2.inOut",
        },
        0
      )
        .to(
          titleRef.current,
          {
            scale: 0.85,
            y: -40,
            opacity: 0.35,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          hudRef.current,
          {
            opacity: 0.4,
            ease: "power1.out",
          },
          0
        )
        .fromTo(
          sideFramesRef.current,
          { opacity: 0, scale: 0.9, y: 50 },
          { opacity: 1, scale: 1, y: 0, ease: "power2.out" },
          0.3
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const scrollToFilmstrip = () => {
    const target = document.getElementById("filmstrip-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight * 1.3, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="Flagship Cinematic Showreel"
      className="relative w-full h-[100svh] min-h-[600px] sm:min-h-[680px] overflow-hidden bg-brand-black flex items-center justify-center"
    >
      {/* Contractable Hero Film Frame */}
      <div
        ref={frameRef}
        className="relative w-full h-full overflow-hidden border border-transparent transition-[border-color,border-radius] duration-300"
      >
        {/* Background Video Showreel */}
        <video
          ref={videoRef}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          poster="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Cinematic Lighting Overlays with Strong Text Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/55 to-brand-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-brand-teal/20 mix-blend-color-burn pointer-events-none" />
        <div className="absolute inset-0 film-grain pointer-events-none" />

        {/* Viewfinder Camera HUD */}
        <div ref={hudRef} className="absolute inset-0 pointer-events-none">
          <ViewfinderHUD paddedForNav showTopBar={true} showBottomBar={true} />
        </div>

        {/* Asymmetrical Hero Content Composition */}
        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-16 sm:pb-24 pointer-events-none">
          {/* Lower Hero Section: Oversized Architectural Typography */}
          <div ref={titleRef} className="space-y-6 max-w-5xl animate-fade-in pointer-events-auto">
            {/* Live Reel Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-brand-black/80 backdrop-blur-md border border-brand-teal/60 rounded-sm">
              <Clapperboard className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold font-medium">
                Live Showreel • 2024–2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-brand-white tracking-[0.04em] uppercase leading-[0.94] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              BOITUMELO B{" "}
              <span className="text-brand-gold block sm:inline font-normal">
                PRODUCTIONS
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-gray-light font-light max-w-xl leading-relaxed [text-wrap:pretty]">
              Films that move people. Visuals that move brands. An Australian production house specialising in documentary cinema, music videos, and commercial film.
            </p>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center space-x-3 text-xs uppercase font-mono tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl hover:shadow-brand-gold/30"
              >
                <span>Explore The Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={scrollToFilmstrip}
                className="inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] text-brand-white hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-teal hover:border-brand-gold transition-colors bg-brand-black/40 backdrop-blur-sm"
              >
                <span>Roll Film</span>
                <ArrowDown className="w-3.5 h-3.5 text-brand-gold transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                className="min-h-[44px] inline-flex items-center space-x-2.5 text-xs uppercase font-mono tracking-[0.2em] text-brand-white hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-teal/80 hover:border-brand-gold transition-all bg-brand-black/50 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold group"
                aria-label={isMuted ? "Unmute showreel sound" : "Mute showreel sound"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-brand-gray-light group-hover:text-brand-gold transition-colors" />
                ) : (
                  <div className="flex items-center space-x-1.5">
                    <Volume2 className="w-4 h-4 text-brand-gold" />
                    <span className="flex items-end space-x-0.5 h-3 px-0.5" aria-hidden="true">
                      <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                      <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-3" />
                      <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-1.5" />
                    </span>
                  </div>
                )}
                <span>{isMuted ? "Audio: Off" : "Audio: 5.1 On"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SCENE 02: Adjacent Filmstrip Teaser Moments (Revealed on Scroll Contraction) */}
      <div
        ref={sideFramesRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 z-10 pointer-events-none flex items-center justify-between px-4 sm:px-12 opacity-0"
      >
        <div className="text-xs font-mono uppercase tracking-widest text-brand-gold/80 bg-brand-black/80 px-3 py-1 rounded border border-brand-teal/50">
          ◄ Reel 01: The Last Echo
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-brand-gold/80 bg-brand-black/80 px-3 py-1 rounded border border-brand-teal/50">
          Reel 02: Neon Solitude ►
        </div>
      </div>
    </section>
  );
}

