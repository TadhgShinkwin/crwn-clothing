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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    console.log("NEW USER DISPLAY NAME", displayName);
    console.log("NEW USER EMAIL", email);

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  } else console.log("snapshot exists!")

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
