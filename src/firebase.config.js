import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYiuUHmg_uvIdInwH8pp5GNOHQBcOwSQ0",
    authDomain: "the-helper-25e22.firebaseapp.com",
    projectId: "the-helper-25e22",
    storageBucket: "the-helper-25e22.appspot.com",
    messagingSenderId: "1086363328865",
    appId: "1:1086363328865:web:f868d65d9e980330a16520",
    measurementId: "G-Q587CRVYF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const fireStore = getFirestore(app);
