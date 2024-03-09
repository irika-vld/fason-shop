import { initializeApp } from "firebase/app";

const API_KEY = import.meta.env.VITE_FB_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_FB_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_FB_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_FB_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_FB_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_FB_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
