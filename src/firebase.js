import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABGbB4CrZEp9necAPXOqYtWr_7LwIlt20",
  authDomain: "facebook-clone-e5d99.firebaseapp.com",
  projectId: "facebook-clone-e5d99",
  storageBucket: "facebook-clone-e5d99.appspot.com",
  messagingSenderId: "484062369465",
  appId: "1:484062369465:web:c9f7eda8ae9750aa50ed68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
