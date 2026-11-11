import { servicesData } from "@/data/services";
import ServiceDetailView from "@/components/public/ServiceDetailView";

export const metadata = {
  title: "Event Videographer Adelaide | Party Video Services",
  description:
    "Looking for event videography in Adelaide? Plan your project, capture your event and receive an edited video through a clear filming process.",
};

export default function MusicVideosPage() {
  const service = servicesData["events-parties"];
  return <ServiceDetailView service={service} aestheticVariant="events" />;
}
