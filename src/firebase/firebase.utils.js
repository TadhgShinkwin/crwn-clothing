import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAVof_V6FQBZjvswmyd9jbtsfHQHXcG06o",
  authDomain: "crwn-db-8fc0e.firebaseapp.com",
  projectId: "crwn-db-8fc0e",
  storageBucket: "crwn-db-8fc0e.appspot.com",
  messagingSenderId: "294555257909",
  appId: "1:294555257909:web:84720b3ad3351d4ae8b57c",
  measurementId: "G-NZ62MX50PK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
