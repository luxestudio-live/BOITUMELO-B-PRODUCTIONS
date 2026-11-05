import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Documentary & Film Production | BOITUMELO B PRODUCTIONS",
  description:
    "Authentic non-fiction storytelling, human-centred narratives, and cinematic documentary filmmaking across Australia.",
};

export default function DocumentaryFilmPage() {
  const service = servicesData["documentary-film"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="documentary" />;
}

