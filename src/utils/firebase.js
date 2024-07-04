// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhmU4aaRUVU-mVNTAtZplUqBDF3R7k1vI",
  authDomain: "netflix-gpt-e176f.firebaseapp.com",
  projectId: "netflix-gpt-e176f",
  storageBucket: "netflix-gpt-e176f.appspot.com",
  messagingSenderId: "917002711066",
  appId: "1:917002711066:web:6de95a6dc49ab940dfa1a3",
  measurementId: "G-XKLWFJQD3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
