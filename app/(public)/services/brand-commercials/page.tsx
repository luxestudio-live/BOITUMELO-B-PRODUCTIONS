import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Brand & Commercial Films | BOITUMELO B PRODUCTIONS",
  description:
    "High-craft commercial cinema, sensory product storytelling, and national campaign films for discerning brands.",
};

export default function BrandCommercialsPage() {
  const service = servicesData["brand-commercials"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="commercial" />;
}

