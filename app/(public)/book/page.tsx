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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-brand-white tracking-[0.02em] leading-[1.02]">
            Tell Us{" "}
            <span className="text-brand-gold block sm:inline font-normal">
              Your Vision.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
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

