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
  tagline: "Stories Worth Feeling.",
  supportingCopy: "Films that move people. Visuals that move brands.",
  heroHeadline: "Stories Worth Feeling.",
  location: "Australia",
  serviceRegion: "Melbourne • Sydney • Regional Australia • Worldwide Collaborations",
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
      label: "Documentary & Film",
      href: "/services/documentary-film",
      desc: "Intimate narratives, human perspectives & authentic storytelling.",
    },
    {
      label: "Music Videos",
      href: "/services/music-videos",
      desc: "Visually expressive, rhythmic & conceptual artist collaborations.",
    },
    {
      label: "Corporate Video",
      href: "/services/corporate-video",
      desc: "Authoritative brand communications, executive insight & company culture.",
    },
    {
      label: "Brand & Commercials",
      href: "/services/brand-commercials",
      desc: "High-craft campaign films, product aesthetics & commercial cinema.",
    },
  ],
};

