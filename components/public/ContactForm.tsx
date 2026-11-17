"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import CustomSelect, { SelectOption } from "./CustomSelect";

const SERVICE_OPTIONS: SelectOption[] = [
  { value: "business-videos", label: "Business Videos", sublabel: "Filming & Editing for Local Companies" },
  { value: "real-estate-videos", label: "Real Estate Videos", sublabel: "Property & Architectural Showcases" },
  { value: "events-parties", label: "Events & Celebrations", sublabel: "Parties, Anniversaries & Gatherings" },
  { value: "documentary-film", label: "Documentary & Film", sublabel: "Cultural & Narrative Storytelling" },
  { value: "music-videos", label: "Music Videos", sublabel: "Stylised Performance Cinema" },
  { value: "brand-commercials", label: "Brand & Commercial Cinema", sublabel: "Broadcast & Digital Campaigns" },
  { value: "other", label: "Other Visual Project", sublabel: "Bespoke Production Scope" },
];

const TIMELINE_OPTIONS: SelectOption[] = [
  { value: "immediate", label: "Immediate (1–4 weeks)" },
  { value: "within-3-months", label: "Within 1–3 months" },
  { value: "within-6-months", label: "3–6 months" },
  { value: "exploratory", label: "Flexible / Planning Stage" },
];

const BUDGET_OPTIONS: SelectOption[] = [
  { value: "$15k-$25k", label: "$15,000 – $25,000 AUD" },
  { value: "$25k-$50k", label: "$25,000 – $50,000 AUD" },
  { value: "$50k-$100k", label: "$50,000 – $100,000 AUD" },
  { value: "$100k+", label: "$100,000+ AUD" },
];

const CONTACT_PREF_OPTIONS: SelectOption[] = [
  { value: "email", label: "Email (Written Brief & Estimate)" },
  { value: "phone", label: "Phone / Direct Consultation" },
  { value: "video-call", label: "Video Call (Google Meet)" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "business-videos",
    description: "",
    timeline: "within-3-months",
    budget: "$15k-$25k",
    preferredContact: "email",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address so our producers can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@organisation.com.au).";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please share a few details about your project or story concept.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#F8F9FA] border border-brand-gold/60 p-8 sm:p-12 rounded-sm text-center space-y-6 animate-fade-in shadow-md">
        <div className="w-16 h-16 rounded-full bg-brand-teal text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-medium text-brand-teal">
            Enquiry Received
          </h3>
          <p className="text-sm text-brand-teal/80 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-brand-teal font-semibold">{formData.name}</strong>. Your enquiry has been received by our production desk. Our creative producing team reviews all briefs directly and will respond within one business day.
          </p>
        </div>
        <div className="p-4 bg-white border border-brand-teal/20 rounded-sm max-w-sm mx-auto text-xs font-mono text-[var(--gold-deep)] font-semibold">
          Reference ID: #BB-{Math.floor(1000 + Math.random() * 9000)}
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              phone: "",
              service: "business-videos",
              description: "",
              timeline: "within-3-months",
              budget: "$15k-$25k",
              preferredContact: "email",
            });
          }}
          className="text-xs uppercase font-mono tracking-widest text-brand-teal/70 hover:text-brand-teal underline pt-2 inline-block"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
            Full Name <span className="text-[var(--gold-deep)]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={120}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Marcus Thorne"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-[#5A6778] focus:outline-none transition-colors"
          />
          {errors.name && (
            <p role="alert" aria-live="polite" className="text-xs text-red-600 flex items-center space-x-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
            Email Address <span className="text-[var(--gold-deep)]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={160}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="m.thorne@example.com.au"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-[#5A6778] focus:outline-none transition-colors"
          />
          {errors.email && (
            <p role="alert" aria-live="polite" className="text-xs text-red-600 flex items-center space-x-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company / Artist Name */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/80 font-medium">
            Organisation / Artist (Optional)
          </label>
          <input
            id="company"
            type="text"
            maxLength={150}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Melbourne Contemporary Arts"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-[#5A6778] focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-brand-teal/80 font-medium">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            maxLength={40}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+61 400 000 000"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-[#5A6778] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Service Interested In */}
        <CustomSelect
          id="service"
          label="Production Discipline"
          value={formData.service}
          onChange={(val) => setFormData({ ...formData, service: val })}
          options={SERVICE_OPTIONS}
        />

        {/* Approximate Timeline */}
        <CustomSelect
          id="timeline"
          label="Target Timeline"
          value={formData.timeline}
          onChange={(val) => setFormData({ ...formData, timeline: val })}
          options={TIMELINE_OPTIONS}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Budget Guidance */}
        <CustomSelect
          id="budget"
          label="Budget Range (AUD)"
          value={formData.budget}
          onChange={(val) => setFormData({ ...formData, budget: val })}
          options={BUDGET_OPTIONS}
        />

        {/* Preferred Contact Method */}
        <CustomSelect
          id="preferredContact"
          label="Preferred Contact Method"
          value={formData.preferredContact}
          onChange={(val) => setFormData({ ...formData, preferredContact: val })}
          options={CONTACT_PREF_OPTIONS}
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
          Tell Us About Your Project <span className="text-[var(--gold-deep)]">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          required
          maxLength={2500}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your story, intended audience, references, or key deliverables..."
          className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-4 rounded-sm text-base sm:text-sm text-brand-teal placeholder-[#5A6778] focus:outline-none transition-colors"
        />
        {errors.description && (
          <p role="alert" aria-live="polite" className="text-xs text-red-600 flex items-center space-x-1 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.description}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-[12px] uppercase font-mono tracking-[0.12em] font-medium bg-[var(--gold)] text-[var(--ink)] px-8 py-3.5 rounded-[2px] hover:bg-[var(--gold-light)] transition-all duration-250 ease-out disabled:opacity-60 shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Project Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <span className="block text-xs font-mono text-[var(--ink-soft)] mt-3">
          *Every enquiry is reviewed directly by our directors in Melbourne & Sydney. We never share your details.
        </span>
      </div>
    </form>
  );
}

