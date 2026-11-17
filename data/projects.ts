export type ProjectCategory =
  | "documentary-film"
  | "music-videos"
  | "corporate-video"
  | "brand-commercials";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  client: string;
  location: string;
  duration: string;
  aspectRatio: string;
  cameraFormat: string;
  colorGrade: string;
  heroPoster: string;
  videoPreviewUrl: string;
  fullVideoUrl: string;
  logline: string;
  synopsis: string;
  creativeChallenge: string;
  creativeDirection: string;
  productionNotes: string[];
  credits: ProjectCredit[];
  behindTheFrames: {
    caption: string;
    imageUrl: string;
    aspect?: "landscape" | "portrait";
  }[];
  featured: boolean;
  awardNote?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const sampleProjects: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "the-last-echo",
    title: "Pegasuz — Intoxicated (Official Music Video)",
    subtitle: "Atmospheric coastal music video directed and filmed by Boitumelo B Productions",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2024",
    client: "Pegasuz",
    location: "Adelaide Coast, SA",
    duration: "2m 49s",
    aspectRatio: "16:9 Cinema",
    cameraFormat: "Cinema 4K • Natural Light",
    colorGrade: "Golden Hour Warmth & Coastal Tones",
    heroPoster: "/images/posters/hero-showreel.png",
    videoPreviewUrl: "/videos/hero-showreel.mp4",
    fullVideoUrl: "/videos/hero-showreel.mp4",
    logline: "A cinematic music video exploring emotional intensity against the raw backdrop of the South Australian coast at golden hour.",
    synopsis: "Conceived as an evocative visual companion for Pegasuz's single 'Intoxicated', the music video pairs sweeping coastal horizons with intimate, expressive artist performance. Filmed on location across the Adelaide coast during twilight, the camera moves fluidly between wide atmospheric vistas and visceral portraiture to match the rhythm of the track.",
    creativeChallenge: "Balancing rapidly fading dusk light across the water while keeping the artist's performance grounded, intimate, and raw without distracting artificial fixtures.",
    creativeDirection: "Mood-driven cinematic naturalism. Rich golden hour warmth juxtaposed against deep coastal shadows and oceanic reflections.",
    productionNotes: [
      "Captured on location across the South Australian coastline during golden hour.",
      "Dual prime lens kit deployed for seamless transition between environmental landscape and tight performance portraiture.",
      "Custom DaVinci Resolve color curve developed to preserve authentic dusk sky gradations.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Editor & Colourist", name: "Boitumelo B." },
      { role: "Featured Artist", name: "Pegasuz" },
    ],
    behindTheFrames: [
      {
        caption: "Filming artist performance setups along the coastal shoreline at twilight.",
        imageUrl: "/images/posters/hero-showreel.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Music Video Production",
    quote: {
      text: "Boitumelo captured the exact emotion and cinematic atmosphere we envisioned for 'Intoxicated'. The visual quality and lighting were exceptional.",
      author: "Pegasuz",
      role: "Recording Artist",
    },
  },
  {
    id: "proj-2",
    slug: "neon-solitude",
    title: "Andrew — Neon Solitude",
    subtitle: "Atmospheric performance music video with expressive neon lighting and intimate artist focus",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2024",
    client: "Andrew",
    location: "Adelaide, SA",
    duration: "3m 07s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Prime Lenses",
    colorGrade: "Deep Violet & Cool Cyber-Noir Palette",
    heroPoster: "/images/posters/andrews-music-video.png",
    videoPreviewUrl: "/videos/andrews-music-video.mp4",
    fullVideoUrl: "/videos/andrews-music-video.mp4",
    logline: "A moody, atmospheric performance music video balancing low-key ambient neon lighting with dynamic handheld rhythm.",
    synopsis: "Filmed in an intimate setting, this official music video centres on Andrew's vocal performance enveloped by deep violet hues and low-key atmospheric lighting. Subtle camera movements and synchronized rhythmic edits follow the song's energy, creating an evocative and personal visual experience.",
    creativeChallenge: "Navigating deep low-light saturation and high-contrast ambient neon without introducing digital noise or crushing facial detail.",
    creativeDirection: "Atmospheric cyber-noir. Minimalist framing, moody saturation, and deliberate shadows that keep the emotional focus on the performer.",
    productionNotes: [
      "Rigged custom wireless ambient lighting tubes to cast soft violet and magenta washes.",
      "Handheld gimbal operator matched subtle push-ins to vocal cadences.",
      "Graded in DaVinci Resolve with film-stock emulation for rich shadow textures.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Editor & Colourist", name: "Boitumelo B." },
      { role: "Featured Artist", name: "Andrew" },
    ],
    behindTheFrames: [
      {
        caption: "Testing neon violet balance during performance takes.",
        imageUrl: "/images/posters/andrews-music-video.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Music Video Production",
    quote: {
      text: "Boitumelo gave our music video the exact moody, artistic energy we wanted. The visual style fits the music completely.",
      author: "Andrew",
      role: "Recording Artist",
    },
  },
  {
    id: "proj-3",
    slug: "bonolo-vineyard-celebration",
    title: "Bonolo — A Bridgerton Celebration",
    subtitle: "Heartfelt milestone celebration documented with family speeches, gratitude, and a Bridgerton-inspired aesthetic",
    category: "documentary-film",
    categoryLabel: "Events & Celebrations",
    year: "2026",
    client: "Bonolo & Family",
    location: "South Australia Winery Estate",
    duration: "12m 29s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Handheld & Gimbal",
    colorGrade: "Warm Sun-Drenched Naturalism",
    heroPoster: "/images/posters/bonolo-vineyard-celebration.png",
    videoPreviewUrl: "/videos/bonolo-vineyard-celebration.mp4",
    fullVideoUrl: "/videos/bonolo-vineyard-celebration.mp4",
    logline: "A heartfelt milestone celebration for Bonolo, featuring family expressions of gratitude, a charming 'Bridgerton' aesthetic, and inspiring speeches of love and faith.",
    synopsis: "The film documents a memorable birthday celebration for a young woman named Bonolo, featuring heartfelt speeches and expressions of gratitude from her family members. The event opens with appreciation for attendees who traveled through the cold to celebrate together. Bonolo warmly expresses her gratitude to her mother for planning the party—highlighting the distinctive 'Bridgerton' vibe of the gathering—and thanks her brother for his meaningful presence and dapper attire. The film captures moving speeches from loved ones: a sibling shares deep pride in Bonolo's growth over the years, praying for continued divine blessings; her mother shares immense pride in raising a daughter who has grown into a respectful, loving, caring, and supportive young woman, wishing for her to reach all her goals with unshakable confidence; and her uncle reflects on her childhood shyness, commending her inspiring transformation into a courageous young woman while affirming his enduring support and encouraging her to prioritize faith. Family members share collective wisdom, advising Bonolo to navigate future challenges by placing God first in all endeavors, culminating in a celebration toast to her new era of life.",
    creativeChallenge: "Capturing candid family reactions, toasts, and multi-speaker acoustics across indoor and outdoor reception spaces seamlessly.",
    creativeDirection: "Warm, candid, and joyous. Emphasizes genuine laughter, heartfelt family tributes, and the elegant 'Bridgerton' aesthetic of the day.",
    productionNotes: [
      "Discrete multi-mic audio capture for speeches, toasts, and personal expressions of gratitude.",
      "Dual-camera coverage capturing both speakers and Bonolo's emotional reactions simultaneously.",
      "Graded to enhance natural estate sunlight and warm interior ambient tones.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Lead Editor & Colourist", name: "Boitumelo B." },
      { role: "Audio Engineer", name: "Boitumelo B Productions" },
    ],
    behindTheFrames: [
      {
        caption: "Capturing family arrivals and celebration setups.",
        imageUrl: "/images/posters/bonolo-vineyard-celebration.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Client Celebration Production 2026",
    quote: {
      text: "Boitumelo captured all the love, prayers, and laughter of our celebration. Having these family speeches preserved on film is priceless.",
      author: "Bonolo",
      role: "Celebrant",
    },
  },
  {
    id: "proj-4",
    slug: "commercial-facility-showcase",
    title: "Threshold",
    subtitle: "An architectural narrative short film exploring stillness, space, and reflection in modern environments",
    category: "corporate-video",
    categoryLabel: "Narrative & Short Film",
    year: "2024",
    client: "Boitumelo B Productions",
    location: "Adelaide, SA",
    duration: "3m 41s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Smooth Slider & Steady Rig",
    colorGrade: "Clean Architectural High-Key Interior",
    heroPoster: "/images/posters/commercial-facility-showcase.png",
    videoPreviewUrl: "/videos/commercial-facility-showcase.mp4",
    fullVideoUrl: "/videos/commercial-facility-showcase.mp4",
    logline: "An independent narrative short film exploring human contemplation and routine within the geometric stillness of contemporary spaces.",
    synopsis: "Conceived and directed as an independent narrative short film, 'Threshold' observes character routine, introspection, and quiet tension within the clean lines of contemporary interior architecture. Paced deliberately, the film utilizes precise camera framing, steady slider motion, and atmospheric ambient sound to build subtle emotional resonance within functional modern spaces.",
    creativeChallenge: "Establishing dramatic subtext and narrative pacing without relying on heavy dialogue, using camera movement, light transitions, and spatial geometry.",
    creativeDirection: "Meditative realism. Measured linear tracking shots, architectural symmetry, and a balanced neutral color palette.",
    productionNotes: [
      "Smooth motorized slider and gimbal moves calibrated to architectural sightlines.",
      "Natural interior ambient audio mastering preserving delicate room acoustics.",
      "High-CRI daylight balanced lighting keeping interior surfaces crisp and true.",
    ],
    credits: [
      { role: "Writer & Director", name: "Boitumelo B." },
      { role: "Cinematographer", name: "Boitumelo B." },
      { role: "Editor & Sound Designer", name: "Boitumelo B." },
    ],
    behindTheFrames: [
      {
        caption: "Aligning camera tracks with interior architectural sightlines.",
        imageUrl: "/images/posters/commercial-facility-showcase.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Independent Short Film Selection 2024",
    quote: {
      text: "A compelling exercise in architectural narrative and pacing. Every shot feels intentional.",
      author: "Film Review",
      role: "Independent Cinema Forum",
    },
  },
  {
    id: "proj-5",
    slug: "mama-vero-70th-gala",
    title: "Mama Veronica — Seven Decades of Grace",
    subtitle: "A milestone 70th celebration documenting heartfelt prayer, family gratitude, and festive games",
    category: "documentary-film",
    categoryLabel: "Events & Celebrations",
    year: "2024",
    client: "The Veronica Family",
    location: "Adelaide Function Centre, SA",
    duration: "28m 54s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Ambient Low Light",
    colorGrade: "Rich Warm Amber & Gold Tablescape",
    heroPoster: "/images/posters/mama-vero-70th-gala.png",
    videoPreviewUrl: "/videos/mama-vero-70th-gala.mp4",
    fullVideoUrl: "/videos/mama-vero-70th-gala.mp4",
    logline: "A 70th milestone celebration for Veronica, honoring seven decades of grace with prayers of thanksgiving, joyful greetings, and lighthearted trivia.",
    synopsis: "The film documents a joyous 70th birthday celebration for Veronica, featuring moments of heartfelt prayer, family fellowship, and festive activities. The video begins with warm moments of celebration as participants admire the guest of honor's radiant appearance, exchange greetings, and share lighthearted interaction during event preparations and photographs. The gathering officially begins with a prayer led by a guest expressing gratitude for Veronica reaching 70 years of age, thanking God for her health, strength, and grace, while acknowledging guests who traveled from various locations to attend, thanking the organizers, and blessing the banquet food. Following the prayer, the organizers thank the attendees, and the celebration transitions into an entertaining game testing how well guests know the birthday honoree—sparking lively, humorous discussions around her preferences, including whether she prefers ketchup or mayonnaise.",
    creativeChallenge: "Documenting spontaneous multi-generational interactions and prayer reverently while maintaining clear audio amidst ambient ballroom chatter.",
    creativeDirection: "Warm, respectful, and celebratory. Focuses on Veronica's joy, sincere moments of prayer and thanksgiving, and the vibrant trivia game fellowship.",
    productionNotes: [
      "Direct soundboard audio capture combined with ambient room microphones for crystal-clear prayer recording.",
      "Low-light prime lenses utilized to maintain warm banquet ambiance without harsh camera lamps.",
      "Multi-angle coverage for both the podium prayer and guests' lighthearted game reactions.",
    ],
    credits: [
      { role: "Director & Lead Camera", name: "Boitumelo B." },
      { role: "Audio Engineer & Editor", name: "Boitumelo B." },
    ],
    behindTheFrames: [
      {
        caption: "Mama Veronica and family during the opening celebration.",
        imageUrl: "/images/posters/mama-vero-70th-gala.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Milestone Celebration Documentary",
    quote: {
      text: "Watching the prayers, greetings, and game moments brings back all the joy of that beautiful day. A wonderful family treasure.",
      author: "Mama Veronica & Family",
      role: "Guest of Honour",
    },
  },
];

