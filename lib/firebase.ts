// lib/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCpdIWELnxLVC5qsfj4sQowM6XIjfqtAZU",
  authDomain: "aqualynk-vitrine.firebaseapp.com",
  databaseURL: "https://aqualynk-vitrine-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aqualynk-vitrine",
  storageBucket: "aqualynk-vitrine.firebasestorage.app",
  messagingSenderId: "604006031189",
  appId: "1:604006031189:web:242cefa6bc4d5f05e099dc"
};

// Éviter les doubles initialisations
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getDatabase(app);