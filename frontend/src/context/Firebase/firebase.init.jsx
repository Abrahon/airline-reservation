// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEzZV9gOoAqNwGekmSFZp0VU8wcGHMcI",
  authDomain: "airline-reservation-syst-ebcb1.firebaseapp.com",
  projectId: "airline-reservation-syst-ebcb1",
  storageBucket: "airline-reservation-syst-ebcb1.firebasestorage.app",
  messagingSenderId: "539689302068",
  appId: "1:539689302068:web:28399894c72b7524323261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;