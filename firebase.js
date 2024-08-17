// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3K0AjR9JRmSjCdN_FJd-GOvS_2fzKqsI",
    authDomain: "pantry-tracker-b0342.firebaseapp.com",
    projectId: "pantry-tracker-b0342",
    storageBucket: "pantry-tracker-b0342.appspot.com",
    messagingSenderId: "322187028619",
    appId: "1:322187028619:web:30df65123be24cc68f8c8e",
    measurementId: "G-KDGFBKHR31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }

