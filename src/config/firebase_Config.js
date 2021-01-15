import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDtYl-sBtwiJwPNuNxRMB3Y4GmUygSwDzo",
  authDomain: "trail-project-2-de126.firebaseapp.com",
  databaseURL: "https://trail-project-2-de126.firebaseio.com",
  projectId: "trail-project-2-de126",
  storageBucket: "trail-project-2-de126.appspot.com",
  messagingSenderId: "294952120457",
  appId: "1:294952120457:web:c8d1b937e0b24063f9d658",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
