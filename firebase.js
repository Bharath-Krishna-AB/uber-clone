// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider , getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiBvuNn1HwaOZ3QDgzxOOsOFybCRY5_2E",
  authDomain: "uber-next-clone-1109e.firebaseapp.com",
  projectId: "uber-next-clone-1109e",
  storageBucket: "uber-next-clone-1109e.appspot.com",
  messagingSenderId: "640487398475",
  appId: "1:640487398475:web:f57fe135669b6603b141ce",
  measurementId: "G-8RB6C96JXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app,provider,auth}

