// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWPn3S0N-uQmiMrUGvSXfwtazyLdHRYuE",
  authDomain: "organization-41eec.firebaseapp.com",
  projectId: "organization-41eec",
  storageBucket: "organization-41eec.appspot.com",
  messagingSenderId: "341111047050",
  appId: "1:341111047050:web:4d64845e47f1e7bf373e73",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
