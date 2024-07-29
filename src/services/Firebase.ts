import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR7sH1T8A2-TV6mgrIqyOLiArhNtqwaFU",
    authDomain: "ecoaid-3ba21.firebaseapp.com",
    projectId: "ecoaid-3ba21",
    storageBucket: "ecoaid-3ba21.appspot.com",
    messagingSenderId: "484235083866",
    appId: "1:484235083866:web:dfc44282f001061b891863",
    measurementId: "G-2QSD0Y8XQH",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
