// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBORi0udvOzPYM3dIYAQlzEdHgKVpnWqR8",
  authDomain: "faangcode-9b510.firebaseapp.com",
  projectId: "faangcode-9b510",
  storageBucket: "faangcode-9b510.appspot.com",
  messagingSenderId: "941377739415",
  appId: "1:941377739415:web:e9cfb3952f5400f21d67d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export { auth, provider, firestore };