import React from "react";

interface EditorialHeadingProps {
  eyebrow?: string;
  title: string;
  serifAccent?: string;
  lead?: string;
  align?: "left" | "center";
  theme?: "dark" | "teal";
}

export default function EditorialHeading({
  eyebrow,
  title,
  serifAccent,
  lead,
  align = "left",
  theme = "dark",
}: EditorialHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`space-y-4 max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center space-x-2 ${isCenter ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-medium">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-brand-white leading-[1.1]">
        {title}{" "}
        {serifAccent && (
          <span className="font-serif italic font-normal text-brand-gray-light block sm:inline mt-1 sm:mt-0">
            {serifAccent}
          </span>
        )}
      </h2>

      {lead && (
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed max-w-2xl font-light">
          {lead}
        </p>
      )}
    </div>
  );
}

