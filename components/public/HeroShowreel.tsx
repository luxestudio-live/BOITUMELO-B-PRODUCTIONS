"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowDown, ArrowUpRight, Film } from "lucide-react";

export default function HeroShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, keep state updated
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Cinematic Showreel Hero"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-brand-black flex items-end pb-12 sm:pb-20"
    >
      {/* Background Video */}
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

      {/* Cinematic Overlays: Top header fade, bottom editorial shadow, and subtle film tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-teal/15 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-6">
          {/* Studio Tag & Film Identifier */}
          <div className="inline-flex items-center space-x-3 bg-brand-black/60 backdrop-blur-md border border-brand-teal/50 px-3 py-1.5 rounded-sm">
            <Film className="w-3.5 h-3.5 text-brand-gold animate-pulse-subtle" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand-gold">
              Showreel 2024 / 2025 • Australian Cinema
            </span>
          </div>

          {/* Master Creative Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium text-brand-white tracking-tight leading-[0.95]">
            Stories Worth{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              Feeling.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-brand-gray-light max-w-2xl font-light leading-relaxed">
            Films that move people. Visuals that move brands. An Australian creative production house crafting documentary cinema, visionary music videos, and commercial film.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/work"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-7 py-4 rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/book"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-brand-gold px-6 py-4 rounded-sm border border-brand-gold/60 hover:border-brand-gold transition-all duration-300 backdrop-blur-sm bg-brand-teal/80"
            >
              <span>Start a Project</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Sound Toggle & Scroll Indicator */}
        <div className="mt-12 pt-6 border-t border-brand-teal/30 flex items-center justify-between text-xs font-mono text-brand-gray-light">
          {/* Interactive Sound Control */}
          <button
            type="button"
            onClick={toggleSound}
            className="flex items-center space-x-2.5 py-1.5 px-3 rounded bg-brand-black/50 backdrop-blur-md border border-brand-teal/40 hover:border-brand-gold hover:text-brand-gold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={isMuted ? "Unmute showreel sound" : "Mute showreel sound"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-brand-gray" />
            ) : (
              <div className="flex items-center space-x-1.5">
                <Volume2 className="w-4 h-4 text-brand-gold" />
                <span className="flex items-end space-x-0.5 h-3 px-0.5" aria-hidden="true">
                  <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                  <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-3" />
                  <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-1.5" />
                  <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_1s_ease-in-out_infinite_0.1s] h-2.5" />
                </span>
              </div>
            )}
            <span className="uppercase tracking-[0.2em] text-[10px]">
              {isMuted ? "Audio: Muted" : "Audio: Active"}
            </span>
          </button>

          {/* Scroll cue */}
          <button
            type="button"
            onClick={scrollToNext}
            className="hidden sm:flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-brand-gray-light hover:text-brand-white transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-brand-gold transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

