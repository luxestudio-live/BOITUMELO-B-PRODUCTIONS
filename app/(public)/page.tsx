import CinematicHero from "@/components/cinematic/CinematicHero";
import HorizontalFilmstrip from "@/components/cinematic/HorizontalFilmstrip";
import StudioStatement from "@/components/cinematic/StudioStatement";
import ProjectTakeover from "@/components/cinematic/ProjectTakeover";
import InteractiveServices from "@/components/cinematic/InteractiveServices";
import BehindTheFrame from "@/components/cinematic/BehindTheFrame";
import CinematicTestimonials from "@/components/cinematic/CinematicTestimonials";
import FinalFrameCTA from "@/components/cinematic/FinalFrameCTA";

export const metadata = {
  title: "BOITUMELO B PRODUCTIONS | Cinematic Film & Video Australia",
  description:
    "An Australian creative film and video production house specialising in cinematic documentary filmmaking, visionary music videos, corporate narratives, and commercial cinema. Stories worth feeling.",
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-black text-brand-white">
      {/* SCENE 01 & SCENE 02: The Opening Frame & The Frame Breaks Open */}
      <CinematicHero />

      {/* SCENE 03: The Cinematic Horizontal Filmstrip */}
      <HorizontalFilmstrip />

      {/* SCENE 04: The Studio Statement (Progressive Typographic Reveal) */}
      <StudioStatement />

      {/* SCENE 05: Featured Project Takeover (The Last Echo) */}
      <ProjectTakeover />

      {/* SCENE 06: Services in Motion (Interactive Editorial Roster & Live Monitor) */}
      <InteractiveServices />

      {/* SCENE 07: Behind the Frame (Production Philosophy & Archival Stills) */}
      <BehindTheFrame />

      {/* SCENE 08: Client Voices (Cinematic Quotation Theatre) */}
      <CinematicTestimonials />

      {/* SCENE 09: The Final Frame (Concluding Composition & CTA) */}
      <FinalFrameCTA />
    </div>
  );
}
