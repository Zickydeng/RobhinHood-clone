import firebase from 'firebase' 

const firebaseConfig = {
    apiKey: "AIzaSyAvIboRG0_UeKIgxMrgGuy-rgx0_BOubLk",
    authDomain: "robinhood-42ae7.firebaseapp.com",
    projectId: "robinhood-42ae7",
    storageBucket: "robinhood-42ae7.appspot.com",
    messagingSenderId: "849180226443",
    appId: "1:849180226443:web:9f05b81b97f02fd2c7b58e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
