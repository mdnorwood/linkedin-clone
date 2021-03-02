import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDVhZ_rss8Go20CVKDlzuFs7IxGPluev1s",
  authDomain: "linkedin-clone-f439a.firebaseapp.com",
  projectId: "linkedin-clone-f439a",
  storageBucket: "linkedin-clone-f439a.appspot.com",
  messagingSenderId: "451791971580",
  appId: "1:451791971580:web:daf5ceae61fc27b1e06379"
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
