import {
  getAuth,
  createWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(null);
  
  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
};
