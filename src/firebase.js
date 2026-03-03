import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFO-gWcOALhRUUHP8YHFQM8uGrASjjpx4",
  authDomain: "msaas-9e82a.firebaseapp.com",
  projectId: "msaas-9e82a",
  storageBucket: "msaas-9e82a.firebasestorage.app",
  messagingSenderId: "297322776876",
  appId: "1:297322776876:web:997461d305b80b2e888489"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Export Firestore instance for use in other modules