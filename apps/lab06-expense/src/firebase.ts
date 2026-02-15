import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxADsYtb2JhHA-sgyZbno1oU5aK4b_HL0",
  authDomain: "mobileweb-f71ae.firebaseapp.com",
  projectId: "mobileweb-f71ae",
  storageBucket: "mobileweb-f71ae.firebasestorage.app",
  messagingSenderId: "414275322577",
  appId: "1:414275322577:web:f6d12f4221c2797f233bf0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);