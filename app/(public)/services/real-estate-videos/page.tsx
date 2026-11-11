import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Real Estate Video Services Adelaide | Videography",
  description:
    "Need real estate video in Adelaide? Discuss your project, plan the shoot, film the property and receive an edited video through a clear process.",
};

export default function RealEstateVideosPage() {
  const service = servicesData["real-estate-videos"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="real-estate" />;
}
