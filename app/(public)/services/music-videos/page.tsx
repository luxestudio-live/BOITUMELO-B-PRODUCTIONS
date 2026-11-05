import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Music Video Production | BOITUMELO B PRODUCTIONS",
  description:
    "Bold, rhythmic, and visually expressive music video production for independent artists and record labels in Australia.",
};

export default function MusicVideosPage() {
  const service = servicesData["music-videos"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="music" />;
}

