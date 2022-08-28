// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqKoUdET5pBidIAJQFMI8bT3IcPnJKRQM",
  authDomain: "desafioreact-50a5e.firebaseapp.com",
  projectId: "desafioreact-50a5e",
  storageBucket: "desafioreact-50a5e.appspot.com",
  messagingSenderId: "674589512174",
  appId: "1:674589512174:web:3ad32242476acef6687eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
