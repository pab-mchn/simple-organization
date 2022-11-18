import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6VZ8381EcGEtE-lkboMILL-VcSZwLwgk",
  authDomain: "simple-organization-2c6c2.firebaseapp.com",
  projectId: "simple-organization-2c6c2",
  storageBucket: "simple-organization-2c6c2.appspot.com",
  messagingSenderId: "680439548524",
  appId: "1:680439548524:web:ecf25cb0c2699a5d676649",
  measurementId: "G-5ZKSBKRH3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);
