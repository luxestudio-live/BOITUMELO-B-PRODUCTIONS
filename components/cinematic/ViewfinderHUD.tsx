"use client";

import { useEffect, useRef } from "react";

interface ViewfinderHUDProps {
  timecode?: string;
  aspectRatioLabel?: string;
  lensLabel?: string;
  fps?: string;
  iso?: string;
  className?: string;
  showCenterCrosshair?: boolean;
  showTopBar?: boolean;
  showBottomBar?: boolean;
  paddedForNav?: boolean;
}

export default function ViewfinderHUD({
  timecode = "00:14:28:09",
  aspectRatioLabel = "2.39:1 ANA",
  lensLabel = "Cooke Anamorphic/i 35mm T1.5",
  fps = "24.000 FPS",
  iso = "ISO 800",
  className = "",
  showCenterCrosshair = true,
  showTopBar = true,
  showBottomBar = true,
  paddedForNav = false,
}: ViewfinderHUDProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timecodeRef = useRef<HTMLSpanElement>(null);

  // Performance-optimized direct DOM frame tick: zero React re-renders, pauses when off-screen
  useEffect(() => {
    if (!showTopBar) return;
    let frame = 9;
    let intervalId: NodeJS.Timeout | null = null;

    const startTick = () => {
      if (intervalId) return;
      intervalId = setInterval(() => {
        frame = (frame + 1) % 24;
        const pad = frame.toString().padStart(2, "0");
        if (timecodeRef.current) {
          timecodeRef.current.textContent = `00:14:28:${pad}`;
        }
      }, 1000 / 24);
    };

    const stopTick = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const currentContainer = containerRef.current;
    if (!currentContainer || typeof IntersectionObserver === "undefined") {
      startTick();
      return () => stopTick();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTick();
        } else {
          stopTick();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(currentContainer);

    return () => {
      stopTick();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-8 font-mono text-[11px] tracking-[0.1em] text-[var(--white-on-dark)] select-none ${className}`}
    >
      {/* 4 Corner Frameline Brackets */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-6 h-6 border-t-2 border-l-2 border-[var(--gold)]/60" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 border-t-2 border-r-2 border-[var(--gold)]/60" />
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-6 h-6 border-b-2 border-l-2 border-[var(--gold)]/60" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 border-b-2 border-r-2 border-[var(--gold)]/60" />

      {/* Top HUD Bar */}
      {showTopBar && (
        <div className={`${paddedForNav ? "pt-20 sm:pt-24" : "pt-0 sm:pt-1"} flex items-center justify-between tracking-widest uppercase`}>
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-[var(--white-on-dark)] font-medium tracking-wider bg-[#0E0E0F]/85 px-2.5 py-1 rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span>REC</span>
            </span>
            <span
              ref={timecodeRef}
              suppressHydrationWarning
              className="text-[var(--white-on-dark)] font-medium tracking-wider bg-[#0E0E0F]/85 px-2.5 py-1 rounded-[2px]"
            >
              {timecode}
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-6 text-[var(--white-on-dark)] bg-[#0E0E0F]/85 px-3 py-1 rounded-[2px] tracking-wider">
            <span>{fps}</span>
            <span className="text-[var(--gold)]">•</span>
            <span>{iso}</span>
            <span className="text-[var(--gold)]">•</span>
            <span>SHUTTER 180.0°</span>
          </div>
        </div>
      )}

      {/* Center Reticle / Crosshair */}
      {showCenterCrosshair && (
        <div className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center opacity-30">
          <div className="w-full h-[1px] bg-[var(--white-on-dark)]" />
          <div className="absolute h-full w-[1px] bg-[var(--white-on-dark)]" />
          <div className="absolute w-2 h-2 rounded-full border border-[var(--gold)]/80" />
        </div>
      )}

      {/* Bottom HUD Bar */}
      {showBottomBar && (
        <div className="mt-auto flex items-center justify-between tracking-widest uppercase">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-[#0E0E0F]/85 border border-[var(--gold)]/40 text-[var(--gold)] rounded-[2px] text-[11px]">
              {aspectRatioLabel}
            </span>
            <span className="hidden md:inline text-[var(--text-on-dark)] bg-[#0E0E0F]/85 px-2.5 py-1 rounded-[2px] text-[11px]">
              {lensLabel}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-[var(--text-on-dark)] bg-[#0E0E0F]/85 px-2.5 py-1 rounded-[2px]">
            <span className="hidden sm:inline">BAT 14.8V</span>
            <span className="text-[var(--gold)] font-medium">CALIBRATED</span>
          </div>
        </div>
      )}
    </div>
  );
}

