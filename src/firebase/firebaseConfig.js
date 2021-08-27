import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7LXSflE7saJ_w9p0jqzGgbXZ4ZoQ053s",
    authDomain: "sprint3-be343.firebaseapp.com",
    projectId: "sprint3-be343",
    storageBucket: "sprint3-be343.appspot.com",
    messagingSenderId: "931622473873",
    appId: "1:931622473873:web:a5e7343f1f982d2a85ef30"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();

const facebook = new firebase.auth.FacebookAuthProvider();

export{
    db,
    google,
    facebook,
    firebase
}