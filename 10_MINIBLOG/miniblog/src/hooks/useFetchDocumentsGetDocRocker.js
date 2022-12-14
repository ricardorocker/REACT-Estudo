import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, id = null, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      if (id) {
        const docRef = await doc(db, docCollection, id)

        try {
          const docSnap = await getDoc(docRef);
          setDocument(
            docSnap.data()
          );
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error);
          setLoading(false);
        }

      } else {

        const collectionRef = await collection(db, docCollection);

        try {
          let q;

          if (search) {
            q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"));
          } else {
            q = await query(collectionRef, orderBy("createdAt", "desc"));
          }


          await onSnapshot(q, (querySnapshot) => {
            setDocuments(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          });

          setLoading(false);

        } catch (error) {
          console.log(error);
          setError(error);

          setLoading(false);
        }
      };
    }

    loadData();
  }, [docCollection, id, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return { documents, document, error, loading };
};
