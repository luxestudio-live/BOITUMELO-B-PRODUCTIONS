export interface MockEnquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  budget: string;
  timeline: string;
  date: string;
  status: "New" | "In Review" | "Consultation Scheduled" | "Archived";
  message: string;
  type?: "contact" | "booking-brief";
  location?: string;
  preferredContact?: string;
  briefDetails?: {
    creativeGoals?: string;
    audience?: string;
    referenceLinks?: string;
    specialRequirements?: string;
    consultationType?: string;
    selectedDate?: string;
    selectedTimeSlot?: string;
  };
}

export interface MockMediaItem {
  id: string;
  title: string;
  category: "Film Poster" | "BTS" | "Showreel" | "Stills";
  format: "PNG" | "JPEG" | "MP4";
  size: string;
  resolution: string;
  uploadedAt: string;
  thumbnail: string;
}

export const mockAdminStats = {
  totalProjects: 8,
  featuredProjects: 5,
  publishedFilms: 8,
  pendingEnquiries: 4,
  activeConsultations: 2,
  mediaAssetsCount: 42,
  lastUpdated: "Today at 18:45 AEDT",
};

export const initialMockEnquiries: MockEnquiry[] = [
  {
    id: "enq-101",
    name: "Charlotte Hayes",
    email: "c.hayes@soundscape-label.com.au",
    company: "Soundscape Records",
    service: "Music Video Production",
    budget: "$35,000 – $50,000 AUD",
    timeline: "Q1 2025 (Shooting mid-February)",
    date: "04 Nov 2026",
    status: "New",
    message: "Seeking a 4-minute cinematic music video for an upcoming alternative indie single. Interested in nighttime rural locations with practical fire and anamorphic lenses.",
  },
  {
    id: "enq-102",
    name: "Dr. Alistair Ross",
    email: "aross@oceanic-conservation.org",
    company: "Oceanic Habitat Trust",
    service: "Documentary & Film",
    budget: "$75,000 – $100,000 AUD",
    timeline: "Autumn 2025",
    date: "02 Nov 2026",
    status: "In Review",
    message: "Looking for a dedicated documentary crew to capture kelp forest restoration along Tasmania's East Coast over 3 seasonal cycles.",
  },
  {
    id: "enq-103",
    name: "Sophie Zhang",
    email: "sophie@solaris-mobility.com",
    company: "Solaris Automotive Group",
    service: "Brand & Commercial Films",
    budget: "$120,000+ AUD",
    timeline: "Immediate (January Launch)",
    date: "28 Oct 2026",
    status: "Consultation Scheduled",
    message: "Follow-up campaign to our successful 2024 launch film. Planning a series of 3 short vignettes emphasizing vehicle craftsmanship and interior ergonomics.",
  },
  {
    id: "enq-104",
    name: "Marcus Vance",
    email: "m.vance@vanguard-robotics.com",
    company: "Vanguard Robotics",
    service: "Corporate Video",
    budget: "$25,000 – $40,000 AUD",
    timeline: "December 2026",
    date: "24 Oct 2026",
    status: "Archived",
    message: "End-of-year investor impact highlight video summarizing international offshore field deployments.",
  },
];

export const initialMockMedia: MockMediaItem[] = [
  {
    id: "med-1",
    title: "Pegasuz — Intoxicated (Official Music Video)",
    category: "Showreel",
    format: "MP4",
    size: "108.8 MB",
    resolution: "1920 x 1080",
    uploadedAt: "17 Nov 2026",
    thumbnail: "/images/posters/hero-showreel.png",
  },
  {
    id: "med-2",
    title: "Andrew — Official Music Video",
    category: "Showreel",
    format: "MP4",
    size: "121.4 MB",
    resolution: "1920 x 1080",
    uploadedAt: "17 Nov 2026",
    thumbnail: "/images/posters/andrews-music-video.png",
  },
  {
    id: "med-3",
    title: "Bonolo's Birthday Celebration — Bridgerton Vibe",
    category: "Showreel",
    format: "MP4",
    size: "479.7 MB",
    resolution: "1920 x 1080",
    uploadedAt: "17 Nov 2026",
    thumbnail: "/images/posters/bonolo-vineyard-celebration.png",
  },
  {
    id: "med-4",
    title: "Threshold — Short Film",
    category: "Showreel",
    format: "MP4",
    size: "161.9 MB",
    resolution: "1920 x 1080",
    uploadedAt: "17 Nov 2026",
    thumbnail: "/images/posters/commercial-facility-showcase.png",
  },
  {
    id: "med-5",
    title: "Mama Veronica — Seven Decades of Grace",
    category: "Showreel",
    format: "MP4",
    size: "201.9 MB",
    resolution: "1920 x 1080",
    uploadedAt: "17 Nov 2026",
    thumbnail: "/images/posters/mama-vero-70th-gala.png",
  },
];

