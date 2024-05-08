// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKMb1_qZZKw_405rsjPrJCxeGAixAheOI",
  authDomain: "internship-portal-demo.firebaseapp.com",
  projectId: "internship-portal-demo",
  storageBucket: "internship-portal-demo.appspot.com",
  messagingSenderId: "350404062854",
  appId: "1:350404062854:web:a888a074a2a89b7d4e2b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;