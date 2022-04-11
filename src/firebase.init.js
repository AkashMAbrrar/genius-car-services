// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtYzERynPYHPUCizbVrjKLdSZ4BD7Paoo",
    authDomain: "genius-car-services-78784.firebaseapp.com",
    projectId: "genius-car-services-78784",
    storageBucket: "genius-car-services-78784.appspot.com",
    messagingSenderId: "404719190379",
    appId: "1:404719190379:web:3b9e945788801963248c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;