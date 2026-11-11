import CinematicHero from "@/components/cinematic/CinematicHero";
import HomeOrientationAndOptions from "@/components/cinematic/HomeOrientationAndOptions";
import HorizontalFilmstrip from "@/components/cinematic/HorizontalFilmstrip";
import StudioStatement from "@/components/cinematic/StudioStatement";
import ProjectTakeover from "@/components/cinematic/ProjectTakeover";
import InteractiveServices from "@/components/cinematic/InteractiveServices";
import BehindTheFrame from "@/components/cinematic/BehindTheFrame";
import HomeThePlan from "@/components/cinematic/HomeThePlan";
import CinematicTestimonials from "@/components/cinematic/CinematicTestimonials";
import FinalFrameCTA from "@/components/cinematic/FinalFrameCTA";

export const metadata = {
  title: "Videographer Adelaide | Professional Video Services",
  description:
    "Need a videographer in Northern Adelaide? Get professional filming and editing for business, real estate, parties and events through a clear process.",
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-white text-[var(--ink)]">
      {/* 1. HERO BANNER: Professional videos. Clear process. */}
      <CinematicHero />

      {/* 2. ANSWER NUGGET, 3. ORIENTATION PARAGRAPH & 4. JUMP-IN OPTIONS */}
      <HomeOrientationAndOptions />

      {/* SELECTED WORKS: Cinematic Horizontal Filmstrip */}
      <HorizontalFilmstrip />

      {/* MANIFESTO: Studio Statement */}
      <StudioStatement />

      {/* FEATURED PRODUCTION: The Last Echo */}
      <ProjectTakeover />

      {/* PRODUCTION DISCIPLINES: Business Videos, Real Estate, Events & Parties */}
      <InteractiveServices />

      {/* 5. WHY TRUST US: Behind the Frame & Studio Background */}
      <BehindTheFrame />

      {/* 6. THE PLAN: 1. Book and brief, 2. Prepare and film, 3. Edit and deliver */}
      <HomeThePlan />

      {/* 7. SOCIAL PROOF: Hear from customers */}
      <CinematicTestimonials />

      {/* 8. CLOSING CALL TO ACTION: Ready to make your video? */}
      <FinalFrameCTA />
    </div>
  );
}
