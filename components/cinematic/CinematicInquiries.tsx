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
    a: "Our core packages are built on tier-one cinema ecosystems: ARRI Alexa 35 and Alexa Mini LF paired with Cooke Anamorphic/i, Atlas Orion, or Leica Summicron-C spherical glass. For high-speed kinetic and aerial sequences, we deploy RED V-Raptor 8K VV and Sony FX9/FX6 platforms. All projects are captured at native 12-bit / 16-bit colour depth with custom on-set LUT monitoring calibrated to DCI-P3 and Rec.709.",
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
    q: "How does project billing, payment scheduling, and deposit mobilisation work?",
    a: "We operate on a transparent three-tranche commercial milestone structure: a 50% mobilisation deposit upon contract execution (securing director calendar, camera rental holds, location permits, and crew dates); 25% upon completion of principal photography; and the final 25% balance upon formal client approval and delivery of master colour and audio assets.",
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
    q: "What is your editorial revision cycle, colour grading process, and sound mix workflow?",
    a: "All post-production is managed through calibrated DaVinci Resolve colour suites and professional sound stages. We provide clients with interactive Frame.io review links allowing frame-accurate timecode comments. Standard projects include three formal revision rounds (Assembly Cut, Director's Cut, Fine Cut) followed by final theatrical colour grade mastering and bespoke sound design.",
    category: "Deliverables & Rights",
    specs: "Suite: DaVinci Resolve Studio 19 • Review: Frame.io Timecode Sync • Cycles: 3 Formal Editorial Passes",
  },
];

export default function CinematicInquiries({
  title = "Common Enquiries.",
  serifAccent = "Clear Answers for Every Stage of Production.",
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
        return <Camera className="w-3.5 h-3.5 text-[var(--gold)]" />;
      case "Deliverables & Rights":
        return <Film className="w-3.5 h-3.5 text-[var(--gold)]" />;
      case "Commercial Terms":
        return <CreditCard className="w-3.5 h-3.5 text-[var(--gold)]" />;
      case "Expeditions & CASA":
        return <Compass className="w-3.5 h-3.5 text-[var(--gold)]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />;
    }
  };

  return (
    <section
      aria-label="Common Inquiries & Production Standards"
      className="relative bg-[var(--bg)] py-24 sm:py-32 border-y border-[var(--line)] overflow-hidden text-[var(--ink)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Header, Categories & Producer Card */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* Architectural Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[var(--ink)] leading-[1.05] tracking-[0.02em]">
                {title}{" "}
                <span className="block text-[var(--gold)] font-normal mt-1">
                  {serifAccent}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-light pt-2 [text-wrap:pretty]">
                {lead}
              </p>
            </div>

            {/* Category Filter Pills (when enabled) */}
            {enableCategories && categories.length > 2 && (
              <div className="pt-2 space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--ink-soft)] block font-medium">
                  Filter by Topic
                </span>
                <div className="flex flex-wrap gap-2.5">
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
                        className={`min-h-[44px] text-[11px] font-mono uppercase tracking-[0.12em] px-4 py-2 rounded-[2px] border transition-all duration-250 ease-out flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                          isSelected
                            ? "bg-[var(--gold)] text-[var(--ink)] border-[var(--gold)] font-medium shadow-sm"
                            : "bg-[var(--bg-soft)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--gold)]/60"
                        }`}
                      >
                        <span>{cat}</span>
                        <span
                          className={`text-xs ml-1 font-semibold ${
                            isSelected ? "text-[var(--ink)]" : "text-[var(--gold-deep)]"
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
            <div className="relative p-6 sm:p-7 bg-[var(--ink)] border border-[rgba(255,255,255,0.12)] rounded-[2px] space-y-4 shadow-[0_10px_30px_rgba(14,14,15,0.06)] text-[var(--white-on-dark)]">
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[var(--gold)]/40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[var(--gold)]/40 pointer-events-none" />

              <div className="flex items-center space-x-3 text-[var(--gold)]">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-[0.15em] font-medium">
                  Direct Producer Desk
                </span>
              </div>

              <p className="text-xs text-[var(--text-on-dark)] font-light leading-relaxed">
                Have a bespoke brief, sensitive NDA project, or complex aviation requirement not answered here?
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 text-[11px] font-mono uppercase tracking-[0.12em] bg-[var(--gold)] text-[var(--ink)] px-4 py-2.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out font-medium shadow-sm"
                >
                  <span>Direct Message</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center space-x-2 text-[11px] font-mono uppercase tracking-[0.12em] bg-transparent border border-[rgba(255,255,255,0.2)] text-[var(--white-on-dark)] hover:border-[var(--gold)] hover:text-[var(--gold)] px-4 py-2.5 rounded-[2px] transition-all duration-250 ease-out"
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
                  className={`group relative transition-all duration-250 ease-out rounded-[2px] border ${
                    isOpen
                      ? "bg-[var(--bg-soft)] border-[var(--gold)] shadow-subtle"
                      : "bg-[var(--bg)] border-[var(--line)] hover:border-[var(--gold)]/40"
                  }`}
                >
                  {/* Viewfinder Framelines on Active Item */}
                  {isOpen && (
                    <>
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[var(--gold)] pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[var(--gold)] pointer-events-none" />
                    </>
                  )}

                  {/* Header Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleInquiry(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-[2px]"
                  >
                    <div className="space-y-2 flex-grow pr-2">
                      {/* Numbering & Category Pill */}
                      <div className="flex items-center space-x-3 text-xs font-mono">
                        <span
                          className={`font-semibold tracking-wider transition-colors duration-250 ease-out ${
                            isOpen ? "text-[var(--gold-deep)]" : "text-[var(--ink-soft)]"
                          }`}
                        >
                          [ 0{idx + 1} ]
                        </span>
                        {item.category && (
                          <span className="inline-flex items-center space-x-1.5 text-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 rounded-[2px] border border-[var(--line)]">
                            {getCategoryIcon(item.category)}
                            <span className="uppercase tracking-wider text-[11px] font-mono font-medium">
                              {item.category}
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Question Text */}
                      <h3
                        className={`text-base sm:text-lg font-display transition-colors duration-250 ease-out tracking-wide leading-snug ${
                          isOpen
                            ? "text-[var(--ink)] font-medium"
                            : "text-[var(--ink)] group-hover:text-[var(--gold-deep)]"
                        }`}
                      >
                        {item.q}
                      </h3>
                    </div>

                    {/* Expand/Collapse Toggle Indicator */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-250 ease-out mt-1 ${
                        isOpen
                          ? "bg-[var(--gold)] text-[var(--ink)] border-[var(--gold)] rotate-90"
                          : "bg-[var(--bg-soft)] text-[var(--ink)] border-[var(--line)] group-hover:border-[var(--gold)] group-hover:text-[var(--gold-deep)]"
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
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-[var(--line)] mt-1 animate-fade-in space-y-4">
                      {/* Answer Paragraph */}
                      <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-light pt-4">
                        {item.a}
                      </p>

                      {/* Technical Specs Footer Ribbon */}
                      {item.specs && (
                        <div className="p-3 bg-[var(--ink)] text-[var(--white-on-dark)] border border-[rgba(255,255,255,0.12)] rounded-[2px] flex items-center space-x-2 text-xs font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                          <span className="truncate">
                            <strong className="text-[var(--gold)] font-medium uppercase tracking-wider mr-1">
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

