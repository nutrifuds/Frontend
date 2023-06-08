// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOuk2PC5bpvdtgON9k-cUJjPHrwosUWw",
  authDomain: "authentication-7a710.firebaseapp.com",
  projectId: "authentication-7a710",
  storageBucket: "authentication-7a710.appspot.com",
  messagingSenderId: "358106825419",
  appId: "1:358106825419:web:e179e07471b759d5d3914e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;