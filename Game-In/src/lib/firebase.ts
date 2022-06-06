import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB8wn7HD4-8zPBXXxJsp8BaVBIjaSzIakg",
    authDomain: "gamein-f32ef.firebaseapp.com",
    projectId: "gamein-f32ef",
    storageBucket: "gamein-f32ef.appspot.com",
    messagingSenderId: "921210864377",
    appId: "1:921210864377:web:f56a02e608a8a11adcd828",
    measurementId: "G-QKXL362STD"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider;


export const db = getFirestore(app);

