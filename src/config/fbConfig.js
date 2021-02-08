import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDrpZjQCJv8UA0AM-6AuGpJBqEyo2N26Eg",
    authDomain: "redux-plan-5ba2a.firebaseapp.com",
    projectId: "redux-plan-5ba2a",
    storageBucket: "redux-plan-5ba2a.appspot.com",
    messagingSenderId: "846931109212",
    appId: "1:846931109212:web:47fbacae29f5f2b4d34d99",
    measurementId: "G-JGHRQR0CVH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;