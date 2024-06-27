// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQglRQ3Q8FdSpOduSmCoLiR6w3vxCdajM",
  authDomain: "masb-f572e.firebaseapp.com",
  projectId: "masb-f572e",
  storageBucket: "masb-f572e.appspot.com",
  messagingSenderId: "930825311653",
  appId: "1:930825311653:web:006a98c9b6bf67b561444c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
