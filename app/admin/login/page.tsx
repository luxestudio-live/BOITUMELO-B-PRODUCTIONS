"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredAdminUser } from "@/lib/admin-auth";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  const router = useRouter();

  useEffect(() => {
    const existing = getStoredAdminUser();
    if (existing) {
      router.replace("/admin");
    }
  }, [router]);

  return <AdminLoginForm onSuccess={() => router.replace("/admin")} />;
}
