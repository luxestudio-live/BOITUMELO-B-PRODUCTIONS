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
    title: "The Last Echo",
    subtitle: "A meditative study of remote acoustic landscapes across the Flinders Ranges",
    category: "documentary-film",
    categoryLabel: "Documentary & Film",
    year: "2024",
    client: "South Australian Heritage Arts",
    location: "Flinders Ranges, SA",
    duration: "2m 49s",
    aspectRatio: "16:9 Cinema",
    cameraFormat: "Cinema 4K • Natural Light",
    colorGrade: "Golden Hour Warmth & Kodak Tone",
    heroPoster: "/images/posters/hero-showreel.png",
    videoPreviewUrl: "/videos/hero-showreel.mp4",
    fullVideoUrl: "/videos/hero-showreel.mp4",
    logline: "In an ancient basin older than memory, a sound archivist records the fading acoustic signatures of desert silence before industrial encroaching shifts the sonic baseline forever.",
    synopsis: "Conceived as an experiential non-fiction film, 'The Last Echo' pairs ultra-wide anamorphic desert vistas with 3D ambisonic field recordings. Rather than relying on traditional documentary voiceover, the narrative breathes through natural ambience, tactile light, and the quiet ritual of human observation in an ancient geography.",
    creativeChallenge: "Balancing extreme outdoor elements—blistering dust storms, 40°C temperature swings, and zero cellular connectivity—while capturing delicate low-light dawn sequences without invasive artificial lighting.",
    creativeDirection: "We adopted a slow-cinema cadence inspired by slow-cinema masters: static 45-second frames that allow the audience's gaze to settle, coupled with deep directional soundscapes recorded on custom-built binaural rigs.",
    productionNotes: [
      "Captured over 14 consecutive sunrises and twilights across Wilpena Pound.",
      "Custom solar-powered battery recharge bank engineered for remote backcountry treks.",
      "Dual-system audio: 8-channel ambisonic sound field mapped directly to 5.1 surround sound mastering.",
      "Graded in DaVinci Resolve utilizing a custom Kodak 2383 film density curve to preserve deep shadow detail.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Location Sound Recordist", name: "Declan Rhys" },
      { role: "Lead Editor", name: "Maeve C. Sullivan" },
      { role: "Colourist", name: "Kester Vance" },
      { role: "Sound Design & Mix", name: "Acoustic Horizon Labs" },
    ],
    behindTheFrames: [
      {
        caption: "Rigging the anamorphic camera kit at dawn along St Mary Peak ridge.",
        imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
      {
        caption: "Sound archivist monitoring 3D hydrophone recordings in a dried claypan.",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
        aspect: "portrait",
      },
      {
        caption: "Golden twilight transition frame captured on 65mm equivalent sensors.",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Official Selection — Sydney International Documentary Showcase 2024",
    quote: {
      text: "Boitumelo B Productions did not just capture our landscape; they listened to it with a reverence that translates into every frame.",
      author: "Elena Rostova",
      role: "Curatorial Director, Heritage Arts",
    },
  },
  {
    id: "proj-2",
    slug: "neon-solitude",
    title: "Andrew — Nocturne (Official Music Video)",
    subtitle: "Atmospheric visual performance and music video with expressive neon lighting",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2024",
    client: "Andrew • Modular Sound",
    location: "Adelaide, SA",
    duration: "3m 07s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Anamorphic Primes",
    colorGrade: "High Contrast Cyber-Noir Palette",
    heroPoster: "/images/posters/andrews-music-video.png",
    videoPreviewUrl: "/videos/andrews-music-video.mp4",
    fullVideoUrl: "/videos/andrews-music-video.mp4",
    logline: "A lone dancer navigates nocturnal transit corridors where rhythmic fluorescent flicker acts as a visual metronome for psychological unraveling.",
    synopsis: "Shot across two overnight lock-ins within industrial subterranean concourses in Melbourne, 'Neon Solitude' explores hyper-isolation in an ultra-connected metropolis. Synchronised DMX lighting was programmed to pulse precisely with the track's sub-bass transients, turning the concrete architecture into an instrument.",
    creativeChallenge: "Executing 4-minute complex gimbal long-takes with zero post-cuts while matching live optical speed-ramps to the artist's shifting BPM tempo.",
    creativeDirection: "A palette dominated by Deep Teal shadow pools and razor-sharp Warm Gold sodium-vapour accents. Motion is visceral: sudden whip-pans transition into feather-weight floating tracking shots.",
    productionNotes: [
      "Rigged 120 custom wireless Astera Titan tubes mapped to MIDI sequencer channels.",
      "Choreographed with leading Australian contemporary dancer Suki Chen.",
      "Zero CGI: all optical flares, prism halos, and light refractions were generated in-camera using vintage anamorphic glass.",
    ],
    credits: [
      { role: "Director & Creative Director", name: "Boitumelo B." },
      { role: "Lead Choreographer", name: "Suki Chen" },
      { role: "Director of Photography", name: "Marcus Thorne" },
      { role: "Gaffer & DMX Programmer", name: "Liam O'Connor" },
      { role: "Editor & Colourist", name: "Boitumelo B." },
    ],
    behindTheFrames: [
      {
        caption: "Live lighting programming on the transit mezzanine deck at 3:00 AM.",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
      {
        caption: "Testing optical prism distortion rings during camera rehearsal.",
        imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
        aspect: "portrait",
      },
    ],
    featured: true,
    awardNote: "Best Australian Music Video Nominee — Independent Screen Awards",
    quote: {
      text: "The music video didn't just support the song; it created an entire universe around it that listeners now live in.",
      author: "KAIRO",
      role: "Recording Artist",
    },
  },
  {
    id: "proj-3",
    slug: "bonolo-vineyard-celebration",
    title: "Bonolo 2026: Vineyard Celebration",
    subtitle: "Vibrant milestone celebration filmed amongst scenic South Australian vineyards",
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
    logline: "Laughter, toasts and heartfelt fellowship captured across an afternoon of milestone celebration under the South Australian sun.",
    synopsis: "Documenting Bonolo's 2026 milestone celebration, this film combines discreet event cinematography with vibrant coverage of friends, family, dining, and scenic winery landscapes. Every key moment was planned during pre-production to ensure natural guest interactions without intrusive equipment.",
    creativeChallenge: "Navigating direct mid-afternoon vineyard sunlight and transitioning into ambient indoor reception lighting without losing skin tone fidelity.",
    creativeDirection: "Candid, fluid, and joyous. Emphasizes genuine laughter, unforced group interactions, and the natural beauty of the estate.",
    productionNotes: [
      "Captured on dual cinema bodies with prime lenses for seamless depth of field.",
      "Discrete wireless audio lavaliers deployed for speeches and toast moments.",
      "Comprehensive color grade balancing radiant daylight with ambient cellar warmth.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Lead Editor & Colourist", name: "Boitumelo B." },
      { role: "Audio Mastering", name: "Boitumelo B Productions" },
    ],
    behindTheFrames: [
      {
        caption: "Capturing candid guest arrivals among the vineyard terrace.",
        imageUrl: "/images/posters/bonolo-vineyard-celebration.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Client Celebration Production 2026",
    quote: {
      text: "Boitumelo captured the energy and warmth of our day in a way we will cherish forever. Every important memory is right there on film.",
      author: "Bonolo",
      role: "Host & Celebrant",
    },
  },
  {
    id: "proj-4",
    slug: "commercial-facility-showcase",
    title: "Modern Workspace & Facility Showcase",
    subtitle: "Architectural interior walkthrough and modern commercial facility showcase",
    category: "corporate-video",
    categoryLabel: "Corporate & Real Estate",
    year: "2024",
    client: "Commercial Facilities Group",
    location: "Adelaide, SA",
    duration: "3m 41s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Smooth Slider & Steady Rig",
    colorGrade: "Clean Architectural High-Key Interior",
    heroPoster: "/images/posters/commercial-facility-showcase.png",
    videoPreviewUrl: "/videos/commercial-facility-showcase.mp4",
    fullVideoUrl: "/videos/commercial-facility-showcase.mp4",
    logline: "Precise architectural camera movements reveal the ergonomics, functional design, and clean finishes of a modern commercial facility.",
    synopsis: "Designed for marketing, leasing, and corporate presentation, this production delivers fluid, stabilized walkthroughs highlighting interior workspace flow, custom commercial culinary stations, and contemporary office architecture.",
    creativeChallenge: "Managing mixed artificial lighting—fluorescents, LED strips, and natural window daylight—without colour temperature banding.",
    creativeDirection: "Architectural precision. Balanced level verticals, linear motion, and clean neutral tone grading.",
    productionNotes: [
      "Smooth gimbal and motorized slider tracking shots across open floor plans.",
      "Custom high-CRI fill panels to balance interior shadows.",
      "Calibrated colour grade to maintain authentic architectural material finishes.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Camera Operator", name: "Boitumelo B." },
      { role: "Editor & Colourist", name: "Boitumelo B." },
    ],
    behindTheFrames: [
      {
        caption: "Calibrating gimbal slider balance across the main office corridor.",
        imageUrl: "/images/posters/commercial-facility-showcase.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Commercial Architectural Video Showcase 2024",
    quote: {
      text: "The walkthrough gave our prospective tenants a true sense of quality and craftsmanship. Filming and delivery were seamless.",
      author: "Samantha Vance",
      role: "Operations Director",
    },
  },
  {
    id: "proj-5",
    slug: "mama-vero-70th-gala",
    title: "Mama Vero's 70th Birthday Gala",
    subtitle: "Milestone 70th birthday celebration banquet with gold charger tablescapes, speeches and dancing",
    category: "documentary-film",
    categoryLabel: "Events & Celebrations",
    year: "2024",
    client: "The Vero Family",
    location: "Adelaide Function Centre, SA",
    duration: "28m 54s",
    aspectRatio: "16:9 Widescreen",
    cameraFormat: "Cinema 4K • Ambient Low Light",
    colorGrade: "Rich Warm Amber & Gold Tablescape",
    heroPoster: "/images/posters/mama-vero-70th-gala.png",
    videoPreviewUrl: "/videos/mama-vero-70th-gala.mp4",
    fullVideoUrl: "/videos/mama-vero-70th-gala.mp4",
    logline: "An unforgettable milestone banquet honoring seven decades of family heritage, heartfelt toasts, and celebratory dance.",
    synopsis: "Documenting Mama Vero's 70th birthday milestone gala, this film weaves together ceremonial entrances, multi-generational speeches, opulent gold-themed table décor, and exuberant celebration on the dance floor. Clear audio recording ensured every family tribute was permanently preserved.",
    creativeChallenge: "Balancing dramatic mood lighting, candlelit tablescapes, and energetic ballroom dance lighting without audio feedback or optical glare.",
    creativeDirection: "Warm, celebratory, and intimate. Focuses on family reactions, generational bonds, and celebratory energy.",
    productionNotes: [
      "Multi-camera setup capturing simultaneous speaker podium and guest reactions.",
      "Dedicated multi-track audio recorder plugged directly into the banquet venue audio board.",
      "Custom gold-tone grade matching the gala's opulent decor and ambient candlelight.",
    ],
    credits: [
      { role: "Director & Lead Camera", name: "Boitumelo B." },
      { role: "Audio Engineer & Editor", name: "Boitumelo B." },
    ],
    behindTheFrames: [
      {
        caption: "Mama Vero and guests celebrating at the head table.",
        imageUrl: "/images/posters/mama-vero-70th-gala.png",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Featured Milestone Event Production",
    quote: {
      text: "Boitumelo gave our family a treasure. Watching the film brings back all the joy and emotion of that wonderful night.",
      author: "Mama Vero & Family",
      role: "Guest of Honour",
    },
  },
  {
    id: "proj-6",
    slug: "aurora-drift",
    title: "Aurora Drift",
    subtitle: "High-octane visual concept film for Australian indie rock band VELVET PEAK",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2023",
    client: "Universal Music Australia",
    location: "Kangaroo Valley, NSW",
    duration: "3m 50s",
    aspectRatio: "2.39:1 CinemaScope",
    cameraFormat: "RED Monstro 8K • Cooke S4/i",
    colorGrade: "Deep Midnight Blue & Warm Incandescent Gold",
    heroPoster: "/images/posters/andrews-music-video.png",
    videoPreviewUrl: "/videos/andrews-music-video.mp4",
    fullVideoUrl: "/videos/andrews-music-video.mp4",
    logline: "A vintage muscle car drifts through foggy mountain switchbacks while illuminated flares transform the mountain pass into an otherworldly stage.",
    synopsis: "A visceral fusion of high-precision stunt driving, live pyrotechnics, and kinetic camera movement. The video went viral upon release, amassing over 2.4 million views in its first month and cementing Velvet Peak's international festival profile.",
    creativeChallenge: "Navigating single-lane mountain hairpins at night with coordinated chase vehicles and synchronized flare drops.",
    creativeDirection: "Electric, kinetic, and atmospheric. Fog machines mingled with mountain moisture to produce a dreamy haze caught in warm headlights.",
    productionNotes: [
      "Closed-road permits across Kangaroo Valley mountain pass secured for 3 nights.",
      "Russian arm camera chase vehicle mounted with Gyro-stabilised flight head.",
    ],
    credits: [
      { role: "Director", name: "Boitumelo B." },
      { role: "Lead Stunt Driver", name: "Cole Henderson" },
      { role: "Camera Car Operator", name: "Gareth Miller" },
    ],
    behindTheFrames: [
      {
        caption: "Rigging chase car lighting pods before the first midnight downhill run.",
        imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: false,
    quote: {
      text: "They gave our single the cinematic launch of our dreams. It launched our UK tour.",
      author: "Rhys Miller",
      role: "Lead Vocalist, Velvet Peak",
    },
  },
  {
    id: "proj-7",
    slug: "lumina-architects",
    title: "Lumina: Spaces of Light & Shadow",
    subtitle: "Architectural film documentary series profiling award-winning coastal residences",
    category: "corporate-video",
    categoryLabel: "Corporate Video",
    year: "2023",
    client: "Lumina Architecture Guild",
    location: "Mornington Peninsula, VIC",
    duration: "5m 15s",
    aspectRatio: "1.78:1 UHD",
    cameraFormat: "Sony FX6 • Leica Summicron-C",
    colorGrade: "Neutral Architectural Monolith with Subtle Cyan Shadows",
    heroPoster: "/images/posters/commercial-facility-showcase.png",
    videoPreviewUrl: "/videos/commercial-facility-showcase.mp4",
    fullVideoUrl: "/videos/commercial-facility-showcase.mp4",
    logline: "Exploring how brutalist board-formed concrete and sustainable timber harmonise with the raw Southern Ocean shoreline.",
    synopsis: "Commissioned by prestigious design studio Lumina, this architectural profile is structured around the path of natural sunlight across 24 hours. The camera mimics architectural perspective lines, utilizing custom-built mechanical sliders for imperceptibly slow, hypnotic motion.",
    creativeChallenge: "Reflecting precise material textures—raw off-form concrete, oxidised copper, and honed travertine—without clipping delicate highlights.",
    creativeDirection: "Meditative and structured. The rhythm matches the calm ocean swells just meters away.",
    productionNotes: [
      "Shot exclusively with natural lighting and minimal negative fill to honour real architectural lived experience.",
    ],
    credits: [
      { role: "Director & Cinematographer", name: "Boitumelo B." },
      { role: "Architectural Advisor", name: "Fiona Vance" },
    ],
    behindTheFrames: [
      {
        caption: "Aligning linear perspective axes with motorized micro-track sliders.",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: false,
    quote: {
      text: "A masterwork of architectural cinematography. It articulated our philosophy far better than words ever could.",
      author: "Arthur Pendelton",
      role: "Principal Architect, Lumina",
    },
  },
  {
    id: "proj-8",
    slug: "solaris-electric",
    title: "Solaris: Forward Momentum",
    subtitle: "High-end commercial release for Australia's pioneer electric hyper-cruiser",
    category: "brand-commercials",
    categoryLabel: "Brand & Commercial Films",
    year: "2024",
    client: "Solaris Automotive Group",
    location: "Barossa Valley & Great Ocean Road",
    duration: "1m 45s",
    aspectRatio: "2.39:1 CinemaScope",
    cameraFormat: "Arri Alexa 35 • Angenieux Optimo Ultra",
    colorGrade: "Deep Teal Ocean Reflections & Warm Gold Sunset Horizon",
    heroPoster: "/images/posters/hero-showreel.png",
    videoPreviewUrl: "/videos/hero-showreel.mp4",
    fullVideoUrl: "/videos/hero-showreel.mp4",
    logline: "Near-silent electric propulsion meets the wild raw contours of coastal Australia.",
    synopsis: "A high-stakes commercial campaign broadcast during national sporting finals and across digital channels. The film contrasts the silent stillness of electric propulsion with the roar of crashing surf, framed by dramatic golden hour aerials along the Great Ocean Road.",
    creativeChallenge: "Managing rolling road closures across 45 kilometres of iconic heritage coastline under tight police-escort schedules.",
    creativeDirection: "Futuristic yet organic. The deep teal curves of the vehicle absorb coastal sea spray, creating a tactile commercial look.",
    productionNotes: [
      "Helicopter gimbal tracking rig deployed for wide coastal cliff sweeps.",
      "Custom sound design blending wind harmonics with synthetic motor frequencies.",
    ],
    credits: [
      { role: "Director", name: "Boitumelo B." },
      { role: "Automotive DP", name: "Jarrah Kelly" },
      { role: "Aerial Director", name: "Luke St. Clair" },
      { role: "Senior Colourist", name: "Kester Vance" },
    ],
    behindTheFrames: [
      {
        caption: "Helicopter rig refuelling at dawn near Apollo Bay airfield.",
        imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "National Commercial Gold Award — ACS Victoria & Tasmania",
    quote: {
      text: "The film established Solaris as a premier Australian luxury brand overnight. World-class in every detail.",
      author: "David Chen",
      role: "VP Brand Marketing, Solaris",
    },
  },
];

