// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"//it is for authentication added by ourself
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEM7-zF6_ODqfvLpSNk1L2mnmtq0oXHP8",
  authDomain: "clone-c41c9.firebaseapp.com",
  projectId: "clone-c41c9",
  storageBucket: "clone-c41c9.firebasestorage.app",
  messagingSenderId: "1062505969598",
  appId: "1:1062505969598:web:a96783f6b6886142e2ebef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);