import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

export const SUPERADMIN_CREDENTIALS = {
  email: "admin@boitumelobproductions.com",
  password: "BoitumeloAdmin2026!",
  name: "Boitumelo B. (Superadmin)",
  role: "superadmin",
};

const AUTH_STORAGE_KEY = "boitumelo_admin_session";

export interface AdminUser {
  email: string;
  name: string;
  role: string;
}

export async function loginAdmin(
  email: string,
  pass: string
): Promise<{ success: boolean; error?: string; user?: AdminUser }> {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPass = pass.trim();

  // 1. Try Firebase Authentication first
  try {
    const cred = await signInWithEmailAndPassword(auth, normalizedEmail, normalizedPass);
    const user: AdminUser = {
      email: cred.user.email || normalizedEmail,
      name: cred.user.displayName || "Superadmin",
      role: "superadmin",
    };
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }
    return { success: true, user };
  } catch (firebaseErr: any) {
    // 2. If Firebase Auth is not yet activated in console or user not yet registered in Firebase Auth,
    // allow the authorized studio Superadmin credentials to pass
    if (
      normalizedEmail === SUPERADMIN_CREDENTIALS.email.toLowerCase() &&
      normalizedPass === SUPERADMIN_CREDENTIALS.password
    ) {
      const user: AdminUser = {
        email: SUPERADMIN_CREDENTIALS.email,
        name: SUPERADMIN_CREDENTIALS.name,
        role: SUPERADMIN_CREDENTIALS.role,
      };
      if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      }
      return { success: true, user };
    }

    let errorMessage = "Invalid admin credentials. Please verify your email and password.";
    if (firebaseErr?.code === "auth/user-not-found" || firebaseErr?.code === "auth/wrong-password") {
      errorMessage = "Invalid email or password.";
    } else if (firebaseErr?.code === "auth/too-many-requests") {
      errorMessage = "Too many failed attempts. Please try again later.";
    }

    return { success: false, error: errorMessage };
  }
}

export async function logoutAdmin(): Promise<void> {
  try {
    await signOut(auth);
  } catch {
    // Ignore signOut errors
  }
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function getStoredAdminUser(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AdminUser;
  } catch {
    return null;
  }
}

export function subscribeAdminAuthState(callback: (user: AdminUser | null) => void) {
  if (typeof window === "undefined") return () => {};

  // Check stored session
  const stored = getStoredAdminUser();
  if (stored) {
    callback(stored);
  }

  // Also listen to Firebase Auth
  const unsub = onAuthStateChanged(auth, (fbUser: User | null) => {
    if (fbUser) {
      const user: AdminUser = {
        email: fbUser.email || SUPERADMIN_CREDENTIALS.email,
        name: fbUser.displayName || "Superadmin",
        role: "superadmin",
      };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      callback(user);
    } else if (!stored) {
      callback(null);
    }
  });

  return unsub;
}
