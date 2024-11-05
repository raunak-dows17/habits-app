import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyAXwmds7Xj6c4DYpfyybCsl7rDGTfr2tFo",
    authDomain: "habits-7d56b.firebaseapp.com",
    projectId: "habits-7d56b",
    storageBucket: "habits-7d56b.firebasestorage.app",
    messagingSenderId: "461967210006",
    appId: "1:461967210006:web:e971189480a3ea8c656737",
    measurementId: "G-ZPKZED4RRD",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      analytics,
      db,
    },
  };
});
