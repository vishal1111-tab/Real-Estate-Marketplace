// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "real-estate-17baf",
  storageBucket: "real-estate-17baf.appspot.com",
  messagingSenderId: "541820955464",
  appId: "1:541820955464:web:44e135194f4cdb567a617d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);