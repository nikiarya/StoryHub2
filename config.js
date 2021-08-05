import firebase from 'Firebase'
require ("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCoqwyMrBSN6dP-x_0W-_37BO87J0vKQ-U",
    authDomain: "storyhub-efbe4.firebaseapp.com",
    databaseURL: "https://storyhub-efbe4-default-rtdb.firebaseio.com",
    projectId: "storyhub-efbe4",
    storageBucket: "storyhub-efbe4.appspot.com",
    messagingSenderId: "702158992476",
    appId: "1:702158992476:web:e1052e7c2017d14aea2299"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore(); 