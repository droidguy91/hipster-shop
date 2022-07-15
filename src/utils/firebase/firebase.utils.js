import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtA5milt1CZfMslZn_bP42eKKRMP-MZrU",
  authDomain: "hipster-clothing-db.firebaseapp.com",
  projectId: "hipster-clothing-db",
  storageBucket: "hipster-clothing-db.appspot.com",
  messagingSenderId: "985157967299",
  appId: "1:985157967299:web:a453d87313ad96b0e13176",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSanapshot = await getDoc(userDocRef);

  console.log(userDocRef);
  console.log(userSanapshot.exists());

  if (!userSanapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
