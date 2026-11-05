import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin CMS Prototype | BOITUMELO B PRODUCTIONS",
  description:
    "Frontend CMS interface demonstration for BOITUMELO B PRODUCTIONS production management.",
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

