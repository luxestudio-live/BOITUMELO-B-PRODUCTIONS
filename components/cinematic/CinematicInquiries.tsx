"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  Film,
  Camera,
  ShieldCheck,
  CreditCard,
  Compass,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export interface InquiryItem {
  q: string;
  a: string;
  category?: string;
  specs?: string;
}

interface CinematicInquiriesProps {
  title?: string;
  serifAccent?: string;
  lead?: string;
  eyebrow?: string;
  inquiries?: InquiryItem[];
  enableCategories?: boolean;
}

const defaultInquiries: InquiryItem[] = [
  {
    q: "What camera systems, glass, and recording formats do you field across productions?",
    a: "Our core packages are built on tier-one cinema ecosystems: ARRI Alexa 35 and Alexa Mini LF paired with Cooke Anamorphic/i, Atlas Orion, or Leica Summicron-C spherical glass. For high-speed kinetic and aerial sequences, we deploy RED V-Raptor 8K VV and Sony FX9/FX6 platforms. All projects are captured at native 12-bit / 16-bit color depth with custom on-set LUT monitoring calibrated to DCI-P3 and Rec.709.",
    category: "Capture & Optics",
    specs: "Sensor: Large Format / Super 35 • Glass: 2.39:1 Anamorphic & Prime Sets • Monitoring: SmallHD 4K High-Bright",
  },
  {
    q: "Do you supply full master exhibition files, social cutdowns, and RAW camera archives?",
    a: "Every commissioned film includes uncompressed commercial exhibition deliverables: Apple ProRes 4444 XQ and 422 HQ masters, web-optimized H.265 / H.264 streams, vertical 9:16 cutdowns for mobile campaigns, and social teasers. You receive full, perpetual commercial exhibition licenses. Complete RAW camera negative archives (OCF) on encrypted RAID drives or LTO tapes are available as a bespoke archival add-on.",
    category: "Deliverables & Rights",
    specs: "Codecs: ProRes 4444 XQ / Rec.709 / Rec.2020 • Audio: 24-bit 48kHz Stereo & 5.1 Surround • Master Delivery: Aspera / Frame.io",
  },
  {
    q: "How does project billing, payment scheduling, and deposit mobilization work?",
    a: "We operate on a transparent three-tranche commercial milestone structure: a 50% mobilization deposit upon contract execution (securing director calendar, camera rental holds, location permits, and crew dates); 25% upon completion of principal photography; and the final 25% balance upon formal client approval and delivery of master color and audio assets.",
    category: "Commercial Terms",
    specs: "Terms: 50 / 25 / 25 Milestone Model • Currency: AUD (ex GST) • Transparent Invoicing & Production Slates",
  },
  {
    q: "Do you hold certified CASA drone permits, aviation clearances, and commercial insurance?",
    a: "Yes. BOITUMELO B PRODUCTIONS carries comprehensive $20M Public & Products Liability coverage, full equipment floater policies, and CASA certified ReOC drone aviation flight permissions. We hold active safety induction credentials across state film bodies and local councils throughout Victoria, New South Wales, Queensland, and the Northern Territory.",
    category: "Expeditions & CASA",
    specs: "Coverage: $20M Public Liability • Aviation: CASA ReOC Drone Pilot Approved • Permits: Local Council & Parks Authority",
  },
  {
    q: "How do you coordinate remote backcountry filming and multi-city Australian shoots?",
    a: "We maintain self-sufficient mobile production units equipped for remote fieldwork—including off-grid solar battery charging banks, satellite communication arrays (Starlink field terminals), and ruggedized 4WD transport. Whether capturing elder storytellers in the red dirt of Central Australia or filming industrial maritime sites off the NSW coast, our team coordinates all regional travel, freight, permits, and cultural elder consultations in-house.",
    category: "Expeditions & CASA",
    specs: "Logistics: Starlink Field Hub • Off-grid Power: 5kWh Mobile Storage • Transport: 4WD Backcountry Rig",
  },
  {
    q: "What is your editorial revision cycle, color grading process, and sound mix workflow?",
    a: "All post-production is managed through calibrated DaVinci Resolve color suites and professional sound stages. We provide clients with interactive Frame.io review links allowing frame-accurate timecode comments. Standard projects include three formal revision rounds (Assembly Cut, Director's Cut, Fine Cut) followed by final theatrical color grade mastering and bespoke sound design.",
    category: "Deliverables & Rights",
    specs: "Suite: DaVinci Resolve Studio 19 • Review: Frame.io Timecode Sync • Cycles: 3 Formal Editorial Passes",
  },
];

