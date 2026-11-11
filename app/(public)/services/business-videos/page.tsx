import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Business Video Services Adelaide | Filming & Editing",
  description:
    "Need better business video content? Get filming and editing in Northern Adelaide with a clear brief, pre-production process and project consultation.",
};

export default function BusinessVideosPage() {
  const service = servicesData["business-videos"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="business" />;
}
