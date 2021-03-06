import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMumz4yd0GEuKb_cwPBbj_8bL8lEkHSTU",
  authDomain: "whatsapp-clone-d5263.firebaseapp.com",
  projectId: "whatsapp-clone-d5263",
  storageBucket: "whatsapp-clone-d5263.appspot.com",
  messagingSenderId: "500275232539",
  appId: "1:500275232539:web:dca91df770457765a69dbe",
  measurementId: "G-BHY8G4L330",
};

// initialize the app with that config
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
