export interface MockEnquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  date: string;
  status: "New" | "In Review" | "Consultation Scheduled" | "Archived";
  message: string;
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
    title: "The Last Echo — Hero 2.39 Anamorphic Master",
    category: "Film Poster",
    format: "JPEG",
    size: "4.8 MB",
    resolution: "3840 x 1608",
    uploadedAt: "01 Nov 2026",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "med-2",
    title: "Neon Solitude — Transit Corridors BTS",
    category: "BTS",
    format: "JPEG",
    size: "3.2 MB",
    resolution: "2560 x 1440",
    uploadedAt: "28 Oct 2026",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "med-3",
    title: "Studio Showreel 2024 — Master 4K H.265",
    category: "Showreel",
    format: "MP4",
    size: "820 MB",
    resolution: "3840 x 2160",
    uploadedAt: "25 Oct 2026",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "med-4",
    title: "Terra Nova — Morning Mist Cellar Still",
    category: "Stills",
    format: "PNG",
    size: "6.1 MB",
    resolution: "4096 x 2160",
    uploadedAt: "19 Oct 2026",
    thumbnail: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&q=80",
  },
];

