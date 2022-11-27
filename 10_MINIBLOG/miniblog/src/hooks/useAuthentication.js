import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  console.log("cancelled: ", cancelled);
  const auth = getAuth();

  function checkIfIsCancelled() {
    console.log("cancelled: ", cancelled);
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    console.log("cancelled: ", cancelled);
    checkIfIsCancelled();
    console.log("cancelled: ", cancelled);
    setloading(true);
    console.log("cancelled: ", cancelled);
    setError(null);
    console.log("cancelled: ", cancelled);

    try {
      console.log("cancelled: ", cancelled);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });
      setloading(false);
      console.log("cancelled: ", cancelled);
      return user;
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres!";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu erro, por favor tente mais tarde.";
      }
      setError(systemErrorMessage);
    }
    setloading(false);
  };

  // logout - sign out
  const logout = () => {
    console.log("cancelled: ", cancelled);
    checkIfIsCancelled();
    console.log("cancelled: ", cancelled);

    signOut(auth);
  };

  // login - sign in
  const login = async (data) => {
    console.log("cancelled: ", cancelled);
    checkIfIsCancelled();

    setloading(true);
    setError(false);
    console.log("cancelled: ", cancelled);

    try {
      console.log("cancelled: ", cancelled);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("cancelled: ", cancelled);
      setloading(false);
    } catch (error) {
      let systemErrorMessage;
      if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por fazer tente mais tarde.";
      }

      setError(systemErrorMessage);
      setloading(false);
    }
  };

  useEffect(() => {
    setCancelled(true);
  }, []);

  return { createUser, login, logout, error, loading, auth };
};
