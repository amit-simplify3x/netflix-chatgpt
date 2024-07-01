// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOUIfb-8GQhNLXfcOn_bDScA609cLUapg",
  authDomain: "netflixgpt-9f454.firebaseapp.com",
  projectId: "netflixgpt-9f454",
  storageBucket: "netflixgpt-9f454.appspot.com",
  messagingSenderId: "194192769108",
  appId: "1:194192769108:web:98910dfa7cfe893b65adc1",
  measurementId: "G-CCEJW6GDF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
