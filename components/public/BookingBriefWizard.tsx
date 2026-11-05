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
  discipline: "Documentary & Film",
  description: "",
  creativeGoals: "",
  audience: "",
  referenceLinks: "",
  timeline: "1-3 months",
  location: "Melbourne / Victoria",
  budget: "$25,000 – $50,000 AUD",
  specialRequirements: "",
  name: "",
  email: "",
  company: "",
  phone: "",
  consultationType: "video",
  selectedDate: "2026-11-16",
  selectedTimeSlot: "11:00 AM AEDT",
};

export default function BookingBriefWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<WizardState>(initialWizardState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 5;

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.discipline) errs.discipline = "Please choose a project discipline.";
    }
    if (step === 2) {
      if (!formData.description.trim()) {
        errs.description = "Please tell us briefly about your story or project concept.";
      }
    }
    if (step === 4) {
      if (!formData.name.trim()) errs.name = "Full name is required.";
      if (!formData.email.trim()) {
        errs.email = "Email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Please provide a valid email address.";
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
    if (validateStep(currentStep)) {
      setIsCompleted(true);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-brand-black-elevated border border-brand-gold/60 p-8 sm:p-14 rounded-sm text-center space-y-6 max-w-3xl mx-auto animate-fade-in shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-brand-teal text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
            Production Brief Recorded
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-white">
            Brief Received & Slotted.
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-light max-w-lg mx-auto font-light leading-relaxed">
            Thank you, <strong className="text-brand-white">{formData.name}</strong>. Your creative brief for a <strong className="text-brand-white">{formData.discipline}</strong> project has been scheduled in our production calendar.
          </p>
        </div>

        {/* Brief Summary Receipt Card */}
        <div className="bg-brand-black/80 border border-brand-teal/40 p-6 rounded-sm text-left max-w-xl mx-auto space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-brand-teal/30 pb-2">
            <span className="text-brand-gray">DISCIPLINE:</span>
            <span className="text-brand-white">{formData.discipline}</span>
          </div>
          <div className="flex justify-between border-b border-brand-teal/30 pb-2">
            <span className="text-brand-gray">ESTIMATED TIMELINE:</span>
            <span className="text-brand-white">{formData.timeline}</span>
          </div>
          <div className="flex justify-between border-b border-brand-teal/30 pb-2">
            <span className="text-brand-gray">BUDGET TIER:</span>
            <span className="text-brand-white">{formData.budget}</span>
          </div>
          <div className="flex justify-between border-b border-brand-teal/30 pb-2">
            <span className="text-brand-gray">PROVISIONAL CONSULTATION:</span>
            <span className="text-brand-gold">
              {formData.selectedDate} at {formData.selectedTimeSlot}
            </span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-brand-gray">PRODUCTION REFERENCE TOKEN:</span>
            <span className="text-brand-gray-light">#BB-BRIEF-2026-X9</span>
          </div>
        </div>

        <p className="text-xs text-brand-gray max-w-md mx-auto">
          *Your consultation request has been submitted. Our production coordinator will confirm availability via email.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-6 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
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
            className="text-xs uppercase font-mono tracking-widest text-brand-gray-light hover:text-brand-white px-4 py-3"
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
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-brand-gray-light">
          <span className="text-brand-gold">
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
        <div className="w-full h-1 bg-brand-black-elevated border border-brand-teal/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-gold transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Form Step Card */}
      <div className="bg-brand-black-elevated/70 border border-brand-teal/40 p-8 sm:p-12 rounded-sm shadow-2xl relative">
        {/* STEP 1: What are we creating? */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Phase 01 // Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                What are we creating together?
              </h2>
              <p className="text-sm text-brand-gray mt-2 font-light">
                Select the primary production discipline that best matches your project&apos;s ambition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: "Documentary & Film",
                  desc: "Authentic non-fiction, cultural narratives, human-centred stories, or festival shorts.",
                  icon: Film,
                },
                {
                  id: "Music Video Production",
                  desc: "Visually expressive, rhythmic artist collaborations, and concept performance films.",
                  icon: Music,
                },
                {
                  id: "Corporate Video",
                  desc: "Executive vision, investor pitch cinema, sustainability profiles, or internal culture.",
                  icon: Briefcase,
                },
                {
                  id: "Brand & Commercial Cinema",
                  desc: "High-craft campaign films, product aesthetics, TVC releases, and digital narratives.",
                  icon: Sparkles,
                },
                {
                  id: "Something Else / Hybrid",
                  desc: "Experimental installations, architectural studies, or multi-format visual arts.",
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
                        ? "border-brand-gold bg-brand-teal/40 shadow-md ring-1 ring-brand-gold/60"
                        : "border-brand-teal/40 bg-brand-black/50 hover:border-brand-gold/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <item.icon
                        className={`w-5 h-5 ${isSelected ? "text-brand-gold" : "text-brand-gray"}`}
                      />
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      )}
                    </div>
                    <span className="font-display font-medium text-base text-brand-white block">
                      {item.id}
                    </span>
                    <p className="text-xs text-brand-gray mt-2 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>
            {errors.discipline && (
              <p className="text-xs text-red-400 font-mono">{errors.discipline}</p>
            )}
          </div>
        )}

        {/* STEP 2: Tell us your story */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Phase 02 // Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                Tell us your story.
              </h2>
              <p className="text-sm text-brand-gray mt-2 font-light">
                Give us the emotional and narrative heartbeat of what you want viewers to feel.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                Project Concept & Logline <span className="text-brand-gold">*</span>
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="What is the story, subject matter, or song about? What makes it unique?"
                className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-4 rounded-sm text-sm text-brand-white placeholder-brand-gray/60 focus:outline-none"
              />
              {errors.description && (
                <p className="text-xs text-red-400 font-mono">{errors.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="goals" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Creative Ambition / Core Objective
                </label>
                <input
                  id="goals"
                  type="text"
                  value={formData.creativeGoals}
                  onChange={(e) => setFormData({ ...formData, creativeGoals: e.target.value })}
                  placeholder="e.g. Festival premiere, viral music release, Series-B fundraise"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white placeholder-brand-gray/60 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="audience" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Intended Audience
                </label>
                <input
                  id="audience"
                  type="text"
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  placeholder="e.g. Australian music fans, enterprise buyers, cultural patrons"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white placeholder-brand-gray/60 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="refs" className="block text-xs font-mono uppercase tracking-wider text-brand-gray-light">
                Reference Links / Visual Moodboards (Optional)
              </label>
              <input
                id="refs"
                type="text"
                value={formData.referenceLinks}
                onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
                placeholder="Vimeo, YouTube, or Pinterest links that evoke the mood you envision..."
                className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white placeholder-brand-gray/60 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Logistics & Scope */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Phase 03 // Logistics
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                Project details & practical parameters.
              </h2>
              <p className="text-sm text-brand-gray mt-2 font-light">
                Clarifying timeline, geographical parameters, and realistic production resources.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Target Timeline / Delivery Deadline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                >
                  <option value="1-4 weeks">Urgent / Within 1 month</option>
                  <option value="1-3 months">Within 1–3 months</option>
                  <option value="3-6 months">3–6 months</option>
                  <option value="6+ months">Flexible / Later this year</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Intended Filming Location(s)
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Melbourne VIC, Sydney NSW, Remote Outback, Studio"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                Anticipated Budget Range (AUD)
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
              >
                <option value="$15,000 – $25,000 AUD">$15,000 – $25,000 AUD (Focused Boutique Shoot)</option>
                <option value="$25,000 – $50,000 AUD">$25,000 – $50,000 AUD (Standard Cinema Package)</option>
                <option value="$50,000 – $100,000 AUD">$50,000 – $100,000 AUD (Multi-Day Full Scale Production)</option>
                <option value="$100,000+ AUD">$100,000+ AUD (Flagship Commercial or Festival Master)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="special" className="block text-xs font-mono uppercase tracking-wider text-brand-gray-light">
                Special Requirements (Drone, Underwater, Stunts, High-Speed, etc.)
              </label>
              <textarea
                id="special"
                rows={3}
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                placeholder="Any technical stunts, night shoots, licensed talent, or remote permits needed..."
                className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-4 rounded-sm text-sm text-brand-white placeholder-brand-gray/60 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Your Details */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Phase 04 // Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                Who are we speaking with?
              </h2>
              <p className="text-sm text-brand-gray mt-2 font-light">
                Your direct contact details so our creative team can follow up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="step4-name" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Your Full Name <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="step4-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Harrison Vance"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                />
                {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="step4-email" className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                  Email Address <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="step4-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="h.vance@company.com.au"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                />
                {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="step4-company" className="block text-xs font-mono uppercase tracking-wider text-brand-gray-light">
                  Company / Record Label / Organization
                </label>
                <input
                  id="step4-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Modular Sound / Independent"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="step4-phone" className="block text-xs font-mono uppercase tracking-wider text-brand-gray-light">
                  Telephone (Optional)
                </label>
                <input
                  id="step4-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+61 400 000 000"
                  className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-3.5 rounded-sm text-sm text-brand-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Consultation Preference & Interactive Calendar Preview */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-2">
                Phase 05 // Discovery Session
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                Schedule a Creative Discovery Session.
              </h2>
              <p className="text-sm text-brand-gray mt-2 font-light">
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
                      ? "border-brand-gold bg-brand-teal/50 ring-1 ring-brand-gold"
                      : "border-brand-teal/40 bg-brand-black/60 hover:border-brand-gold/40"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-white block">
                    {opt.label}
                  </span>
                  <p className="text-[11px] text-brand-gray mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            {/* Frontend Demo Calendar & Slot Picker */}
            <div className="bg-brand-black border border-brand-teal/50 p-6 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-teal/30">
                <div className="flex items-center space-x-2 text-brand-gold">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Provisional Discovery Call Slot Picker
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-gray uppercase">
                  Timezone: AEDT (Melbourne / Sydney)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono text-brand-gray-light block mb-2">
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
                                ? "bg-brand-gold text-brand-black font-semibold border-brand-gold"
                                : "bg-brand-black-elevated border-brand-teal/40 text-brand-white hover:border-brand-gold/50"
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
                  <span className="text-xs font-mono text-brand-gray-light block mb-2">
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
                                ? "bg-brand-gold text-brand-black font-semibold border-brand-gold"
                                : "bg-brand-black-elevated border-brand-teal/40 text-brand-white hover:border-brand-gold/50"
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

              <div className="text-[11px] font-mono text-brand-gray pt-2 border-t border-brand-teal/20">
                *All consultation calls are conducted via video link with our Melbourne & Sydney creative directors.
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls (Back & Next / Submit) */}
        <div className="mt-10 pt-6 border-t border-brand-teal/30 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider text-brand-gray hover:text-brand-white py-2 px-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
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
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-md"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-brand-black px-8 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-xl"
            >
              <span>Submit Creative Brief</span>
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

