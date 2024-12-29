// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFGn1cLeiPif2FEPM4Z8h2KWbX9blJnRM",
  authDomain: "netflixgpt-66353.firebaseapp.com",
  projectId: "netflixgpt-66353",
  storageBucket: "netflixgpt-66353.firebasestorage.app",
  messagingSenderId: "74784773421",
  appId: "1:74784773421:web:fa6d559ac48cc4e228efa4",
  measurementId: "G-Q9NPC6F6G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

export const auth =getAuth();