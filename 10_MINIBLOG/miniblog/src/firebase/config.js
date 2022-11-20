import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRZ32CBwQxfkas3MNTQSgJH9gJ_-K6xnc",
  authDomain: "miniblog-7339b.firebaseapp.com",
  projectId: "miniblog-7339b",
  storageBucket: "miniblog-7339b.appspot.com",
  messagingSenderId: "409423693523",
  appId: "1:409423693523:web:f0abaaacfc0c52639ef626",
};

const app = initializeApp(firebaseConfig);
const { db } = getFirestore(app);

export { db };
