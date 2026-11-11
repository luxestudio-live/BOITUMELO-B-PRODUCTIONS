export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalNotice: string;
  tagline: string;
  supportingCopy: string;
  heroHeadline: string;
  location: string;
  serviceRegion: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  vimeo: string;
  youtube: string;
  linkedin: string;
  navItems: NavItem[];
  servicesNav: { label: string; href: string; desc: string }[];
}

export const siteConfig: SiteConfig = {
  name: "BOITUMELO B PRODUCTIONS",
  shortName: "BOITUMELO B",
  legalNotice: "© BOITUMELO B PRODUCTIONS. All rights reserved.",
  tagline: "Professional videos. Clear process.",
  supportingCopy: "Get professional video content without having to handle the filming and editing yourself.",
  heroHeadline: "Professional videos. Clear process.",
  location: "Northern Adelaide, South Australia",
  serviceRegion: "Northern Adelaide & Surrounding Suburbs • South Australia",
  email: "collaborate@boitumelobproductions.com.au",
  phone: "+61 (0) 400 000 000",
  whatsapp: "+61400000000",
  whatsappDisplay: "+61 400 000 000",
  instagram: "https://instagram.com",
  vimeo: "https://vimeo.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  servicesNav: [
    {
      label: "Business Videos",
      href: "/services/business-videos",
      desc: "Filming and editing for businesses when creating professional content yourself is difficult.",
    },
    {
      label: "Real Estate Videos",
      href: "/services/real-estate-videos",
      desc: "Clear, high-quality property video walkthroughs and listing coverage.",
    },
    {
      label: "Events & Parties",
      href: "/services/events-parties",
      desc: "Capturing your special events, parties and milestones through a clear filming process.",
    },
  ],
};

