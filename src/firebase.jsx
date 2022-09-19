import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCYoI2aZze01ihlWIg-hlp3EGGolDch_zw",
  authDomain: "clone-b6c18.firebaseapp.com",
  projectId: "clone-b6c18",
  storageBucket: "clone-b6c18.appspot.com",
  messagingSenderId: "1095406490381",
  appId: "1:1095406490381:web:eac850ee2c4c1a7dbc5644",
  measurementId: "G-H2FBPN92FK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
