import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1WSLIj1K4tdD-XLsFWXUDPoGIkKhbfH8",
  authDomain: "clone-29956.firebaseapp.com",
  databaseURL: "https://clone-29956.firebaseio.com",
  projectId: "clone-29956",
  storageBucket: "clone-29956.appspot.com",
  messagingSenderId: "289974530327",
  appId: "1:289974530327:web:6027e682c4d37af3ce8752",
  measurementId: "G-ECSWDWX4FT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
