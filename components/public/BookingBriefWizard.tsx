"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  Film,
  Music,
  Briefcase,
  Layers,
  HelpCircle,
  AlertCircle,
  Send,
  Loader2,
  Copy,
  Check,
  Clapperboard,
} from "lucide-react";

interface WizardState {
  // Step 1: Discipline
  discipline: string;
  // Step 2: Story
  description: string;
  creativeGoals: string;
  audience: string;
  referenceLinks: string;
  // Step 3: Logistics
  timeline: string;
  location: string;
  budget: string;
  specialRequirements: string;
  // Step 4: Contact
  name: string;
  email: string;
  company: string;
  phone: string;
  // Step 5: Consultation
  consultationType: "video" | "email" | "whatsapp";
  selectedDate: string;
  selectedTimeSlot: string;
}

const initialWizardState: WizardState = {
  discipline: "Business Videos",
  description: "",
  creativeGoals: "",
  audience: "",
  referenceLinks: "",
  timeline: "Within 1 month",
  location: "Northern Adelaide, SA",
  budget: "Standard Project Budget",
  specialRequirements: "",
  name: "",
  email: "",
  company: "",
  phone: "",
  consultationType: "video",
  selectedDate: "2026-11-16",
  selectedTimeSlot: "11:00 AM ACDT",
};

