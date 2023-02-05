import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBMrnm-adxvEpqomY0qpsQUp0srgxd6xgQ",
  authDomain: "olxpro-4aa5b.firebaseapp.com",
  projectId: "olxpro-4aa5b",
  storageBucket: "olxpro-4aa5b.appspot.com",
  messagingSenderId: "833552248793",
  appId: "1:833552248793:web:503630459e6230006633c8",
  measurementId: "G-Q18TYG28KJ",
};

export default firebase.initializeApp(firebaseConfig)