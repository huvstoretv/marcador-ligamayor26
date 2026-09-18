// Reemplaza con tus credenciales de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0_heqgUdn0yjLYEPEVdOCkYhN8InZ09k",
  authDomain: "marcador-ligamayor26.firebaseapp.com",
  projectId: "marcador-ligamayor26",
  storageBucket: "marcador-ligamayor26.firebasestorage.app",
  messagingSenderId: "470066357306",
  appId: "1:470066357306:web:bcc181b2900596c198c103"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, onSnapshot };
