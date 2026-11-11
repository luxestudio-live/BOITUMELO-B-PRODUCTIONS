export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroHeadline: string;
  introNarrative: string;
  answerNugget?: string;
  visualDirection: {
    title: string;
    description: string;
    aestheticTokens: string[];
  };
  capabilities: {
    name: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  heroImage: string;
  videoPreviewUrl: string;
  relatedProjectSlugs: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "business-videos": {
    slug: "business-videos",
    number: "01",
    title: "Business Videos",
    shortTitle: "Business Videos",
    tagline: "Create better business content without having to handle the filming and editing yourself.",
    heroHeadline: "Create better business content",
    introNarrative:
      "You need content that looks professional. If recording, editing and creating videos yourself is taking too much time, you can bring in a videographer to handle the work. Business videos are for customers who need help creating professional video content. You may already know what you want to say. You may simply need someone to film and edit it properly. You may also be struggling with marketing and not having enough good-quality content to use.",
    answerNugget:
      "Business Videos are created through a process of project briefing, pre-production, filming and editing. The business is based in Northern Adelaide, South Australia, and focuses on helping customers create professional video content when recording, editing and producing content themselves is difficult.",
    visualDirection: {
      title: "Clean, Credible & Professional",
      description:
        "Balanced natural lighting, crisp speech audio, stable framing, and clean editing designed to establish commercial authority and trust.",
      aestheticTokens: [
        "Crisp Audio",
        "Natural Light",
        "Clear Framing",
        "Professional Grade",
        "One Revision Included",
      ],
    },
    capabilities: [
      {
        name: "Promotional & Marketing Videos",
        description:
          "High-clarity video content showcasing your brand, products, services and client value proposition.",
      },
      {
        name: "Social Media & Advertising Content",
        description:
          "Engaging video clips formatted for digital platforms to help solve content shortages and marketing bottlenecks.",
      },
      {
        name: "Company Culture & Team Overviews",
        description:
          "Showcase your facilities, team members, process, and values to build confidence with prospective clients.",
      },
      {
        name: "Customer Stories & Testimonials",
        description:
          "Capture authentic client satisfaction and case studies with clear, professional sound and visuals.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Book and brief",
        description:
          "Book a consultation to discuss your project, expectations, planning, payments, filming, editing and revisions.",
      },
      {
        step: "02",
        title: "Prepare and film",
        description:
          "Send your brief and pre-production information, then filming takes place according to the agreed plan.",
      },
      {
        step: "03",
        title: "Edit and deliver",
        description:
          "The footage is edited and polished, then you receive the video for the usual one revision before final delivery.",
      },
    ],
    faqs: [
      {
        question: "Are business videos right for you?",
        answer:
          "Business videos are for customers who need help creating professional video content. You may already know what you want to say. You may simply need someone to film and edit it properly. You may also be struggling with marketing and not having enough good-quality content to use.",
      },
      {
        question: "What if I do not know what to film?",
        answer:
          "Start with the conversation. The project brief gives you a chance to explain what you need before filming begins. Planning helps establish the foundations before the camera comes out.",
      },
      {
        question: "Why should the video be planned first?",
        answer:
          "Because editing cannot fix everything. If important footage is missing or the footage does not work, editing cannot simply create what was never captured. Good planning helps reduce that risk.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    relatedProjectSlugs: ["vanguard-quantum", "lumina-architects"],
  },
  "real-estate-videos": {
    slug: "real-estate-videos",
    number: "02",
    title: "Real Estate Videos",
    shortTitle: "Real Estate",
    tagline: "Show the property clearly with planned walkthroughs and architectural video.",
    heroHeadline: "Show the property clearly",
    introNarrative:
      "A property needs video that shows what is there. Real estate is one of the project types identified as part of our video work. The confirmed process includes gathering your project information, preparing for the shoot, filming the required footage, editing it and making a revision before delivery.",
    answerNugget:
      "Real estate is one of the video categories identified in the business interview. Video projects follow a briefing, pre-production, filming and editing process, with the usual workflow including at least one revision before the finished video is delivered.",
    visualDirection: {
      title: "Bright, Accurate & Architectural",
      description:
        "Balanced exposure between indoor and outdoor light, level vertical lines, and smooth fluid camera movement that accurately portrays spatial dimensions.",
      aestheticTokens: [
        "Balanced Light",
        "Smooth Movement",
        "Architectural Framing",
        "Accurate Colour",
        "Clear Presentation",
      ],
    },
    capabilities: [
      {
        name: "Property Walkthroughs",
        description:
          "Fluid, steady walkthroughs showing room layout, natural flow, spatial connectivity, and interior aesthetics.",
      },
      {
        name: "Listing & Campaign Videos",
        description:
          "Engaging video packages formatted for real estate portals, agency listings, and digital advertising.",
      },
      {
        name: "Architectural & Interior Details",
        description:
          "Focused coverage of premium finishes, custom cabinetry, bespoke fixtures, and unique architectural design elements.",
      },
      {
        name: "Pre-Production Shoot Coordination",
        description:
          "Clear shot planning and pre-shoot guidance to ensure the property is prepared before the camera arrives.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Book and brief",
        description:
          "Discuss the property, your expectations and the practical details of the project.",
      },
      {
        step: "02",
        title: "Prepare and film",
        description:
          "Gather the required information and film according to the agreed expectations.",
      },
      {
        step: "03",
        title: "Edit and deliver",
        description:
          "Edit and polish the footage, make the usual one revision and deliver the finished video.",
      },
    ],
    faqs: [
      {
        question: "What does the service include?",
        answer:
          "The confirmed process includes gathering your project information, preparing for the shoot, filming the required footage, editing it and making a revision before delivery.",
      },
      {
        question: "Why does the brief matter?",
        answer:
          "The brief gives you a chance to explain what needs to be captured before filming starts. That matters because you cannot rely on editing to fix missing or poor footage later.",
      },
      {
        question: "Who is this service for?",
        answer:
          "This service is for customers who need video for a real estate project, including property owners, agents, and developers.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    relatedProjectSlugs: ["lumina-architects", "solaris-electric"],
  },
  "events-parties": {
    slug: "events-parties",
    number: "03",
    title: "Events & Parties",
    shortTitle: "Events & Parties",
    tagline: "Capture the event and preserve the moments that matter through a clear filming process.",
    heroHeadline: "Capture the event",
    introNarrative:
      "You want to remember what happened. Events and parties are among the types of projects identified as suitable for our video services. You start with a booking and project brief covering planning, filming, editing, payments and revisions to give your project a clear foundation before filming begins.",
    answerNugget:
      "Events and parties are among the project types identified for the video service. The standard process includes a project booking, briefing, pre-production, filming, editing and a usual one-revision stage before the finished video is delivered.",
    visualDirection: {
      title: "Vibrant, Candid & Atmosphere-Driven",
      description:
        "Unobtrusive handheld and stabilised filming capturing natural interactions, venue atmosphere, milestone moments, and genuine celebrations.",
      aestheticTokens: [
        "Candid Moments",
        "Ambient Lighting",
        "Crisp Speech Audio",
        "Polished Editing",
        "Milestone Coverage",
      ],
    },
    capabilities: [
      {
        name: "Private Celebrations & Parties",
        description:
          "Discreet, candid video coverage for milestone birthdays, anniversaries, family gatherings, and private celebrations.",
      },
      {
        name: "Corporate & Community Events",
        description:
          "Professional filming of presentations, guest interactions, venue atmosphere, and key event proceedings.",
      },
      {
        name: "Highlight Video Packages",
        description:
          "Paced, music-driven highlight videos that capture the energy, emotion, and story of your gathering.",
      },
      {
        name: "Key Milestone Documentation",
        description:
          "Dedicated recording of speeches, toasts, performances, and ceremonial moments with clear audio capture.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Book and brief",
        description:
          "Book a date and discuss what you want captured and how the project will work.",
      },
      {
        step: "02",
        title: "Prepare and film",
        description:
          "Provide the required brief and information, then filming takes place according to the agreed expectations.",
      },
      {
        step: "03",
        title: "Edit and deliver",
        description:
          "The footage is edited and polished, followed by the usual one revision before final delivery.",
      },
    ],
    faqs: [
      {
        question: "What happens before filming?",
        answer:
          "You start with a booking and project brief. The discussion covers what is expected, including planning, filming, editing, payments and revisions. This gives the project a clear foundation before filming begins.",
      },
      {
        question: "What if I have something specific in mind?",
        answer:
          "Talk about it before filming. Your preferred approach, expectations and project details should be discussed during the briefing. The aim is to establish the foundation before production starts.",
      },
      {
        question: "Why does preparation matter?",
        answer:
          "Because you cannot fix everything afterwards. If something important is missed during filming, editing cannot simply create the missing footage. That is why the briefing and pre-production matter.",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    relatedProjectSlugs: ["neon-solitude", "aurora-drift"],
  },
};

// Aliases for backwards compatibility with any legacy routes or bookmarks
export const legacyServicesAlias: Record<string, string> = {
  "corporate-video": "business-videos",
  "brand-commercials": "business-videos",
  "documentary-film": "events-parties",
  "music-videos": "events-parties",
};
