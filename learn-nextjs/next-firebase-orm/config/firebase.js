import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: process.env.APIKEY,
  apiKey: "AIzaSyDi4-XlmIDyaFRDbc5heMgh73krkw5Y1B4",
  authDomain: "nextjs-firebase-1996f.firebaseapp.com",
  projectId: "nextjs-firebase-1996f",
  storageBucket: "nextjs-firebase-1996f.appspot.com",
  messagingSenderId: "658330206471",
  appId: "1:658330206471:web:bfed0317bb63e8931a45a2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);