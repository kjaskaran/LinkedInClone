import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtG5ml464eJGPTK_fW2jS_jxLOcGVWLK4",
  authDomain: "linkedin-clone-dc007.firebaseapp.com",
  projectId: "linkedin-clone-dc007",
  storageBucket: "linkedin-clone-dc007.appspot.com",
  messagingSenderId: "34221275861",
  appId: "1:34221275861:web:cd13fbbb4e6903cf3b805c",
  measurementId: "G-LQRSSF7VVS",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
