import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyu9slS-Agsj_Y8IX9vGOlaOkIvu1PVO8",
  authDomain: "facebook-clone-d96ce.firebaseapp.com",
  projectId: "facebook-clone-d96ce",
  storageBucket: "facebook-clone-d96ce.appspot.com",
  messagingSenderId: "796423688518",
  appId: "1:796423688518:web:b86762730f62891770d547"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage}