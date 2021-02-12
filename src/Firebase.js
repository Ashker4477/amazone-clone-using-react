import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMY4C4M9zPC9E7_7rSE0uhVAS5wJ7IvnA",
  authDomain: "e-clone-a1269.firebaseapp.com",
  projectId: "e-clone-a1269",
  storageBucket: "e-clone-a1269.appspot.com",
  messagingSenderId: "276051651476",
  appId: "1:276051651476:web:2e175a0b3936063bf0bd81",
  measurementId: "G-J5FMQHZ4TS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
