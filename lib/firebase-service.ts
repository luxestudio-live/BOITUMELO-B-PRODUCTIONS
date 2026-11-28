import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { ProjectItem, sampleProjects } from "@/data/projects";
import { Testimonial, sampleTestimonials } from "@/data/testimonials";
import { MockEnquiry, initialMockEnquiries } from "@/data/admin-mock";
import { siteConfig } from "@/data/site-config";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  description: string;
  timeline: string;
  budget: string;
  preferredContact: string;
}

export interface BookingWizardData {
  discipline: string;
  description: string;
  creativeGoals: string;
  audience: string;
  referenceLinks?: string;
  timeline: string;
  location: string;
  budget: string;
  specialRequirements?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  consultationType: "video" | "email" | "whatsapp";
  selectedDate: string;
  selectedTimeSlot: string;
}

// ----------------------------------------------------
// ENQUIRIES & CONTACT SUBMISSIONS
// ----------------------------------------------------

export async function submitContactEnquiry(data: ContactFormData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "enquiries"), {
      type: "contact",
      name: data.name,
      email: data.email,
      company: data.company || "",
      phone: data.phone || "",
      service: data.service,
      description: data.description,
      message: data.description,
      timeline: data.timeline,
      budget: data.budget,
      preferredContact: data.preferredContact,
      status: "New",
      date: new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" }),
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.warn("Firestore write error (using fallback):", error);
    return `local-${Date.now()}`;
  }
}

export async function submitBookingBrief(data: BookingWizardData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "enquiries"), {
      type: "booking-brief",
      name: data.name,
      email: data.email,
      company: data.company || "",
      phone: data.phone || "",
      service: data.discipline,
      discipline: data.discipline,
      description: data.description,
      message: `${data.description}\n\nCreative Goals: ${data.creativeGoals}\nAudience: ${data.audience}\nConsultation: ${data.selectedDate} at ${data.selectedTimeSlot} (${data.consultationType})`,
      timeline: data.timeline,
      location: data.location,
      budget: data.budget,
      status: "New",
      briefDetails: {
        creativeGoals: data.creativeGoals,
        audience: data.audience,
        referenceLinks: data.referenceLinks || "",
        specialRequirements: data.specialRequirements || "",
        consultationType: data.consultationType,
        selectedDate: data.selectedDate,
        selectedTimeSlot: data.selectedTimeSlot,
      },
      date: new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" }),
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.warn("Firestore write error (using fallback):", error);
    return `brief-${Date.now()}`;
  }
}

export function subscribeEnquiries(onUpdate: (enquiries: MockEnquiry[]) => void) {
  try {
    const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
    return onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const items: MockEnquiry[] = snapshot.docs.map((docSnap) => {
            const d = docSnap.data();
            return {
              id: docSnap.id,
              name: d.name || "Anonymous",
              email: d.email || "",
              company: d.company || "",
              phone: d.phone || "",
              service: d.service || d.discipline || "General Production",
              budget: d.budget || "TBD",
              timeline: d.timeline || "TBD",
              date: d.date || "Recent",
              status: d.status || "New",
              message: d.message || d.description || "",
              type: d.type || (d.briefDetails ? "booking-brief" : "contact"),
              location: d.location || "",
              preferredContact: d.preferredContact || "",
              briefDetails: d.briefDetails || null,
            };
          });
          onUpdate(items);
        } else {
          // If Firestore is empty, provide initial mock enquiries as starter items
          onUpdate(initialMockEnquiries);
        }
      },
      (error) => {
        console.warn("Enquiries listener warning (falling back to local mock):", error);
        onUpdate(initialMockEnquiries);
      }
    );
  } catch {
    onUpdate(initialMockEnquiries);
    return () => {};
  }
}

export async function updateEnquiryStatus(
  enquiryId: string,
  newStatus: MockEnquiry["status"]
): Promise<void> {
  try {
    const ref = doc(db, "enquiries", enquiryId);
    await updateDoc(ref, { status: newStatus });
  } catch (e) {
    console.warn("Could not update enquiry status in Firestore:", e);
  }
}

export async function deleteEnquiry(enquiryId: string): Promise<void> {
  try {
    const ref = doc(db, "enquiries", enquiryId);
    await deleteDoc(ref);
  } catch (e) {
    console.warn("Could not delete enquiry in Firestore:", e);
  }
}

// ----------------------------------------------------
// PROJECTS CATALOG MANAGEMENT
// ----------------------------------------------------

