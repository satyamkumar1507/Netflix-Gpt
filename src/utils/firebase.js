// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHu7VqN84TLRwd-byVWixynaXjoU45HBE",
  authDomain: "netflix-gpt-d93ab.firebaseapp.com",
  projectId: "netflix-gpt-d93ab",
  storageBucket: "netflix-gpt-d93ab.firebasestorage.app",
  messagingSenderId: "944272791778",
  appId: "1:944272791778:web:6913c4366755a92f0926bb",
  measurementId: "G-TQZPZWSZ25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();