import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB19JISWE0VSprL2MDtjWLz5wStOOqGOn8",
  authDomain: "pozhgarant.firebaseapp.com",
  projectId: "pozhgarant",
  storageBucket: "pozhgarant.firebasestorage.app",
  messagingSenderId: "23329766502",
  appId: "1:23329766502:web:e38225182b98a605a181a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  
