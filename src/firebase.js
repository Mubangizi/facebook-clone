import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqptNlsHeNWpWUbSXdG5tJh3STD5YsT-k",
  authDomain: "facebook-clone-9a966.firebaseapp.com",
  databaseURL: "https://facebook-clone-9a966.firebaseio.com",
  projectId: "facebook-clone-9a966",
  storageBucket: "facebook-clone-9a966.appspot.com",
  messagingSenderId: "805537587741",
  appId: "1:805537587741:web:6e63384cd378e871ebdcf4",
  measurementId: "G-62RVMVSGL1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
