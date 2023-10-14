import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCeyqAf955D2Cy02hQByw-8z-FhL7ZjpyE",
  authDomain: "react-olx-8625a.firebaseapp.com",
  projectId: "react-olx-8625a",
  storageBucket: "react-olx-8625a.appspot.com",
  messagingSenderId: "560542937749",
  appId: "1:560542937749:web:2325179e860337146ca19c",
  measurementId: "G-CT0NNJN0SL"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

export { auth, firebaseApp, firestore }