import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAo4g5_XDKnwXoMB3VPJkrCsE0WRy64tco",
  authDomain: "whatsapp-caa96.firebaseapp.com",
  projectId: "whatsapp-caa96",
  storageBucket: "whatsapp-caa96.appspot.com",
  messagingSenderId: "819668372905",
  appId: "1:819668372905:web:c3dd67d68ec8e67bac48b8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
