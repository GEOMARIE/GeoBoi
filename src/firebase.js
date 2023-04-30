import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDus3JOzDkAPRTAwNgEoZZHgDXEvVIfQC0",
  authDomain: "geoboi-26139.firebaseapp.com",
  projectId: "geoboi-26139",
  storageBucket: "geoboi-26139.appspot.com",
  messagingSenderId: "500073737915",
  appId: "1:500073737915:web:a5827e224c3ef252b2c39e"
};
const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()