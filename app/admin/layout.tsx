import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Studio Portal | BOITUMELO B PRODUCTIONS",
  description:
    "Production management console for BOITUMELO B PRODUCTIONS.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-[var(--ink)] antialiased font-sans">
      {children}
    </div>
  );
}

