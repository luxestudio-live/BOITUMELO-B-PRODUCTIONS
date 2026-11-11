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
  title,
  serifAccent,
  lead,
  align = "left",
}: EditorialHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`space-y-4 max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-[0.02em] text-[var(--ink)] leading-[1.1]">
        {title}{" "}
        {serifAccent && (
          <span className="text-[var(--gold)] block sm:inline font-normal mt-1 sm:mt-0">
            {serifAccent}
          </span>
        )}
      </h2>

      {lead && (
        <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed max-w-2xl font-light [text-wrap:pretty]">
          {lead}
        </p>
      )}
    </div>
  );
}

