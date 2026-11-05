"use client";

import { useState, useEffect } from "react";

interface ViewfinderHUDProps {
  timecode?: string;
  aspectRatioLabel?: string;
  lensLabel?: string;
  fps?: string;
  iso?: string;
  className?: string;
  showCenterCrosshair?: boolean;
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
  paddedForNav = false,
}: ViewfinderHUDProps) {
  const [liveTimecode, setLiveTimecode] = useState(timecode);

  // Subtle real-time frame tick simulation
  useEffect(() => {
    let frame = 9;
    const interval = setInterval(() => {
      frame = (frame + 1) % 24;
      const pad = frame.toString().padStart(2, "0");
      setLiveTimecode(`00:14:28:${pad}`);
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-8 font-mono text-xs text-brand-white select-none ${className}`}
    >
      {/* 4 Corner Frameline Brackets */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-6 h-6 border-t-2 border-l-2 border-brand-gold/60" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 border-t-2 border-r-2 border-brand-gold/60" />
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-6 h-6 border-b-2 border-l-2 border-brand-gold/60" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 border-b-2 border-r-2 border-brand-gold/60" />

      {/* Top HUD Bar */}
      <div className={`${paddedForNav ? "pt-20 sm:pt-24" : "pt-0 sm:pt-1"} flex items-center justify-between tracking-widest uppercase`}>
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5 text-[#FF6B6B] font-bold tracking-wider bg-black/90 px-2.5 py-1 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D]" />
            <span>REC</span>
          </span>
          <span suppressHydrationWarning className="text-[#E2A65F] font-bold tracking-wider bg-black/90 px-2.5 py-1 rounded-sm">{liveTimecode}</span>
        </div>

        <div className="hidden sm:flex items-center space-x-6 text-slate-100 bg-black/80 px-3 py-1 rounded-sm tracking-wider">
          <span>{fps}</span>
          <span className="text-brand-gold">•</span>
          <span>{iso}</span>
          <span className="text-brand-gold">•</span>
          <span>SHUTTER 180.0°</span>
        </div>
      </div>

      {/* Center Reticle / Crosshair */}
      {showCenterCrosshair && (
        <div className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center opacity-30">
          <div className="w-full h-[1px] bg-brand-white" />
          <div className="absolute h-full w-[1px] bg-brand-white" />
          <div className="absolute w-2 h-2 rounded-full border border-brand-gold/80" />
        </div>
      )}

      {/* Bottom HUD Bar */}
      <div className="flex items-center justify-between tracking-widest uppercase">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 bg-brand-black/80 border border-brand-gold/40 text-brand-gold rounded-sm text-xs">
            {aspectRatioLabel}
          </span>
          <span className="hidden md:inline text-slate-200 bg-brand-black/70 px-2.5 py-1 rounded-sm text-xs">
            {lensLabel}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs text-slate-200 bg-brand-black/70 px-2.5 py-1 rounded-sm">
          <span className="hidden sm:inline">BAT 14.8V</span>
          <span className="text-brand-gold font-medium">CALIBRATED</span>
        </div>
      </div>
    </div>
  );
}

