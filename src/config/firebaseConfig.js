import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
    apiKey: "AIzaSyACwLX0UFSUVxNMkzPhdAys0XDZ1IVISMw",
    authDomain: "fullstack-d4677.firebaseapp.com",
    databaseURL: "https://fullstack-d4677.firebaseio.com",
    projectId: "fullstack-d4677",
    storageBucket: "fullstack-d4677.appspot.com",
    messagingSenderId: "673266031312",
    appId: "1:673266031312:web:583228cfa769d3ae429cd5",
    measurementId: "G-Y256C6F40W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;