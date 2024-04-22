// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZgpzxwAzWuWbWyLLoG6o5F2q0x99sldM",
  authDomain: "ejemploclase-33769.firebaseapp.com",
  projectId: "ejemploclase-33769",
  storageBucket: "ejemploclase-33769.appspot.com",
  messagingSenderId: "89147526278",
  appId: "1:89147526278:web:6afbfae61911f51597d507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const setDoc = async (email, password) => {
    await addDoc(collection(db, "users"), {
        email: email,
        password: password
    })
    console.log("Tarea guardada correctamente:", email, password);
}
