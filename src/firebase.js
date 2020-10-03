import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKGMrJu1v79pzIe58Ok6FnLB_A1I0yL_8",
  authDomain: "facebook-clone-f814a.firebaseapp.com",
  databaseURL: "https://facebook-clone-f814a.firebaseio.com",
  projectId: "facebook-clone-f814a",
  storageBucket: "facebook-clone-f814a.appspot.com",
  messagingSenderId: "1058539977089",
  appId: "1:1058539977089:web:3c008d4fff888aca4a9080",
  measurementId: "G-K5N6DTGL5B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
