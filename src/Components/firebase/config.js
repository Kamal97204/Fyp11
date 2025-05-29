// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzKP1pBV5kHPp-Bf0AHtWFapMk5h7HTQk",
  authDomain: "fypsupervisor-84bd6.firebaseapp.com",
  projectId: "fypsupervisor-84bd6",
  storageBucket: "fypsupervisor-84bd6.appspot.com",
  messagingSenderId: "84815380466",
  appId: "1:84815380466:web:33ccfadf9f7e44261e356b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);