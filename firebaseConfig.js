import { initializeApp, getApp } from 'firebase/app';
import {getAuth, initializeAuth} from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAsI_KvsqPAK8AOzk7t8cZWH77ptMo5MdA",
    authDomain: "mas-assignment-f3dc8.firebaseapp.com",
    projectId: "mas-assignment-f3dc8",
    storageBucket: "mas-assignment-f3dc8.firebasestorage.app",
    messagingSenderId: "221846825574",
    appId: "1:492517802507:android:f42f46d02269282d167d0e",
    measurementId: "G-Y8N2MQVX88"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);

let FIREBASE_AUTH;
try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
    persistence: getReactNativePersistence(AsyncStorage)
  });
  
} catch (error){
  if (error.code ==="auth-already-initialized"){
    FIREBASE_AUTH = getAuth(FIREBASE_APP);
  } else{
    throw error;
  }
}

export {FIREBASE_AUTH};
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


export const FIRESTORE_DB = getFirestore(FIREBASE_APP);



// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// initializeApp({
//   credential: applicationDefault()
// });

// export const db = getFirestore();