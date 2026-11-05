import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Corporate Video Production | BOITUMELO B PRODUCTIONS",
  description:
    "Authoritative corporate films, executive thought leadership, and culture storytelling with cinematic documentary craft.",
};

export default function CorporateVideoPage() {
  const service = servicesData["corporate-video"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="corporate" />;
}

