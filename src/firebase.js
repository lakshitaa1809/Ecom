import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app"; // Import the functions
const firebaseConfig = {
  apiKey: "AIzaSyBxloXE0INY64xbzDe5ifjRH0Y6LcHv1Gg",
  authDomain: "e-com-7ff1b.firebaseapp.com",
  projectId: "e-com-7ff1b",
  storageBucket: "e-com-7ff1b.appspot.com",
  messagingSenderId: "839918797060",
  appId: "1:839918797060:web:54424b7c7d90c450a65051",
};
export const app = initializeApp(firebaseConfig);
