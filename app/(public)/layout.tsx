import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import DemoBanner from "@/components/public/DemoBanner";
import { siteConfig } from "@/data/site-config";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: "https://boitumelobproductions.com.au",
    logo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
    description:
      "Australian creative production studio specialising in documentary cinema, music video direction, corporate film, and commercial productions.",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    sameAs: [
      siteConfig.instagram,
      siteConfig.vimeo,
      siteConfig.youtube,
      siteConfig.linkedin,
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DemoBanner />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