export default function BookingBriefWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<WizardState>(initialWizardState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopySlate = () => {
    const slateText = `========================================================
BOITUMELO B PRODUCTIONS — PRODUCTION BRIEF SLATE
========================================================
REFERENCE NO  : #BB-BRIEF-2026-X9
DATE & TIME   : ${formData.selectedDate} at ${formData.selectedTimeSlot}
DISCIPLINE    : ${formData.discipline}
COLLABORATOR  : ${formData.name}${formData.company ? ` (${formData.company})` : ""}
CONTACT EMAIL : ${formData.email}
LOCATION      : ${formData.location}
TIMELINE      : ${formData.timeline}
BUDGET TIER   : ${formData.budget}
STORY CONCEPT : ${formData.description}
========================================================
STATUS        : Slated for Creative Director Review
STUDIO        : Melbourne & Sydney • Australia
========================================================`;

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(slateText).then(() => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 3000);
      }).catch(() => {});
    }
  };

  const totalSteps = 5;

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.discipline) errs.discipline = "Please select a production discipline to continue.";
    }
    if (step === 2) {
      if (!formData.description.trim()) {
        errs.description = "Please provide a brief outline of your story, concept, or project goals.";
      }
    }
    if (step === 4) {
      if (!formData.name.trim()) errs.name = "Please enter your full name.";
      if (!formData.email.trim()) {
        errs.email = "Please enter your email address so our producers can reach you.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Please enter a valid email address (e.g. name@organisation.com.au).";
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
        window.scrollTo({ top: 180, behavior: "smooth" });
      }, 750);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white border border-brand-gold/60 p-8 sm:p-14 rounded-sm text-center space-y-6 max-w-3xl mx-auto animate-fade-in shadow-xl">
        <div className="w-20 h-20 rounded-full bg-brand-teal text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
            Production Brief Recorded
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-teal">
            Brief Received. Discovery Consultation Slated.
          </h2>
          <p className="text-sm sm:text-base text-brand-teal/80 max-w-lg mx-auto font-light leading-relaxed">
            Thank you, <strong className="text-[var(--ink)] font-semibold">{formData.name}</strong>. Your project brief for <strong className="text-[var(--ink)] font-semibold">{formData.discipline}</strong> has been logged with our Northern Adelaide video operator. We will review your materials and confirm your session within 24 business hours.
          </p>
        </div>

        {/* Authentic 35mm Production Clapperboard Slate */}
        <div className="bg-brand-teal border-2 border-brand-gold rounded-sm overflow-hidden text-left max-w-xl mx-auto shadow-2xl text-white">
          {/* Top Diagonal Clapper Arm */}
          <div className="h-8 bg-brand-teal border-b-2 border-brand-gold/60 flex items-stretch overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 transform -skew-x-12 ${
                  i % 2 === 0 ? "bg-brand-gold" : "bg-brand-teal"
                }`}
              />
            ))}
          </div>

          {/* Slate Telemetry Header */}
          <div className="grid grid-cols-4 border-b border-brand-gold/30 bg-brand-teal-deep text-center font-mono text-[11px] py-2 text-brand-teal-light divide-x divide-brand-gold/30">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-brand-teal-light/70">PROD NO.</span>
              <span className="font-semibold text-brand-gold">#BB-2026-X9</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-brand-teal-light/70">SCENE</span>
              <span className="font-semibold text-white">BRIEF</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-brand-teal-light/70">TAKE</span>
              <span className="font-semibold text-white">01</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-brand-teal-light/70">SOUND</span>
              <span className="font-semibold text-brand-gold">SYNC</span>
            </div>
          </div>

          {/* Slate Body Fields */}
          <div className="p-6 space-y-3 font-mono text-xs bg-brand-teal divide-y divide-brand-teal-light/20">
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">PRODUCTION:</span>
              <span className="text-white font-medium text-right">{formData.discipline}</span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">COLLABORATOR:</span>
              <span className="text-white font-medium text-right">
                {formData.name} {formData.company ? `• ${formData.company}` : ""}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">DISCOVERY SESSION:</span>
              <span className="text-brand-gold font-semibold text-right">
                {formData.selectedDate} at {formData.selectedTimeSlot}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">LOCATION / BASE:</span>
              <span className="text-white/80 text-right">{formData.location}</span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">BUDGET TIER:</span>
              <span className="text-white/80 text-right">{formData.budget}</span>
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-brand-teal-light/80 uppercase tracking-wider text-[11px]">STATUS:</span>
              <span className="text-brand-gold font-bold text-right tracking-wider uppercase">SLATED FOR REVIEW</span>
            </div>
          </div>

          {/* Action Ribbon inside Slate */}
          <div className="p-3 bg-brand-teal-deep border-t border-brand-gold/30 flex items-center justify-between text-xs font-mono">
            <span className="text-[11px] text-brand-teal-light/80">Save this slate to your records:</span>
            <button
              type="button"
              onClick={handleCopySlate}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                hasCopied
                  ? "bg-brand-gold text-white"
                  : "bg-brand-teal text-brand-gold hover:bg-brand-gold hover:text-white border border-brand-gold/40"
              }`}
              aria-label="Copy production brief slate to clipboard"
            >
              {hasCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Slate Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Slate Summary</span>
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-xs text-brand-teal/70 max-w-md mx-auto">
          *Creative discovery calls are complementary and obligation-free. Our production coordinator will email your calendar invite and video link directly.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-md"
          >
            <span>Return to Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsCompleted(false);
              setCurrentStep(1);
              setFormData(initialWizardState);
            }}
            className="text-xs uppercase font-mono tracking-widest text-brand-teal/70 hover:text-brand-teal px-4 py-3"
          >
            Create Another Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Step Indicator Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-brand-teal/80">
          <span className="text-brand-gold font-semibold">
            Step 0{currentStep} of 0{totalSteps}
          </span>
          <span>
            {currentStep === 1 && "Discipline"}
            {currentStep === 2 && "Creative Narrative"}
            {currentStep === 3 && "Logistics & Scope"}
            {currentStep === 4 && "Contact Details"}
            {currentStep === 5 && "Consultation Booking"}
          </span>
        </div>
        {/* Progress Bar Track */}
        <div className="w-full h-1.5 bg-brand-teal/10 border border-brand-teal/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-gold transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Form Step Card */}
      <div className="bg-white border border-brand-teal/20 p-4 sm:p-8 md:p-12 rounded-sm shadow-xl relative">
        {/* STEP 1: What are we creating? */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                What are we creating together?
              </h2>
              <p className="text-sm text-brand-teal/70 mt-2 font-light">
                Select the primary production discipline that best matches your project&apos;s ambition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: "Business Videos",
                  desc: "Promotional videos, social media content, team overviews, or customer stories.",
                  icon: Briefcase,
                },
                {
                  id: "Real Estate Videos",
                  desc: "Property walkthroughs, listing videos, architectural features, and agency reels.",
                  icon: Sparkles,
                },
                {
                  id: "Events & Parties",
                  desc: "Milestone birthdays, private functions, corporate events, and celebrations.",
                  icon: Clapperboard,
                },
                {
                  id: "Custom Video / Other",
                  desc: "Specific filming, bespoke editing, or projects requiring dedicated consultation.",
                  icon: Layers,
                },
              ].map((item) => {
                const isSelected = formData.discipline === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, discipline: item.id })}
                    className={`p-6 text-left border rounded-sm transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "border-brand-gold bg-brand-teal text-white shadow-md ring-1 ring-brand-gold"
                        : "border-brand-teal/20 bg-[#F8F9FA] hover:border-brand-gold hover:bg-white text-brand-teal"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <item.icon
                        className={`w-5 h-5 ${isSelected ? "text-brand-gold" : "text-brand-teal/70"}`}
                      />
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      )}
                    </div>
                    <span className={`font-display font-medium text-base block ${isSelected ? "text-white" : "text-brand-teal"}`}>
                      {item.id}
                    </span>
                    <p className={`text-xs mt-2 leading-relaxed font-light ${isSelected ? "text-white/80" : "text-brand-teal/70"}`}>
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>
            {errors.discipline && (
              <p className="text-xs text-red-600 font-mono">{errors.discipline}</p>
            )}
          </div>
        )}

        {/* STEP 2: Tell us your story */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                Tell us your story.
              </h2>
              <p className="text-sm text-brand-teal/70 mt-2 font-light">
                Give us the emotional and narrative heartbeat of what you want viewers to feel.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                Project Concept & Logline <span className="text-brand-gold">*</span>
              </label>
              <textarea
                id="description"
                rows={4}
                maxLength={2000}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="What is the story, subject matter, or song about? What makes it unique?"
                className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-4 rounded-sm text-base sm:text-sm text-brand-teal placeholder-slate-400 focus:outline-none"
              />
              {errors.description && (
                <p role="alert" aria-live="polite" className="text-xs text-red-600 font-mono">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="goals" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Creative Ambition / Core Objective
                </label>
                <input
                  id="goals"
                  type="text"
                  maxLength={300}
                  value={formData.creativeGoals}
                  onChange={(e) => setFormData({ ...formData, creativeGoals: e.target.value })}
                  placeholder="e.g. Festival premiere, viral music release, Series-B fundraise"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal placeholder-slate-400 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="audience" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Intended Audience
                </label>
                <input
                  id="audience"
                  type="text"
                  maxLength={200}
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  placeholder="e.g. Australian music fans, enterprise buyers, cultural patrons"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="refs" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/70 font-semibold">
                Reference Links / Visual Moodboards (Optional)
              </label>
              <input
                id="refs"
                type="text"
                maxLength={500}
                value={formData.referenceLinks}
                onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
                placeholder="Vimeo, YouTube, or Pinterest links that evoke the mood you envision..."
                className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Logistics & Scope */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                Project details & practical parameters.
              </h2>
              <p className="text-sm text-brand-teal/70 mt-2 font-light">
                Clarifying timeline, geographical parameters, and realistic production resources.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Target Timeline / Delivery Deadline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                >
                  <option value="1-4 weeks">Urgent / Within 1 month</option>
                  <option value="1-3 months">Within 1–3 months</option>
                  <option value="3-6 months">3–6 months</option>
                  <option value="6+ months">Flexible / Later this year</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Intended Filming Location(s)
                </label>
                <input
                  id="location"
                  type="text"
                  maxLength={150}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Melbourne VIC, Sydney NSW, Remote Outback, Studio"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                Anticipated Budget Range (AUD)
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
              >
                <option value="$15,000 – $25,000 AUD">$15,000 – $25,000 AUD (Focused Boutique Shoot)</option>
                <option value="$25,000 – $50,000 AUD">$25,000 – $50,000 AUD (Standard Cinema Package)</option>
                <option value="$50,000 – $100,000 AUD">$50,000 – $100,000 AUD (Multi-Day Full Scale Production)</option>
                <option value="$100,000+ AUD">$100,000+ AUD (Flagship Commercial or Festival Master)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="special" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/70 font-semibold">
                Special Requirements (Drone, Underwater, Stunts, High-Speed, etc.)
              </label>
              <textarea
                id="special"
                rows={3}
                maxLength={1500}
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                placeholder="Any technical stunts, night shoots, licensed talent, or remote permits needed..."
                className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-4 rounded-sm text-base sm:text-sm text-brand-teal placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Your Details */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                Who are we speaking with?
              </h2>
              <p className="text-sm text-brand-teal/70 mt-2 font-light">
                Your direct contact details so our creative team can follow up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="step4-name" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Your Full Name <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="step4-name"
                  type="text"
                  required
                  maxLength={120}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Harrison Vance"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                />
                {errors.name && (
                  <p role="alert" aria-live="polite" className="text-xs text-red-600 font-mono">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="step4-email" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Email Address <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="step4-email"
                  type="email"
                  required
                  maxLength={160}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="h.vance@company.com.au"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                />
                {errors.email && (
                  <p role="alert" aria-live="polite" className="text-xs text-red-600 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="step4-company" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/70 font-semibold">
                  Organisation / Label / Production Company (Optional)
                </label>
                <input
                  id="step4-company"
                  type="text"
                  maxLength={150}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Modular Sound / Independent"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="step4-phone" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/70 font-semibold">
                  Telephone (Optional)
                </label>
                <input
                  id="step4-phone"
                  type="tel"
                  maxLength={40}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+61 400 000 000"
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-3.5 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Consultation Preference & Interactive Calendar Preview */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                Schedule a Creative Discovery Session.
              </h2>
              <p className="text-sm text-brand-teal/70 mt-2 font-light">
                Choose your preferred dialogue channel and select a provisional time slot to review your brief directly with our director.
              </p>
            </div>

            {/* Consultation Channel Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: "video", label: "Video Call (30 min)", desc: "Direct face-to-face creative session" },
                { id: "email", label: "Detailed Email Review", desc: "Written feasibility and breakdown" },
                { id: "whatsapp", label: "WhatsApp Audio", desc: "Direct voice messaging conversation" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, consultationType: opt.id as "video" | "email" | "whatsapp" })
                  }
                  className={`p-4 text-left border rounded-sm transition-all ${
                    formData.consultationType === opt.id
                      ? "border-brand-gold bg-brand-teal text-white ring-1 ring-brand-gold shadow-md"
                      : "border-brand-teal/20 bg-[#F8F9FA] hover:border-brand-gold hover:bg-white text-brand-teal"
                  }`}
                >
                  <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                    formData.consultationType === opt.id ? "text-brand-gold" : "text-brand-teal"
                  }`}>
                    {opt.label}
                  </span>
                  <p className={`text-xs mt-1 ${
                    formData.consultationType === opt.id ? "text-white/80" : "text-brand-teal/70"
                  }`}>
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Frontend Demo Calendar & Slot Picker */}
            <div className="bg-[#F8F9FA] border border-brand-teal/20 p-4 sm:p-6 rounded-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-teal/20">
                <div className="flex items-center space-x-2 text-brand-gold">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Select a Discovery Call Slot
                  </span>
                </div>
                <span className="text-xs font-mono text-brand-teal/70 uppercase">
                  Times in AEDT (Melbourne / Sydney)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono text-brand-teal/80 block mb-2 font-medium">
                    Available Consultation Dates:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {["2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-23"].map(
                      (date) => {
                        const isSelected = formData.selectedDate === date;
                        return (
                          <button
                            key={date}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedDate: date })}
                            className={`p-2.5 text-center text-xs font-mono rounded-sm border transition-colors ${
                              isSelected
                                ? "bg-brand-gold text-white font-semibold border-brand-gold shadow-sm"
                                : "bg-white border-brand-teal/20 text-brand-teal hover:border-brand-gold/50"
                            }`}
                          >
                            {date.slice(5)}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-brand-teal/80 block mb-2 font-medium">
                    Available Slots:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["10:00 AM AEDT", "11:30 AM AEDT", "02:00 PM AEDT", "04:30 PM AEDT"].map(
                      (slot) => {
                        const isSelected = formData.selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedTimeSlot: slot })}
                            className={`p-2.5 text-center text-xs font-mono rounded-sm border transition-colors ${
                              isSelected
                                ? "bg-brand-gold text-white font-semibold border-brand-gold shadow-sm"
                                : "bg-white border-brand-teal/20 text-brand-teal hover:border-brand-gold/50"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-brand-teal/70 pt-2 border-t border-brand-teal/15">
                *Discovery sessions are 30-minute introductory conversations held via Google Meet or phone. There is no fee or commitment required.
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls (Back & Next / Submit) */}
        <div className="mt-10 pt-6 border-t border-brand-teal/20 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider text-brand-teal/70 hover:text-brand-teal py-2 px-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-md"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-8 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Logging Brief...</span>
                </>
              ) : (
                <>
                  <span>Submit Creative Brief</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

