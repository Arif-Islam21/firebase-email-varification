// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANimAeWni3xtOitQRf_JcYWhO8vXRXSjA",
  authDomain: "email-auth-practise.firebaseapp.com",
  projectId: "email-auth-practise",
  storageBucket: "email-auth-practise.appspot.com",
  messagingSenderId: "713923432775",
  appId: "1:713923432775:web:7abe7be5adef34368b7c62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
