import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAI_vyZkQptn4so3eQjBZhllbVyKV5oaRA",
    authDomain: "fyre-beats.firebaseapp.com",
    projectId: "fyre-beats",
    storageBucket: "fyre-beats.appspot.com",
    messagingSenderId: "586863810068",
    appId: "1:586863810068:web:319bc9982e913ec891b901",
    measurementId: "G-19XK7Q78NE"
};

const fbApp = firebase.initializeApp(firebaseConfig);
export const auth = fbApp.auth();
export const db = fbApp.firestore();
export const database = firebase.database();
console.log(database)
export const store = firebase.storage(fbApp).ref();
export default fbApp;