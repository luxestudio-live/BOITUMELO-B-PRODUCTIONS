"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "documentary-film",
    description: "",
    timeline: "within-3-months",
    budget: "$25,000 - $50,000 AUD",
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
        <div className="p-4 bg-white border border-brand-teal/20 rounded-sm max-w-sm mx-auto text-xs font-mono text-brand-gold font-semibold">
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
              service: "documentary-film",
              description: "",
              timeline: "within-3-months",
              budget: "$25,000 - $50,000 AUD",
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
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={120}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Marcus Thorne"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-brand-teal/40 focus:outline-none transition-colors"
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
            Email Address <span className="text-brand-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={160}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="m.thorne@example.com.au"
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-brand-teal/40 focus:outline-none transition-colors"
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
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-brand-teal/40 focus:outline-none transition-colors"
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
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-4 py-3 rounded-sm text-base sm:text-sm text-brand-teal placeholder-brand-teal/40 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Service Interested In */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
            Production Discipline
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-3 py-3 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none transition-colors"
          >
            <option value="documentary-film">Documentary & Film</option>
            <option value="music-videos">Music Video Production</option>
            <option value="corporate-video">Corporate Video</option>
            <option value="brand-commercials">Brand & Commercial Cinema</option>
            <option value="other">Other Visual Narrative</option>
          </select>
        </div>

        {/* Approximate Timeline */}
        <div className="space-y-2">
          <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-3 py-3 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none transition-colors"
          >
            <option value="immediate">Immediate (1-4 weeks)</option>
            <option value="within-3-months">Within 1-3 months</option>
            <option value="within-6-months">3-6 months</option>
            <option value="exploratory">Exploratory / Planning Stage</option>
          </select>
        </div>

        {/* Budget Guidance */}
        <div className="space-y-2">
          <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
            Budget Range (AUD)
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white px-3 py-3 rounded-sm text-base sm:text-sm text-brand-teal focus:outline-none transition-colors"
          >
            <option value="$15k-$25k">$15,000 – $25,000 AUD</option>
            <option value="$25k-$50k">$25,000 – $50,000 AUD</option>
            <option value="$50k-$100k">$50,000 – $100,000 AUD</option>
            <option value="$100k+">$100,000+ AUD</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium">
          Tell Us About Your Project <span className="text-brand-gold">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          required
          maxLength={2500}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your story, intended audience, references, or key deliverables..."
          className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold focus:bg-white p-4 rounded-sm text-base sm:text-sm text-brand-teal placeholder-brand-teal/40 focus:outline-none transition-colors"
        />
        {errors.description && (
          <p role="alert" aria-live="polite" className="text-xs text-red-600 flex items-center space-x-1 font-mono">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.description}</span>
          </p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div className="space-y-2">
        <span className="block text-xs font-mono uppercase tracking-wider text-brand-teal/80 font-medium">
          Preferred Contact Method:
        </span>
        <div className="flex items-center space-x-6 text-sm text-brand-teal">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={formData.preferredContact === "email"}
              onChange={() => setFormData({ ...formData, preferredContact: "email" })}
              className="accent-brand-gold"
            />
            <span>Email</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={formData.preferredContact === "phone"}
              onChange={() => setFormData({ ...formData, preferredContact: "phone" })}
              className="accent-brand-gold"
            />
            <span>Phone Call</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="video"
              checked={formData.preferredContact === "video"}
              onChange={() => setFormData({ ...formData, preferredContact: "video" })}
              className="accent-brand-gold"
            />
            <span>Video Consultation</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium bg-brand-gold text-white px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-all disabled:opacity-60 shadow-xl"
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
        <span className="block text-xs font-mono text-brand-teal/70 mt-3">
          *Every enquiry is reviewed directly by our directors in Melbourne & Sydney. We never share your details.
        </span>
      </div>
    </form>
  );
}

