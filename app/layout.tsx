import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boitumelo-b-productions.theluxestudio.in"),
  title: {
    default: "BOITUMELO B PRODUCTIONS | Film & Video Production Australia",
    template: "%s | BOITUMELO B PRODUCTIONS",
  },
  description:
    "Australian creative production studio specialising in cinematic documentary filmmaking, visionary music videos, corporate narratives, and commercial films. Stories worth feeling.",
  applicationName: "BOITUMELO B PRODUCTIONS",
  category: "entertainment",
  classification: "Film and Video Production",
  keywords: [
    "Video production Australia",
    "Cinematic film studio Melbourne Sydney",
    "Documentary film production Australia",
    "Music video director Australia",
    "Brand film production",
    "Corporate video production Australia",
    "Commercial video production",
    "Boitumelo B Productions",
    "Australian cinema director",
    "35mm film production",
  ],
  authors: [{ name: "BOITUMELO B PRODUCTIONS", url: "https://boitumelo-b-productions.theluxestudio.in" }],
  creator: "BOITUMELO B PRODUCTIONS",
  publisher: "BOITUMELO B PRODUCTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://boitumelo-b-productions.theluxestudio.in",
    siteName: "BOITUMELO B PRODUCTIONS",
    title: "BOITUMELO B PRODUCTIONS | Stories Worth Feeling.",
    description:
      "Films that move people. Visuals that move brands. High-craft Australian film and commercial video production.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "BOITUMELO B PRODUCTIONS — Cinematic Storytelling Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOITUMELO B PRODUCTIONS | Stories Worth Feeling.",
    description:
      "Australian creative film studio specialising in cinematic documentary, music video, and commercial productions.",
    images: ["https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BOITUMELO B PRODUCTIONS",
  description:
    "Australian creative production studio specialising in cinematic documentary filmmaking, visionary music videos, corporate narratives, and commercial films.",
  url: "https://boitumelo-b-productions.theluxestudio.in",
  logo: "https://boitumelo-b-productions.theluxestudio.in/icon-512.png",
  image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=85",
  email: "hello@boitumelobproductions.com.au",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "Victoria / New South Wales",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  priceRange: "$$$",
  knowsAbout: [
    "Documentary Cinema",
    "Music Video Production",
    "Brand Commercials",
    "Corporate Film",
    "35mm Anamorphic Cinematography",
    "Color Grading",
    "Ambisonic Sound Design",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-brand-teal selection:bg-brand-gold selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

