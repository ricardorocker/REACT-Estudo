import { doc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/config";

export const useDeleteDocument = (docCollection) => {

    const deleteDocument = async (docId) => {
        await deleteDoc(doc(db, docCollection, docId));
    }

    deleteDocument();

    return { deleteDocument }
}