import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBURB-suvDiWhafIS8jzBepxiUTWVn8P2g",
  authDomain: "morning-app-801b6.firebaseapp.com",
  projectId: "morning-app-801b6",
  storageBucket: "morning-app-801b6.firebasestorage.app",
  messagingSenderId: "221846825574",
  appId: "1:221846825574:web:7f32636ee395e24fef9ba7",
  measurementId: "G-Y8N2MQVX88"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);