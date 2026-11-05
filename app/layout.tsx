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
  metadataBase: new URL("https://boitumelobproductions.com.au"),
  title: {
    default: "BOITUMELO B PRODUCTIONS | Film & Video Production Australia",
    template: "%s | BOITUMELO B PRODUCTIONS",
  },
  description:
    "Australian creative production studio specialising in cinematic documentary filmmaking, visionary music videos, corporate narratives, and commercial films. Stories worth feeling.",
  keywords: [
    "Video production Australia",
    "Cinematic film studio Melbourne Sydney",
    "Documentary film production Australia",
    "Music video director Australia",
    "Brand film production",
    "Corporate video production Australia",
    "Commercial video production",
    "Boitumelo B Productions",
  ],
  authors: [{ name: "BOITUMELO B PRODUCTIONS" }],
  creator: "BOITUMELO B PRODUCTIONS",
  publisher: "BOITUMELO B PRODUCTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://boitumelobproductions.com.au",
    siteName: "BOITUMELO B PRODUCTIONS",
    title: "BOITUMELO B PRODUCTIONS | Stories Worth Feeling.",
    description:
      "Films that move people. Visuals that move brands. High-craft Australian film and commercial video production.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "BOITUMELO B PRODUCTIONS — Cinematic Storytelling",
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
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      </head>
      <body className="bg-brand-black text-brand-white selection:bg-brand-gold selection:text-brand-black antialiased">
        {children}
      </body>
    </html>
  );
}

