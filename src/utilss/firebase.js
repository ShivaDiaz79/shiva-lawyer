
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';



firebase.initializeApp({
    "projectId": "shiva-lawyer",
    "appId": "1:1007913506791:web:064a9883e7a03705900f42",
    "storageBucket": "shiva-lawyer.appspot.com",
    "apiKey": "AIzaSyDm34e-EmP5aoSJLu2f6cpXdZky_6sTwtY",
    "authDomain": "shiva-lawyer.firebaseapp.com",
    "messagingSenderId": "1007913506791"
  });

 // const auth = getAuth(app);
  export const firestore = firebase.firestore();
  export default firebase;