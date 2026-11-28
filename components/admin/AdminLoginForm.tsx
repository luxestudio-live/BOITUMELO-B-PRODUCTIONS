"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  Mail,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";
import {
  loginAdmin,
  SUPERADMIN_CREDENTIALS,
  AdminUser,
} from "@/lib/admin-auth";

interface AdminLoginFormProps {
  onSuccess?: (user: AdminUser) => void;
}

export default function AdminLoginForm({ onSuccess }: AdminLoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await loginAdmin(email, password);
      if (res.success && res.user) {
        if (onSuccess) {
          onSuccess(res.user);
        } else if (typeof window !== "undefined") {
          window.location.href = "/admin";
        }
      } else {
        setErrorMessage(res.error || "Authentication failed. Please verify credentials.");
      }
    } catch {
      setErrorMessage("Authentication error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutofillSuperadmin = () => {
    setEmail(SUPERADMIN_CREDENTIALS.email);
    setPassword(SUPERADMIN_CREDENTIALS.password);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-[#070D16] text-white flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--gold)]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0B1320]/60 rounded-full blur-[140px]" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between max-w-5xl mx-auto w-full pb-6 border-b border-white/10">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={getAssetPath("/images/logo.png")}
            alt="BOITUMELO B PRODUCTIONS"
            width={160}
            height={34}
            className="h-7 w-auto object-contain"
          />
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-[var(--gold)] flex items-center space-x-1.5 transition-colors"
        >
          <span>Exit to Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* Main Authentication Box */}
      <main className="relative z-10 w-full max-w-md mx-auto my-auto py-8">
        <div className="bg-[#0B1320] border border-[var(--gold)]/40 rounded-sm p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Header Badge */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[11px] font-mono uppercase tracking-wider text-amber-300">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Restricted Studio Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              Admin Authentication
            </h1>
            <p className="text-xs text-slate-300 font-mono">
              Sign in with your Superadmin credentials to access the production control console.
            </p>
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <div className="p-3 bg-red-950/60 border border-red-500/50 rounded text-red-200 text-xs font-mono flex items-start space-x-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4 text-xs font-mono">
            <div className="space-y-1.5">
              <label className="text-slate-200 uppercase tracking-wider block font-semibold">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@boitumelobproductions.com"
                  className="w-full bg-[#070D16] border border-white/20 focus:border-[var(--gold)] rounded pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-200 uppercase tracking-wider block font-semibold">
                Security Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="w-full bg-[#070D16] border border-white/20 focus:border-[var(--gold)] rounded pl-10 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-[44px] flex items-center justify-center space-x-2 text-xs uppercase font-mono tracking-wider font-semibold bg-brand-gold text-brand-black hover:bg-brand-gold-light py-3 px-4 rounded transition-all shadow-md disabled:opacity-50 mt-2"
            >
              <span>{isLoading ? "Authenticating Session..." : "Sign In to Studio Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Superadmin Autofill Button */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              type="button"
              onClick={handleAutofillSuperadmin}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[var(--gold-light)] hover:text-white transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Autofill Superadmin Credentials</span>
            </button>
            <div className="text-[11px] font-mono text-slate-400 text-center space-y-0.5">
              <p>Email: <span className="text-slate-200">admin@boitumelobproductions.com</span></p>
              <p>Password: <span className="text-slate-200 font-mono">BoitumeloAdmin2026!</span></p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs font-mono text-slate-400 pt-6">
        <p>BOITUMELO B PRODUCTIONS • Secure Administrative Console</p>
        <p className="text-[11px] text-slate-500 mt-1">Region: Northern Adelaide, South Australia</p>
      </footer>
    </div>
  );
}
