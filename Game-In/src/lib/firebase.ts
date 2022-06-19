import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore"
import { doc, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDc-uBIjO56cELxjVV7AQTI_75ldQZtGtU",
    authDomain: "gamein-8b9b9.firebaseapp.com",
    projectId: "gamein-8b9b9",
    storageBucket: "gamein-8b9b9.appspot.com",
    messagingSenderId: "247685321977",
    appId: "1:247685321977:web:0615f8e3da06503915fe28"
};
const app = firebase.initializeApp(firebaseConfig);


export const AddAccount = async (uid, email, photoUrl, username) =>{
   await setDoc(doc(db, "Registered Accounts", uid), {
        "email": email,
        "photoUrl": photoUrl,
        "username": username
   })
}

export const AddMessage = async (uid, msg, time, user) =>{
    await setDoc(doc(db, uid, `${time}`), {
        "message": msg,
        "time": time,
        "username": user
    })
}
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider;
export const emailProvider = new firebase.auth.EmailAuthProvider()
export const db = getFirestore(app);

