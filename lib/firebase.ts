import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXYbcQ570h8WG08yokeMxhXbIw_jr3Q-4",
  authDomain: "boitumelobproductions.firebaseapp.com",
  projectId: "boitumelobproductions",
  storageBucket: "boitumelobproductions.firebasestorage.app",
  messagingSenderId: "158660004629",
  appId: "1:158660004629:web:f4fb0d991b663831fdb71c",
  measurementId: "G-NTWJZJEWDB",
};

// Initialize or reuse existing Firebase app instance
const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

// Initialize analytics only on client-side if supported
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    });
  }).catch(() => {});
}

export { app, db, auth, firebaseConfig };
