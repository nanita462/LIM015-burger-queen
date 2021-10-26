import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  export const app = firebase.initializeApp({
    apiKey: "AIzaSyDcS5aLrul3-a6gTjiOzwT-7XcKnQj2IE4",
    authDomain: "burger-queen-a491c.firebaseapp.com",
    projectId: "burger-queen-a491c",
    storageBucket: "burger-queen-a491c.appspot.com",
    messagingSenderId: "559396817438",
    appId: "1:559396817438:web:0122edde932456a407fc0f"
});

export const auth = app.auth();
export const firestore = app.firestore();