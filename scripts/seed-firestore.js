const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, serverTimestamp } = require("firebase/firestore");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBXYbcQ570h8WG08yokeMxhXbIw_jr3Q-4",
  authDomain: "boitumelobproductions.firebaseapp.com",
  projectId: "boitumelobproductions",
  storageBucket: "boitumelobproductions.firebasestorage.app",
  messagingSenderId: "158660004629",
  appId: "1:158660004629:web:f4fb0d991b663831fdb71c",
  measurementId: "G-NTWJZJEWDB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const initialProjects = [
  {
    id: "proj-the-last-echo",
    slug: "the-last-echo",
    title: "The Last Echo",
    subtitle: "A journey through abandoned landscapes and forgotten voices.",
    category: "documentary-film",
    categoryLabel: "Documentary & Film",
    year: "2026",
    client: "Adelaide Arts Council",
    location: "Flinders Ranges, SA",
    duration: "18m 40s",
    aspectRatio: "2.39:1 Anamorphic",
    cameraFormat: "Arri Alexa Mini LF",
    colorGrade: "Kodak 2383 Emulation",
    heroPoster: "/images/posters/hero-showreel.png",
    videoPreviewUrl: "/videos/hero-showreel.mp4",
    fullVideoUrl: "/videos/hero-showreel.mp4",
    logline: "In the shadow of changing regional landscapes, three elders recount their stories.",
    synopsis: "Commissioned as part of a cultural preservation initiative in regional South Australia.",
    featured: true,
  },
  {
    id: "proj-neon-solitude",
    slug: "neon-solitude",
    title: "Neon Solitude",
    subtitle: "A kinetic nocturnal exploration of urban isolation.",
    category: "music-videos",
    categoryLabel: "Music Videos",
    year: "2026",
    client: "Modular Soundworks",
    location: "Adelaide CBD, SA",
    duration: "4m 15s",
    aspectRatio: "2.39:1 Anamorphic",
    cameraFormat: "Sony FX6",
    colorGrade: "Bleach Bypass / Teal-Gold",
    heroPoster: "/images/posters/andrews-music-video.png",
    videoPreviewUrl: "/videos/andrews-music-video.mp4",
    fullVideoUrl: "/videos/andrews-music-video.mp4",
    logline: "An evocative visual journey set to pulsing electronic rhythms.",
    synopsis: "Official music video exploring solitary urban moments after midnight.",
    featured: true,
  },
  {
    id: "proj-bonolo-vineyard",
    slug: "bonolo-vineyard-celebration",
    title: "Bonolo Vineyard Harvest",
    subtitle: "Cinematic commercial capturing organic viticulture.",
    category: "corporate-video",
    categoryLabel: "Corporate Video",
    year: "2025",
    client: "Bonolo Estate Wines",
    location: "Barossa Valley, SA",
    duration: "3m 30s",
    aspectRatio: "2.39:1 Anamorphic",
    cameraFormat: "Arri Alexa Mini LF",
    colorGrade: "Warm Amber Naturalist",
    heroPoster: "/images/posters/bonolo-vineyard-celebration.png",
    videoPreviewUrl: "/videos/bonolo-vineyard-celebration.mp4",
    fullVideoUrl: "/videos/bonolo-vineyard-celebration.mp4",
    logline: "Capturing the craft and passion behind single-origin vintage harvests.",
    synopsis: "Commercial brand film highlighting sustainable artisan wine production.",
    featured: true,
  },
];

const initialTestimonials = [
  {
    id: "test-1",
    author: "Elena Rostova",
    role: "Festival Director",
    company: "Melbourne DocuFest",
    projectTitle: "The Last Echo",
    serviceCategory: "Documentary & Film",
    year: "2026",
    portraitUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Boitumelo's commitment to story and visual discipline resulted in one of the most stunning documentary pieces we screened all season.",
  },
  {
    id: "test-2",
    author: "Julian Thorne",
    role: "Lead Vocalist & Songwriter",
    company: "Thorne & The Waves",
    projectTitle: "Neon Solitude",
    serviceCategory: "Music Videos",
    year: "2026",
    portraitUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "The visual style and pacing completely transformed our single. Working with a director who understands musical timing is rare.",
  },
];

const initialSettings = {
  studioName: "BOITUMELO B PRODUCTIONS",
  tagline: "Cinematic Videographer Northern Adelaide",
  supportingCopy: "Filming and video editing across Northern Adelaide for business, real estate, parties and events through a clear process.",
  email: "boitumelobproductions@gmail.com",
  phone: "0432 027 826",
  whatsapp: "0432 027 826",
  instagram: "https://www.instagram.com/boitumelobproductions?jplx=MW81ZnRuNWZoemZ6dw%3D%3D&utm_source=qr",
  tiktok: "https://www.tiktok.com/@boitumelobproductions?_r=1&_t=ZS-9BmP75nvpUS",
  facebook: "https://www.facebook.com/share/1N3gjveyUm/?mibextid=wwXIfr",
  vimeo: "https://vimeo.com/boitumelobproductions",
  brandGold: "#B08D57",
  brandTeal: "#0B1320",
  seoDescription: "Videographer in Northern Adelaide, South Australia. Professional filming and editing for business, real estate, parties and events.",
};

const initialEnquiry = {
  type: "booking-brief",
  name: "Marcus Aurelius",
  email: "marcus@adelaidewines.com.au",
  company: "Adelaide Hills Vineyards",
  phone: "0412 345 678",
  service: "Business & Commercial",
  discipline: "corporate-video",
  budget: "$5,000 – $10,000 AUD",
  timeline: "Q1 2026",
  location: "Barossa Valley / Adelaide Hills",
  status: "New",
  message: "Looking for a 2-minute brand video showcasing our autumn pruning and cellar door experience.",
  date: new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" }),
  briefDetails: {
    creativeGoals: "Highlight authentic craftsmanship and local family heritage",
    audience: "Tourism and wine lovers across South Australia",
    consultationType: "video",
    selectedDate: "15 Dec 2026",
    selectedTimeSlot: "14:00 - 15:00",
  },
};

async function seed() {
  console.log("Seeding Firestore database...");

  // Attempt admin authentication if required by rules
  try {
    await signInWithEmailAndPassword(auth, "admin@boitumelobproductions.com", "BoitumeloAdmin2026!");
    console.log("✓ Authenticated as Superadmin for rule authorization");
  } catch {
    console.log("Note: Proceeding without Firebase Auth session");
  }

  try {
    // 1. Seed Projects
    for (const p of initialProjects) {
      await setDoc(doc(db, "projects", p.id), { ...p, createdAt: serverTimestamp() });
      console.log("✓ Seeded Project:", p.title);
    }

    // 2. Seed Testimonials
    for (const t of initialTestimonials) {
      await setDoc(doc(db, "testimonials", t.id), { ...t, createdAt: serverTimestamp() });
      console.log("✓ Seeded Testimonial from:", t.author);
    }

    // 3. Seed Settings
    await setDoc(doc(db, "settings", "site"), { ...initialSettings, updatedAt: serverTimestamp() });
    console.log("✓ Seeded Site Settings (social links, email, phone)");

    // 4. Seed Starter Enquiry
    await setDoc(doc(db, "enquiries", "sample-brief-1"), { ...initialEnquiry, createdAt: serverTimestamp() });
    console.log("✓ Seeded Sample Enquiry / Brief");

    console.log("\nAll collections seeded successfully into Firestore!");
  } catch (err) {
    console.error("Firestore seed error:", err.message);
  }
}

seed();
