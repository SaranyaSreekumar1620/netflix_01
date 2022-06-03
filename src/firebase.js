import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRY3nX3Npio2TUzXAhJ7rm7VG0GjULCwc",
  authDomain: "netflix-d4d2f.firebaseapp.com",
  projectId: "netflix-d4d2f",
  storageBucket: "netflix-d4d2f.appspot.com",
  messagingSenderId: "954326267353",
  appId: "1:954326267353:web:7af3a784cd8a42284295c8",
  measurementId: "G-SP6N2LD4FM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
