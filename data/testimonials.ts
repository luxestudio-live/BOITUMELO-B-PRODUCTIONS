export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectTitle: string;
  serviceCategory: string;
  year: string;
  portraitUrl: string;
  featured?: boolean;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Boitumelo B Productions did not just capture our landscape; they listened to it with a reverence that translates into every frame. The documentary has screened at three international film festivals and sparked vital conversations about cultural conservation.",
    author: "Elena Rostova",
    role: "Curatorial Director",
    company: "Heritage Arts Australia",
    projectTitle: "The Last Echo",
    serviceCategory: "Documentary & Film",
    year: "2024",
    portraitUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: "test-2",
    quote:
      "The music video didn't just support the song; it created an entire universe around it that listeners now live in. Their understanding of rhythmic editing and in-camera optical experimentation is unmatched in the Australian scene.",
    author: "KAIRO",
    role: "Recording Artist",
    company: "Modular Sound Collective",
    projectTitle: "Neon Solitude",
    serviceCategory: "Music Videos",
    year: "2024",
    portraitUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: "test-3",
    quote:
      "Boitumelo transformed what could have been a standard brand video into pure poetry. Sales in our key export markets expanded dramatically after release because international buyers finally understood our dedication to the soil.",
    author: "Marcus Sterling",
    role: "Managing Director",
    company: "Terra Nova Estate",
    projectTitle: "Terra Nova: Earth & Spirit",
    serviceCategory: "Brand & Commercials",
    year: "2024",
    portraitUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: "test-4",
    quote:
      "Our international deep-tech investors were completely captivated. Boiling down autonomous robotics into an emotionally moving maritime story set our Series-B pitch apart from every other startup in the room.",
    author: "Samantha Wei",
    role: "Chief Strategy Officer",
    company: "Vanguard Autonomous Systems",
    projectTitle: "Vanguard: Beyond the Horizon",
    serviceCategory: "Corporate Video",
    year: "2024",
    portraitUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-5",
    quote:
      "The care and cultural integrity Boitumelo and the crew demonstrated was exceptional. They took the time to sit with our elders, learn our ways, and make sure the mob had final say on every scene. That kind of respect is rare.",
    author: "Nyree Anderson",
    role: "Cultural Coordinator",
    company: "Desert Arts Cultural Initiative",
    projectTitle: "Red Dirt Whispers",
    serviceCategory: "Documentary & Film",
    year: "2023",
    portraitUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-6",
    quote:
      "Working with Boitumelo B Productions felt like collaborating with a master architect. Their lighting of physical spaces, honest textures, and meditative pace conveyed the exact essence of our coastal design ethos.",
    author: "Arthur Pendelton",
    role: "Principal Architect",
    company: "Lumina Architecture Guild",
    projectTitle: "Lumina: Spaces of Light & Shadow",
    serviceCategory: "Corporate Video",
    year: "2023",
    portraitUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

