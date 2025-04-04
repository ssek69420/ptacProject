import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Zn1rLA4gmPtdcJIBIVeyN0UyDIWK9Gc",
  authDomain: "loginptac.firebaseapp.com",
  projectId: "loginptac",
  storageBucket: "loginptac.firebasestorage.app",
  messagingSenderId: "362184146729",
  appId: "1:362184146729:web:8fef66b2d442b69bf98138",
  measurementId: "G-GTC4KVQE4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}