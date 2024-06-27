// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwR30bSSapHFy56oYxjHdVzeePVnUo4Lc",
  authDomain: "book-8532b.firebaseapp.com",
  projectId: "book-8532b",
  storageBucket: "book-8532b.appspot.com",
  messagingSenderId: "818847847272",
  appId: "1:818847847272:web:576c811403425d94d1bcdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
