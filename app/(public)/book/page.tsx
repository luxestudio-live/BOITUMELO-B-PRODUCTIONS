import EditorialHeading from "@/components/public/EditorialHeading";
import BookingBriefWizard from "@/components/public/BookingBriefWizard";

export const metadata = {
  title: "Start a Project | Creative Brief & Discovery",
  description:
    "Structure your cinematic production brief in five intuitive steps for BOITUMELO B PRODUCTIONS.",
};

export default function BookPage() {
  return (
    <div className="pt-32 pb-24 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-gold flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>Interactive Project Commissioning</span>
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-tight leading-[1.02]">
            Tell Us{" "}
            <span className="font-serif italic font-normal text-brand-gold block sm:inline">
              Your Vision.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray-light font-light leading-relaxed max-w-2xl">
            A collaborative creative brief builder designed to help us understand your narrative ambition, aesthetic references, timeline, and production scope.
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

