// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJVQtPVTJtvMTF1rsZH90Qga5qMRnnko",
  authDomain: "book-masb-4c123.firebaseapp.com",
  projectId: "book-masb-4c123",
  storageBucket: "book-masb-4c123.appspot.com",
  messagingSenderId: "239711867623",
  appId: "1:239711867623:web:6a55ffc12b91b898224842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
