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
    duration: "18m 42s",
    aspectRatio: "2.39:1 Anamorphic",
    cameraFormat: "Arri Alexa Mini LF • Cooke Anamorphic/i",
    colorGrade: "Kodak 2383 35mm Print Emulation",
    heroPoster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
    title: "Neon Solitude",
    subtitle: "Hypnotic visual piece and performance film for electronic producer KAIRO",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2024",
    client: "Modular Sound Collective",
    location: "Melbourne Underground Transit, VIC",
    duration: "4m 12s",
    aspectRatio: "1.85:1 European Flat",
    cameraFormat: "RED V-Raptor 8K • Atlas Orion Anamorphics",
    colorGrade: "High Contrast Cyber-Noir Palette",
    heroPoster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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
      { role: "Editor & Colorist", name: "Boitumelo B." },
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
    slug: "terra-nova-harvest",
    title: "Terra Nova: Earth & Spirit",
    subtitle: "Cinematic commercial campaign for an organic biodynamic vineyard estate",
    category: "brand-commercials",
    categoryLabel: "Brand & Commercial Films",
    year: "2024",
    client: "Terra Nova Estate",
    location: "Yarra Valley, VIC",
    duration: "2m 30s",
    aspectRatio: "2.20:1 70mm Aspect",
    cameraFormat: "Arri Alexa 35 • ARRI Master Primes",
    colorGrade: "Organic Earth Tones with Warm Amber Highlights",
    heroPoster: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    logline: "An ode to generational craft, charting the relationship between micro-climate soil biology, early autumn mist, and the patient hands that cultivate liquid heritage.",
    synopsis: "Commissioned as the centerpiece for Terra Nova's international brand repositioning, this film abandons standard corporate winery clichés in favour of raw tactile intimacy: macro macro-lens shots of morning dew evaporating off vine shoots, hands turning rich dark loam, and cellar humidity illuminated by amber shaft lighting.",
    creativeChallenge: "Capturing fleeting dawn atmospheric mist that only manifests for 20 minutes under precise barometric conditions.",
    creativeDirection: "High-contrast naturalism. The visual world is grounded, earthy, and opulent without ever feeling pretentious.",
    productionNotes: [
      "Embedded crew lived on the estate for 10 days to seize unpredictable weather shifts.",
      "Utilized custom macro bellows lens system resolving down to 0.1mm organic textures.",
      "Original acoustic score recorded with a solo cello inside the active oak barrel cellar.",
    ],
    credits: [
      { role: "Director", name: "Boitumelo B." },
      { role: "Cinematographer", name: "Harrison Blake" },
      { role: "Macro Specialist", name: "Tess Van Der Linden" },
      { role: "Original Score", name: "Julian Gray" },
    ],
    behindTheFrames: [
      {
        caption: "Waiting for the sun to breach the ridge mist at 5:40 AM.",
        imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
      {
        caption: "Cellar master observing the initial barrel tastings under tungsten spot.",
        imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
        aspect: "portrait",
      },
    ],
    featured: true,
    awardNote: "Craft Excellence Award — Australian Commercial Film Guild",
    quote: {
      text: "Boitumelo transformed what could have been a standard brand video into pure poetry. Sales in our export markets grew by 40% after release.",
      author: "Marcus Sterling",
      role: "Managing Director, Terra Nova",
    },
  },
  {
    id: "proj-4",
    slug: "vanguard-quantum",
    title: "Vanguard: Beyond the Horizon",
    subtitle: "Brand narrative film for leading deep-tech robotics innovators",
    category: "corporate-video",
    categoryLabel: "Corporate Video",
    year: "2024",
    client: "Vanguard Autonomous Systems",
    location: "Sydney & Wollongong, NSW",
    duration: "3m 45s",
    aspectRatio: "2.39:1 Widescreen",
    cameraFormat: "Sony FX9 • Cine-Alta Sphericals",
    colorGrade: "Deep Graphite & Precision Warm Titanium",
    heroPoster: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    logline: "How human intuition and computational precision unite to solve frontier maritime navigation challenges.",
    synopsis: "Moving far beyond dry corporate case studies, 'Beyond the Horizon' frames Vanguard's autonomous ocean technology through the emotional lens of maritime safety and human responsibility. Kinetic drone trajectories over choppy ocean testing grounds contrast with quiet, focused cleanroom laboratories.",
    creativeChallenge: "Explaining highly complex autonomous algorithmic logic in a visual language that engages venture partners and public stakeholders alike.",
    creativeDirection: "Architectural precision. Clean symmetric compositions, purposeful dolly movements, and crisp typography overlays.",
    productionNotes: [
      "Rigged cameras on high-speed autonomous offshore support vessels during 3-meter swell trials.",
      "Secure cleanroom protocols: required specialised anti-static camera shrouds.",
    ],
    credits: [
      { role: "Director", name: "Boitumelo B." },
      { role: "Technical Consultant", name: "Dr. Aris Thorne" },
      { role: "FPV Aerial Pilot", name: "Flynn Cooper" },
      { role: "Sound Design", name: "Resonance Audio" },
    ],
    behindTheFrames: [
      {
        caption: "Chasing offshore autonomous drone vessels 12 nautical miles off Port Kembla.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: false,
    quote: {
      text: "Our international investors were completely captivated. It set our Series-B pitch apart from anything they had seen in the sector.",
      author: "Samantha Wei",
      role: "Chief Strategy Officer, Vanguard",
    },
  },
  {
    id: "proj-5",
    slug: "red-dirt-whispers",
    title: "Red Dirt Whispers",
    subtitle: "A documentary profile of First Nations sculptors and elder storytellers",
    category: "documentary-film",
    categoryLabel: "Documentary & Film",
    year: "2023",
    client: "Desert Arts Cultural Initiative",
    location: "Central Desert, NT",
    duration: "24m 10s",
    aspectRatio: "1.66:1 Classical European",
    cameraFormat: "Arri Amira • Zeiss Super Speeds",
    colorGrade: "Warm Ochre & Deep Ultramarine Skies",
    heroPoster: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    logline: "In the shadow of iron-red escarpments, three generations of sculptors breathe ancestral knowledge into desert hardwood.",
    synopsis: "Created in deep consultation with community elders, 'Red Dirt Whispers' is a masterclass in respectful cultural documentary filmmaking. The camera listens rather than intrudes, allowing the rhythm of carving tools, desert wind, and oral heritage to drive the story.",
    creativeChallenge: "Ensuring cultural protocols and community editorial review took precedence over production speed at every milestone.",
    creativeDirection: "Tactile, patient, and deeply human. Framing centres on hands, eyes, and the relationship with Country.",
    productionNotes: [
      "Community consent agreement established 6 months prior to initial principal photography.",
      "100% solar-battery field workflow in remote cultural homelands.",
    ],
    credits: [
      { role: "Co-Directors", name: "Boitumelo B. & Uncle Peter K." },
      { role: "Cultural Liaison", name: "Nyree Anderson" },
      { role: "Editor", name: "Maeve C. Sullivan" },
    ],
    behindTheFrames: [
      {
        caption: "Story circle recording under desert ghost gums at twilight.",
        imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        aspect: "landscape",
      },
    ],
    featured: true,
    awardNote: "Best Cultural Documentary — Australasian Arts Film Festival",
    quote: {
      text: "The care and integrity Boitumelo and the crew demonstrated was exceptional. They became family to our mob.",
      author: "Nyree Anderson",
      role: "Cultural Coordinator",
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
    heroPoster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
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
    heroPoster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    logline: "Exploring how brutalist board-formed concrete and sustainable timber harmonise with the raw Southern Ocean shoreline.",
    synopsis: "Commissioned by prestigious design studio Lumina, this architectural profile is structured around the path of natural sunlight across 24 hours. The camera mimics architectural perspective lines, utilizing custom-built mechanical sliders for imperceptibly slow, hypnotic motion.",
    creativeChallenge: "Reflecting precise material textures—raw off-form concrete, oxidised copper, and honed travertine—without clipping delicate highlights.",
    creativeDirection: "Meditative and structured. The rhythm matches the calm ocean swells just meters away.",
    productionNotes: [
      "Shot exclusively with natural lighting and minimal negative fill to honor real architectural lived experience.",
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
    heroPoster: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85",
    videoPreviewUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
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
      { role: "Senior Colorist", name: "Kester Vance" },
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

