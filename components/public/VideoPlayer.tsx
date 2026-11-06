"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Scan, Crosshair } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  aspectRatio?: string; // e.g. "aspect-video" or "aspect-[2.39/1]"
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

type FramingMode = "2.39" | "1.85" | "16:9";

export default function VideoPlayer({
  src,
  poster,
  aspectRatio = "aspect-video",
  title = "Film Preview",
  autoPlay = false,
  loop = false,
  muted = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [framingMode, setFramingMode] = useState<FramingMode>("2.39");
  const [showCrosshairs, setShowCrosshairs] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle through optical framing formats
  const cycleFraming = () => {
    setFramingMode((prev) => (prev === "2.39" ? "1.85" : prev === "1.85" ? "16:9" : "2.39"));
  };

  // Sync state with HTML video element
  const togglePlay = () => {
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

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(current);
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current || duration === 0) return;
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m") {
      e.preventDefault();
      toggleMute();
    } else if (e.key === "f") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "c") {
      e.preventDefault();
      setShowCrosshairs((prev) => !prev);
    } else if (e.key === "a") {
      e.preventDefault();
      cycleFraming();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (videoRef.current && duration > 0) {
        videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, duration);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (videoRef.current && duration > 0) {
        videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0);
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      tabIndex={0}
      role="region"
      aria-label={`${title} video player`}
      className={`relative group bg-brand-black-elevated overflow-hidden rounded-sm border border-brand-teal/40 ${aspectRatio} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
        aria-label={title}
      />

      {/* Dynamic Optical Matte Bars (Scope 2.39:1 / Flat 1.85:1 / Broadcast 16:9) */}
      <div
        className={`absolute top-0 left-0 right-0 bg-brand-black z-20 pointer-events-none transition-all duration-500 ease-cinematic ${
          framingMode === "2.39" ? "h-[10%]" : framingMode === "1.85" ? "h-[4%]" : "h-0"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-brand-black z-20 pointer-events-none transition-all duration-500 ease-cinematic ${
          framingMode === "2.39" ? "h-[10%]" : framingMode === "1.85" ? "h-[4%]" : "h-0"
        }`}
      />

      {/* Optional Optical Viewfinder Center Reticle */}
      {showCrosshairs && (
        <div className="absolute inset-0 m-auto w-16 h-16 pointer-events-none z-20 flex items-center justify-center opacity-40">
          <div className="w-full h-[1px] bg-brand-white" />
          <div className="absolute h-full w-[1px] bg-brand-white" />
          <div className="absolute w-3 h-3 rounded-full border border-brand-gold" />
        </div>
      )}

      {/* Cinematic Vignette Overlay */}
      <div
        onClick={togglePlay}
        className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/40 pointer-events-none opacity-80"
      />

      {/* Fallback state when media stream is restricted or fails */}
      {hasError && (
        <div className="absolute top-4 left-4 right-4 z-30 bg-brand-black/90 border border-brand-teal/60 p-3 rounded-sm flex items-center justify-between text-xs font-mono text-brand-gray-light backdrop-blur-md">
          <span>Stream paused. Presenting high-resolution archival still.</span>
          <button
            type="button"
            onClick={() => {
              setHasError(false);
              if (videoRef.current) {
                videoRef.current.load();
                videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
              }
            }}
            className="text-brand-gold hover:text-brand-gold-light underline uppercase ml-3 flex-shrink-0"
          >
            Retry Stream
          </button>
        </div>
      )}

      {/* Big Center Play Button when paused */}
      {!isPlaying && !hasError && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-brand-teal/80 border border-brand-gold/60 text-brand-gold flex items-center justify-center hover:scale-105 hover:bg-brand-gold hover:text-brand-black transition-all duration-300 shadow-2xl backdrop-blur-sm group/btn z-20"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 fill-current translate-x-0.5" />
        </button>
      )}

      {/* Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 z-30 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Progress Bar */}
        <div className="relative mb-3 flex items-center group/scrubber">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            aria-label="Seek timeline"
            className="w-full h-1 bg-brand-teal rounded-lg appearance-none cursor-pointer accent-brand-gold focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-brand-white">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1.5 hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Micro Optical Audio VU Visualiser when sound is active */}
            {!isMuted && isPlaying && (
              <div
                className="hidden sm:flex items-end space-x-0.5 h-3.5 px-1 py-0.5 rounded bg-brand-black/60 border border-brand-teal/40"
                title="Spatial Audio Stream Active"
              >
                <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-3" />
                <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-1.5" />
                <span className="w-0.5 bg-brand-gold rounded-full animate-[pulse_1s_ease-in-out_infinite_0.1s] h-2.5" />
              </div>
            )}

            <span className="font-mono text-xs text-brand-gray-light">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Interactive Optical Aspect Ratio Switcher */}
            <button
              type="button"
              onClick={cycleFraming}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-sm bg-brand-black/80 border border-brand-teal/50 hover:border-brand-gold text-brand-gold transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold group/optic"
              title="Click to Switch Optical Aspect Ratio (Scope 2.39:1 / Flat 1.85:1 / Broadcast 16:9)"
              aria-label={`Optical Framing: ${framingMode === "2.39" ? "2.39:1 Scope" : framingMode === "1.85" ? "1.85:1 Flat" : "16:9 Broadcast"}. Click to cycle.`}
            >
              <Scan className="w-3.5 h-3.5 text-brand-gold group-hover/optic:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase">
                {framingMode === "2.39" ? "2.39:1" : framingMode === "1.85" ? "1.85:1" : "16:9"}
                <span className="hidden sm:inline"> {framingMode === "2.39" ? "SCOPE" : framingMode === "1.85" ? "FLAT" : "FULL"}</span>
              </span>
            </button>

            {/* Crosshairs Viewfinder Reticle Toggle */}
            <button
              type="button"
              onClick={() => setShowCrosshairs((prev) => !prev)}
              className={`p-1.5 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold ${
                showCrosshairs
                  ? "text-brand-gold bg-brand-teal/50 border border-brand-gold/40"
                  : "text-brand-gray-light hover:text-brand-white"
              }`}
              title="Toggle Viewfinder Crosshairs (Key: C)"
              aria-label="Toggle camera framing crosshairs"
              aria-pressed={showCrosshairs}
            >
              <Crosshair className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
              aria-label="Toggle full screen mode"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

