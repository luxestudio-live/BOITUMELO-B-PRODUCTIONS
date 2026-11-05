export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroHeadline: string;
  introNarrative: string;
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
  "documentary-film": {
    slug: "documentary-film",
    number: "01",
    title: "Documentary & Film Production",
    shortTitle: "Documentary & Film",
    tagline: "Authentic narratives, patient observation, and profound human connection.",
    heroHeadline: "Stories That Resonate Long After the Credits Roll.",
    introNarrative:
      "We believe non-fiction filmmaking is an act of deep listening. Rather than forcing pre-conceived scripts onto real lives, our documentary methodology allows authentic human experiences to guide the lens. From remote cultural conservation projects in central Australia to intimate biographical profiles, we craft cinematic long-form and short-form films with immense emotional resonance and cinematic reverence.",
    visualDirection: {
      title: "Human-Centred & Contemplative",
      description:
        "Naturalistic lighting, 2.39:1 anamorphic framing, organic film grain, and patient compositions that honour the subject's environment without invasive production footprints.",
      aestheticTokens: ["Anamorphic Glass", "Natural Light First", "Rich Earthy Ochres", "Intimate Close-ups", "Acoustic Ambience"],
    },
    capabilities: [
      {
        name: "Feature & Short Documentaries",
        description: "Full-lifecycle film production from research and field access to festival distribution deliverables.",
      },
      {
        name: "Cultural & Heritage Archiving",
        description: "Culturally sensitive fieldwork developed in respectful consultation with community elders and custodians.",
      },
      {
        name: "Impact & Social Advocacy Films",
        description: "Narratives engineered to provoke empathy, policy discussions, and grassroots community mobilisation.",
      },
      {
        name: "Biographical & Artist Profiles",
        description: "Intimate character portraits that unearth the creative philosophy and personal stakes of innovators.",
      },
      {
        name: "Festival Master Deliverables",
        description: "DCP packaging, 5.1 surround sound mastering, HDR colour management, and international exhibition deliveries.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Immersion & Trust",
        description: "We spend time with subjects without cameras, establishing mutual trust, ethical boundaries, and narrative focus.",
      },
      {
        step: "02",
        title: "Field Exploration",
        description: "Small-footprint cinema cameras capture unfolding reality with minimal disruption and maximum intimacy.",
      },
      {
        step: "03",
        title: "Sculpting the Edit",
        description: "Hundreds of hours of vérité footage are carved into a rhythmic, emotionally compelling narrative arc.",
      },
      {
        step: "04",
        title: "Sound & Colour Alchemy",
        description: "Bespoke acoustic scores, ambisonic field recordings, and 35mm film emulation grading bring final cinematic majesty.",
      },
    ],
    faqs: [
      {
        question: "How long does a documentary production typically take?",
        answer: "Timelines vary depending on access and subject scope. Short doc profiles typically run 4–8 weeks, while long-form or festival shorts span 3–9 months to capture seasonal shifts and authentic life developments.",
      },
      {
        question: "How do you handle sensitive cultural or personal topics?",
        answer: "We adhere strictly to collaborative ethical protocols. Subjects retain narrative dignity, cultural advisory permissions are honoured throughout, and rough cuts are reviewed collaboratively before public release.",
      },
      {
        question: "Do you travel to remote Australian locations?",
        answer: "Yes. Our team is fully equipped with self-sufficient off-grid solar power packs, 4WD remote logistics, satellite communication, and climate-hardened cinema gear designed for remote Australian conditions.",
      },
      {
        question: "Can you assist with film festival submissions and deliverables?",
        answer: "Absolutely. We supply certified DCI compliant DCP masters, ProRes 4444 archival packages, closed captions, M&E audio stems, and festival promotional collateral.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    relatedProjectSlugs: ["the-last-echo", "red-dirt-whispers"],
  },
  "music-videos": {
    slug: "music-videos",
    number: "02",
    title: "Music Video Production",
    shortTitle: "Music Videos",
    tagline: "Bold visual poetry, visceral rhythm, and boundary-pushing artistic collaboration.",
    heroHeadline: "Visuals That Magnify the Soul of the Sound.",
    introNarrative:
      "A great music video does not merely visualise lyrics; it expands an artist's conceptual mythology. We collaborate closely with solo acts, bands, and record labels to translate sonic frequency into arresting visual metaphors. Combining inventive optical camera effects, precision choreography, dynamic lighting installations, and editorial rhythm, our music films are engineered to capture cultural attention and live forever in the audience's mind.",
    visualDirection: {
      title: "Kinetic, Expressive & Tactile",
      description:
        "High-energy contrast, saturated twilight pools, optical prism distortions, choreographed movement, and intentional speed-ramping calibrated to sonic transients.",
      aestheticTokens: ["DMX Lighting Sync", "Prism Halos", "Subterranean Noir", "Kinetic Camera Flow", "Optical Grain"],
    },
    capabilities: [
      {
        name: "Concept Conception & Treatment Design",
        description: "Visionary visual treatments, narrative worldbuilding, and mood decks tailored to artist brand identity.",
      },
      {
        name: "Performance & Conceptual Music Films",
        description: "From raw subterranean live performances to elaborate, multi-location narrative short films.",
      },
      {
        name: "DMX Lighting Installation & Sync",
        description: "Programmable light arrays and kinetic rigs locked directly to audio transients and MIDI tracks.",
      },
      {
        name: "Artist Visual Identity & Teaser Assets",
        description: "Vertical cutdowns for social ecosystems, album artwork frames, animated vinyl loops, and canvas videos.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sonic Analysis & Treatment",
        description: "We break down the stems, lyrics, and emotional tone of the track to draft a tailored creative treatment.",
      },
      {
        step: "02",
        title: "Visual Architecture",
        description: "Location scouting, set construction, DMX pre-visualisation, styling, and choreography rehearsals.",
      },
      {
        step: "03",
        title: "High-Energy Shoot",
        description: "High-intensity multi-camera setups, specialised camera rigs, and high frame rates for butter-smooth slow-motion.",
      },
      {
        step: "04",
        title: "Rhythmic Edit & Grade",
        description: "Frame-accurate editing locked to tempo, aggressive custom film LUTs, and optical VFX polishing.",
      },
    ],
    faqs: [
      {
        question: "How involved is the artist in the creative concept?",
        answer: "As much as you desire. We can pitch full turnkey creative treatments from scratch or build directly upon the artist's existing vision, moodboard, and aesthetic references.",
      },
      {
        question: "What budgets do you work with for music videos?",
        answer: "We design creative concepts around realistic resource parameters—from punchy single-location stylized performance pieces to larger-scale multi-set narrative productions.",
      },
      {
        question: "Do you provide promotional cutdowns for TikTok, Instagram Reels, and YouTube Shorts?",
        answer: "Yes, every music video package includes bespoke vertical cutdowns, high-impact teaser trailers, and loopable Spotify Canvas assets.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    relatedProjectSlugs: ["neon-solitude", "aurora-drift"],
  },
  "corporate-video": {
    slug: "corporate-video",
    number: "03",
    title: "Corporate Video Production",
    shortTitle: "Corporate Video",
    tagline: "Sophisticated brand storytelling, executive insight, and high-trust communications.",
    heroHeadline: "Elevate Your Corporate Narrative Beyond the Predictable.",
    introNarrative:
      "Modern audiences immediately tune out predictable corporate talking heads and stock video montages. We bring cinematic documentary craftsmanship to business communications. By treating founders, engineers, and employees as genuine human characters with purpose and passion, we produce films that build unshakeable credibility, galvanize internal teams, and convince institutional investors and enterprise clients.",
    visualDirection: {
      title: "Architectural Precision & Editorial Clarity",
      description:
        "Clean geometric framing, balanced natural-light interiors, subtle camera motion, and authoritative typography overlays.",
      aestheticTokens: ["Architectural Symmetry", "Deep Contrast", "Warm Titanium Highlights", "Crisp Sound Design"],
    },
    capabilities: [
      {
        name: "Executive & Founder Profiles",
        description: "Cinematic interviews that convey authentic vision, strategic depth, and personal integrity.",
      },
      {
        name: "Investor & Capital Raise Films",
        description: "High-stakes pitch films that distill complex technical value propositions into unforgettable clarity.",
      },
      {
        name: "Culture & Talent Recruitment",
        description: "Films showcasing the genuine energy, collaboration, and human culture that attracts top tier candidates.",
      },
      {
        name: "ESG & Sustainability Reporting",
        description: "Compelling documentation of environmental stewardship and social responsibility initiatives in action.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Strategic Discovery",
        description: "We analyze your business objectives, target audience mindset, and core commercial thesis.",
      },
      {
        step: "02",
        title: "Interview Coaching & Prep",
        description: "We prepare participants to speak conversationally and with genuine conviction without memorized scripts.",
      },
      {
        step: "03",
        title: "Zero-Interruption Production",
        description: "Efficient, respectful crew protocols that capture workplace reality without stalling corporate operations.",
      },
      {
        step: "04",
        title: "Refined Post-Production",
        description: "Rapid editorial turnaround, corporate brand token adherence, subtitle localization, and multi-format exports.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure our executives appear natural on camera?",
        answer: "We never use teleprompters or force robotic scripts. Our conversational interview method puts leaders at ease, capturing spontaneous eloquence, passion, and genuine confidence.",
      },
      {
        question: "Can you film across multiple office locations or industrial sites?",
        answer: "Yes, we regularly coordinate multi-state shoots across capital cities and regional industrial hubs with full safety gear (PPE) and site-induction compliance.",
      },
      {
        question: "What is your typical turnaround time for corporate films?",
        answer: "Standard turnaround from final shoot day to first cut is typically 7–10 business days, with accelerated rush delivery available for time-sensitive announcements.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    relatedProjectSlugs: ["vanguard-quantum", "lumina-architects"],
  },
  "brand-commercials": {
    slug: "brand-commercials",
    number: "04",
    title: "Brand & Commercial Films",
    shortTitle: "Brand & Commercials",
    tagline: "High-concept visual cinema, tactile product aesthetics, and emotional commercial impact.",
    heroHeadline: "Commercials Conceived as Cinematic Cinema.",
    introNarrative:
      "In a crowded digital landscape, consumers do not remember specifications—they remember how a brand made them feel. Our commercial productions bridge the gap between high-end feature film aesthetics and commercially rigorous marketing objectives. We build sensory worlds around your product, capturing light, texture, and human aspiration in a way that creates immediate desire and lasting brand equity.",
    visualDirection: {
      title: "Sculpted Light & Premium Textures",
      description:
        "High-art direction, rich colour palettes, purposeful macro cinematography, and bespoke sound design that elevates products into icons.",
      aestheticTokens: ["Sculpted Lighting", "Macro Textures", "Deep Teal & Warm Gold", "Atmospheric Haze", "Dynamic Ratios"],
    },
    capabilities: [
      {
        name: "Hero Campaign Films (TVC & Online)",
        description: "Flagship commercial anthems crafted for cinema screens, national broadcast, and prime digital placements.",
      },
      {
        name: "Sensory Product Cinema",
        description: "Tactile macro cinematography exploring materials, engineering craft, liquids, and luxury textures.",
      },
      {
        name: "Lifestyle & Brand Worlds",
        description: "Aspirational narrative vignettes depicting your target audience thriving within your brand's universe.",
      },
      {
        name: "Omnichannel Campaign Packs",
        description: "Complete asset suites: 60s, 30s, 15s, and 6s cutdowns formatted for 16:9, 9:16, 4:5, and 1:1 platforms.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Creative Treatment & Mood",
        description: "We develop visual boards, colour studies, and director's treatments outlining the aesthetic world of the campaign.",
      },
      {
        step: "02",
        title: "Art Direction & Casting",
        description: "Curating bespoke talent, styling, prop selection, and precision location scouting across Australia.",
      },
      {
        step: "03",
        title: "Cinematic Principal Shoot",
        description: "Top-tier cinema cameras (ARRI Alexa 35 / RED V-Raptor), specialised motion rigs, and cinema-grade lighting.",
      },
      {
        step: "04",
        title: "Finishing & Colour Mastery",
        description: "Feature-film colour grading, sound mixing, motion graphics, and broadcast-compliant QA masters.",
      },
    ],
    faqs: [
      {
        question: "Can you collaborate with our existing advertising agency or in-house brand team?",
        answer: "Yes. We frequently partner with creative agencies, serving either as the dedicated production partner executing an existing storyboard, or leading creative direction collaboratively from the initial spark.",
      },
      {
        question: "Do you supply all aspect ratios for social media and outdoor screens?",
        answer: "Yes, our framing is planned during pre-production to protect vertical (9:16) and square (1:1) crops without compromising the primary cinematic 2.39:1 widescreen master.",
      },
      {
        question: "What licensing is included for actors and music?",
        answer: "We handle complete talent usage buyouts, SAG/MEAA compliance, and commercial sync licensing for original or curated musical tracks.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    relatedProjectSlugs: ["terra-nova-harvest", "solaris-electric"],
  },
};

