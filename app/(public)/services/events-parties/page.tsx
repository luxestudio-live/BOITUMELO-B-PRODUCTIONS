import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Event Videographer Adelaide | Party Video Services",
  description:
    "Looking for event videography in Adelaide? Plan your project, capture your event and receive an edited video through a clear filming process.",
};

export default function EventsPartiesPage() {
  const service = servicesData["events-parties"];
  if (!service) notFound();

  return <ServiceDetailView service={service} aestheticVariant="events" />;
}