export default function CinematicInquiries({
  title = "Common Inquiries.",
  serifAccent = "Everything You Need to Know.",
  lead = "Transparent operational standards regarding camera packages, master deliverables, licensing rights, milestone billing, and nationwide expedition logistics.",
  eyebrow = "Production Specifications & Clarity",
  inquiries = defaultInquiries,
  enableCategories = true,
}: CinematicInquiriesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(inquiries.map((i) => i.category).filter(Boolean))),
  ] as string[];

  const filteredInquiries =
    selectedCategory === "All"
      ? inquiries
      : inquiries.filter((i) => i.category === selectedCategory);

  const toggleInquiry = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "Capture & Optics":
        return <Camera className="w-3.5 h-3.5 text-brand-gold" />;
      case "Deliverables & Rights":
        return <Film className="w-3.5 h-3.5 text-brand-gold" />;
      case "Commercial Terms":
        return <CreditCard className="w-3.5 h-3.5 text-brand-gold" />;
      case "Expeditions & CASA":
        return <Compass className="w-3.5 h-3.5 text-brand-gold" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-brand-gold" />;
    }
  };

  return (
    <section
      aria-label="Common Inquiries & Production Standards"
      className="relative bg-brand-teal-deep py-24 sm:py-32 border-y border-brand-teal/40 overflow-hidden"
    >
      {/* Cinematic Ambient Glow & Subtle Film Grain */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-teal/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Header, Categories & Producer Card */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* HUD Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-brand-black/70 border border-brand-teal/60 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-subtle" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-gold font-medium">
                {eyebrow}
              </span>
            </div>

            {/* Architectural Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-white leading-[1.05] tracking-tight">
                {title}{" "}
                <span className="block font-serif italic text-brand-gold font-normal mt-1">
                  {serifAccent}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-brand-gray-light leading-relaxed font-light pt-2">
                {lead}
              </p>
            </div>

            {/* Category Filter Pills (when enabled) */}
            {enableCategories && categories.length > 2 && (
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gray block">
                  Filter by Discipline // Topic
                </span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    const count =
                      cat === "All"
                        ? inquiries.length
                        : inquiries.filter((i) => i.category === cat).length;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setOpenIndex(0);
                        }}
                        className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-sm border transition-all duration-300 flex items-center space-x-1.5 ${
                          isSelected
                            ? "bg-brand-gold text-brand-black border-brand-gold font-medium shadow-md shadow-brand-gold/15"
                            : "bg-brand-black/60 text-brand-gray-light border-brand-teal/50 hover:border-brand-gold/60 hover:text-brand-white"
                        }`}
                      >
                        <span>{cat}</span>
                        <span
                          className={`text-[10px] ml-1 opacity-70 ${
                            isSelected ? "text-brand-black" : "text-brand-gold"
                          }`}
                        >
                          ({count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Executive Producer Contact Hotline Card */}
            <div className="relative p-6 sm:p-7 bg-brand-black/80 border border-brand-teal/60 rounded-sm space-y-4 shadow-xl">
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-gold/40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-gold/40 pointer-events-none" />

              <div className="flex items-center space-x-3 text-brand-gold">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
                  Direct Producer Desk
                </span>
              </div>

              <p className="text-xs text-brand-gray-light font-light leading-relaxed">
                Have a bespoke brief, sensitive NDA project, or complex aviation requirement not answered here?
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all font-medium"
                >
                  <span>Direct Message</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-wider bg-brand-teal/50 border border-brand-teal-light text-brand-white hover:border-brand-gold px-4 py-2.5 rounded-sm transition-all"
                >
                  <span>Build Brief</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Terminal */}
          <div className="lg:col-span-7 space-y-4">
            {filteredInquiries.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-300 rounded-sm border ${
                    isOpen
                      ? "bg-brand-black-elevated border-brand-gold/70 shadow-2xl shadow-brand-black"
                      : "bg-brand-black/60 border-brand-teal/40 hover:border-brand-teal/80 hover:bg-brand-black/80"
                  }`}
                >
                  {/* Viewfinder Framelines on Active Item */}
                  {isOpen && (
                    <>
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-gold pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-gold pointer-events-none" />
                    </>
                  )}

                  {/* Header Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleInquiry(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                  >
                    <div className="space-y-2 flex-grow pr-2">
                      {/* Numbering & Category Pill */}
                      <div className="flex items-center space-x-3 text-[11px] font-mono">
                        <span
                          className={`font-semibold tracking-wider transition-colors duration-300 ${
                            isOpen ? "text-brand-gold" : "text-brand-gray"
                          }`}
                        >
                          [ 0{idx + 1} ]
                        </span>
                        {item.category && (
                          <span className="inline-flex items-center space-x-1.5 text-brand-gray-light bg-brand-teal/30 px-2 py-0.5 rounded-sm border border-brand-teal/40">
                            {getCategoryIcon(item.category)}
                            <span className="uppercase tracking-wider text-[10px]">
                              {item.category}
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Question Text */}
                      <h3
                        className={`text-base sm:text-lg font-display transition-colors duration-300 tracking-wide leading-snug ${
                          isOpen
                            ? "text-brand-gold font-medium"
                            : "text-brand-white group-hover:text-brand-gold-light"
                        }`}
                      >
                        {item.q}
                      </h3>
                    </div>

                    {/* Expand/Collapse Toggle Indicator */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${
                        isOpen
                          ? "bg-brand-gold text-brand-black border-brand-gold rotate-90"
                          : "bg-brand-teal/30 text-brand-gray-light border-brand-teal/60 group-hover:border-brand-gold group-hover:text-brand-gold"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content Drawer */}
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-brand-teal/30 mt-1 animate-fade-in space-y-4">
                      {/* Answer Paragraph */}
                      <p className="text-sm sm:text-base text-brand-gray-light leading-relaxed font-light pt-4">
                        {item.a}
                      </p>

                      {/* Technical Specs Footer Ribbon */}
                      {item.specs && (
                        <div className="p-3 bg-brand-teal-deep/80 border border-brand-teal/40 rounded-sm flex items-center space-x-2 text-[11px] font-mono text-brand-gray">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                          <span className="truncate">
                            <strong className="text-brand-gold font-semibold uppercase tracking-wider mr-1">
                              SPECS:
                            </strong>
                            {item.specs}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

