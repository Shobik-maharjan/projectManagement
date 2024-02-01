// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLKq7a8ikiudQ3meneOQNx1YkFWfIRQYY",
  authDomain: "kanbanui.firebaseapp.com",
  databaseURL: "https://kanbanui-default-rtdb.firebaseio.com",
  projectId: "kanbanui",
  storageBucket: "kanbanui.appspot.com",
  messagingSenderId: "903649853757",
  appId: "1:903649853757:web:8c2adc88bb48a34609c554",
  measurementId: "G-WLR0GG0QHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
