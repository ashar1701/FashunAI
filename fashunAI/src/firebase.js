// React-native app code
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNnS93VGI6E-6_1MNCi0Gt66wJytnIpk4",
    authDomain: "wardrobe-app-ce375.firebaseapp.com",
    projectId: "wardrobe-app-ce375",
    storageBucket: "wardrobe-app-ce375.appspot.com",
    messagingSenderId: "724057646307",
    appId: "1:724057646307:web:932507a41b11e851e591d6",
    measurementId: "G-73BY08STSW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const database = firebase.firestore();

export default database;