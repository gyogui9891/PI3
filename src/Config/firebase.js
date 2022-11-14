import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyCXoghUnWwn-BTmzVmQ24hfNO5te32RPCs",
  authDomain: "condoinfo-ab19c.firebaseapp.com",
  projectId: "condoinfo-ab19c",
  storageBucket: "condoinfo-ab19c.appspot.com",
  messagingSenderId: "587955246081",
  appId: "1:587955246081:web:8cf850099f2f0572dd1c00",
  measurementId: "G-ZHDV17NESN"
};
// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

if (!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };