import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import necessary functions
import { projectStorage, projectFirestore } from "../firebase/config"; // Ensure you're using the correct path

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); // Image URL after upload

  useEffect(() => {
    // Create a storage reference using the new modular syntax
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = collection(projectFirestore, "images"); // Use the collection function

    // Upload the file and use the modular method uploadBytesResumable
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate progress
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // Get the download URL after the upload completes
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = serverTimestamp();
        await addDoc(collectionRef, { url: downloadURL, createdAt }); // Use addDoc to add document
        setUrl(downloadURL);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
