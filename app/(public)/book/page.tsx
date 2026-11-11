import BookingBriefWizard from "@/components/public/BookingBriefWizard";
import { Calendar, Sparkles } from "lucide-react";

export const metadata = {
  title: "Book a Video Consultation | Videographer Northern Adelaide",
  description:
    "Book a date and time to discuss your video project, expectations, planning, payments, filming, editing and revisions in Northern Adelaide.",
};

export default function BookPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16 bg-[var(--bg)] text-[var(--ink)]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--bg-soft)] rounded-[2px] border border-[var(--line)] text-xs font-mono uppercase tracking-[0.12em] text-[var(--gold-deep)]">
            <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Consultation Booking • Northern Adelaide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[var(--ink)] tracking-tight leading-[1.02]">
            Book a Project Consultation
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
            Book a date and time to discuss your project, expectations, planning,
            payments, filming, editing and revisions before filming begins.
          </p>
        </div>
      </section>

      {/* Main Wizard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingBriefWizard />
      </section>
    </div>
  );
}
