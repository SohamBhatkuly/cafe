// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Import the authentication module if needed

const firebaseConfig = {
  apiKey: "AIzaSyBHi5YoAB_zAIDx3AP1__01dUBj_AFPvpU",
  authDomain: "kafe-6f7b4.firebaseapp.com",
  projectId: "kafe-6f7b4",
  storageBucket: "kafe-6f7b4.appspot.com",
  messagingSenderId: "614783248513",
  appId: "1:614783248513:android:2d637749c59c27f1790580",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
