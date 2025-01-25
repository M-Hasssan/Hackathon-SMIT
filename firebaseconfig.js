// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAZ9bZCm-u7gNclmq_Ck6UWJO6f_PsPjpY",
    authDomain: "hackthon-43887.firebaseapp.com",
    projectId: "hackthon-43887",
    storageBucket: "hackthon-43887.firebasestorage.app",
    messagingSenderId: "44677750823",
    appId: "1:44677750823:web:d01c31b010e32d8c6aee02"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
