import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const UseFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        // Create a reference to the collection
        const colRef = collection(projectFirestore, collectionName);

        // Create a query to order documents by "createdAt" in descending order
        const q = query(colRef, orderBy("createdAt", "desc"));

        // Subscribe to snapshots
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        // Cleanup subscription on unmount
        return () => unsub();
    }, [collectionName]); // Make sure to include collectionName as a dependency

    return { docs };
};

export default UseFirestore;
