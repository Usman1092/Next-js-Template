// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDu4vvflMgCpunlCmpq1prDuoFH1s3yFPA",
  authDomain: "learnfirebase-9c62a.firebaseapp.com",
  databaseURL: "https://learnfirebase-9c62a-default-rtdb.firebaseio.com",
  projectId: "learnfirebase-9c62a",
  storageBucket: "learnfirebase-9c62a.appspot.com",
  messagingSenderId: "341712701053",
  appId: "1:341712701053:web:5471f9986e5bf6e2399314",
  measurementId: "G-4QH7FPS69S",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider= new GithubAuthProvider();

export { auth, provider,gitProvider };