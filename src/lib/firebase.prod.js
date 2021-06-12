import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAC1H2cCofU4kCNPXRUhK1GHzvu4p2MKG4",
    authDomain: "neatflix-290eb.firebaseapp.com",
    projectId: "neatflix-290eb",
    storageBucket: "neatflix-290eb.appspot.com",
    messagingSenderId: "151327682403",
    appId: "1:151327682403:web:5b7b0099d58950c71ced56"
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);
export {firebase};