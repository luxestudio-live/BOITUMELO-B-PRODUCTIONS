import type { Metadata } from "next";

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
    <div className="min-h-screen bg-brand-black text-brand-white antialiased">
      {children}
    </div>
  );
}

