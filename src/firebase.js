// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpCbVGCTOUBEO-tweK53z8WEVt6MfKr4",
  authDomain: "book-masb.firebaseapp.com",
  projectId: "book-masb",
  storageBucket: "book-masb.appspot.com",
  messagingSenderId: "1051596862172",
  appId: "1:1051596862172:web:433da6afc2ce102dedba19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
