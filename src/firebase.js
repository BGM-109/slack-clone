import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBtOEYk3_tZngv-X6RuOfOnSJNscOPuEbg",
    authDomain: "slack-clone-sonny-e4e03.firebaseapp.com",
    projectId: "slack-clone-sonny-e4e03",
    storageBucket: "slack-clone-sonny-e4e03.appspot.com",
    messagingSenderId: "244592345224",
    appId: "1:244592345224:web:4c1242cdec07c88c091f3d"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth ,provider }