export function subscribeProjects(onUpdate: (projects: ProjectItem[]) => void) {
  try {
    const colRef = collection(db, "projects");
    return onSnapshot(
      colRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs.map((d) => ({
            ...(d.data() as ProjectItem),
            id: d.id,
          }));
          onUpdate(items);
        } else {
          onUpdate(sampleProjects);
        }
      },
      () => {
        onUpdate(sampleProjects);
      }
    );
  } catch {
    onUpdate(sampleProjects);
    return () => {};
  }
}

export async function saveProjectToFirestore(project: ProjectItem): Promise<void> {
  try {
    const projectRef = doc(db, "projects", project.id);
    await setDoc(projectRef, {
      ...project,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.warn("Could not save project to Firestore:", error);
  }
}

export async function deleteProjectFromFirestore(projectId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "projects", projectId));
  } catch (error) {
    console.warn("Could not delete project from Firestore:", error);
  }
}

// ----------------------------------------------------
// TESTIMONIALS MANAGEMENT
// ----------------------------------------------------

export function subscribeTestimonials(onUpdate: (testimonials: Testimonial[]) => void) {
  try {
    const colRef = collection(db, "testimonials");
    return onSnapshot(
      colRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs.map((d) => ({
            ...(d.data() as Testimonial),
            id: d.id,
          }));
          onUpdate(items);
        } else {
          onUpdate(sampleTestimonials);
        }
      },
      () => {
        onUpdate(sampleTestimonials);
      }
    );
  } catch {
    onUpdate(sampleTestimonials);
    return () => {};
  }
}

export async function saveTestimonialToFirestore(testimonial: Testimonial): Promise<void> {
  try {
    const ref = doc(db, "testimonials", testimonial.id);
    await setDoc(ref, {
      ...testimonial,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.warn("Could not save testimonial to Firestore:", error);
  }
}

export async function deleteTestimonialFromFirestore(testimonialId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "testimonials", testimonialId));
  } catch (error) {
    console.warn("Could not delete testimonial from Firestore:", error);
  }
}

// ----------------------------------------------------
// SITE SETTINGS MANAGEMENT
// ----------------------------------------------------

export function subscribeSettings(onUpdate: (settings: any) => void) {
  try {
    const ref = doc(db, "settings", "site");
    return onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.data());
        }
      },
      (error) => {
        console.warn("Settings listener warning:", error);
      }
    );
  } catch {
    return () => {};
  }
}

export async function saveSettingsToFirestore(settings: any): Promise<void> {
  try {
    const ref = doc(db, "settings", "site");
    await setDoc(ref, {
      ...settings,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.warn("Could not save settings to Firestore:", error);
  }
}

// ----------------------------------------------------
// ONE-CLICK SEED ALL DEFAULTS TO FIRESTORE
// ----------------------------------------------------

export async function seedFirestoreWithDefaults(): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Projects
    for (const p of sampleProjects) {
      await setDoc(doc(db, "projects", p.id), {
        ...p,
        createdAt: serverTimestamp(),
      }, { merge: true });
    }

    // 2. Testimonials
    for (const t of sampleTestimonials) {
      await setDoc(doc(db, "testimonials", t.id), {
        ...t,
        createdAt: serverTimestamp(),
      }, { merge: true });
    }

    // 3. Settings
    await setDoc(doc(db, "settings", "site"), {
      studioName: siteConfig.name,
      tagline: siteConfig.tagline,
      supportingCopy: siteConfig.supportingCopy,
      email: siteConfig.email,
      phone: siteConfig.phone,
      whatsapp: siteConfig.whatsappDisplay,
      instagram: siteConfig.instagram,
      tiktok: siteConfig.tiktok,
      facebook: siteConfig.facebook,
      vimeo: siteConfig.vimeo,
      brandGold: "#B08D57",
      brandTeal: "#0B1320",
      seoDescription: "Videographer in Northern Adelaide, South Australia. Professional filming and editing for business, real estate, parties and events.",
      updatedAt: serverTimestamp(),
    }, { merge: true });

    // 4. Starter Enquiry
    const starterEnquiry: ContactFormData = {
      name: "Marcus Aurelius",
      email: "marcus@adelaidewines.com.au",
      company: "Adelaide Hills Vineyards",
      phone: "0412 345 678",
      service: "Business Videos",
      description: "Looking for a 2-minute brand video showcasing our autumn pruning and cellar door experience.",
      timeline: "Q1 2026",
      budget: "$5,000 – $10,000 AUD",
      preferredContact: "email",
    };
    await submitContactEnquiry(starterEnquiry);

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || "Permissions denied" };
  }
}
