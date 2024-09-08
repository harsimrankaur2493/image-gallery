// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_C_sSBuo56DJv4pLG1QRpFwfFXgxHOc",
  authDomain: "imagegallery-21bcc.firebaseapp.com",
  projectId: "imagegallery-21bcc",
  storageBucket: "imagegallery-21bcc.appspot.com",
  messagingSenderId: "935159873041",
  appId: "1:935159873041:web:a03704b0c3c7edbd47fbb0",
  measurementId: "G-3RC7B14M7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Storage
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

// Export the initialized Firestore and Storage instances, and serverTimestamp function
export { projectStorage, projectFirestore, serverTimestamp };
