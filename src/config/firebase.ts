import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VITE_REACT_APP_API_KEY as string,
  authDomain: process.env.VITE_REACT_APP_AUTH_DOMAIN as string,
  projectId: process.env.VITE_REACT_APP_PROJECT_ID as string,
  storageBucket: process.env.VITE_REACT_APP_STORAGE_BUCKET as string,
  messagingSenderId: process.env.VITE_REACT_APP_MESSAGING_SENDER_ID as string,
  appId: process.env.VITE_REACT_APP_APP_ID as string,
};

export const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);

export const provider: GoogleAuthProvider = new GoogleAuthProvider();
