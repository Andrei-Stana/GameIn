import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDc-uBIjO56cELxjVV7AQTI_75ldQZtGtU",
    authDomain: "gamein-8b9b9.firebaseapp.com",
    projectId: "gamein-8b9b9",
    storageBucket: "gamein-8b9b9.appspot.com",
    messagingSenderId: "247685321977",
    appId: "1:247685321977:web:0615f8e3da06503915fe28"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider;