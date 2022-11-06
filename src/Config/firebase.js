import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXoghUnWwn-BTmzVmQ24hfNO5te32RPCs",
  authDomain: "condoinfo-ab19c.firebaseapp.com",
  projectId: "condoinfo-ab19c",
  storageBucket: "condoinfo-ab19c.appspot.com",
  messagingSenderId: "587955246081",
  appId: "1:587955246081:web:8cf850099f2f0572dd1c00",
  measurementId: "G-ZHDV17NESN"
};

if (!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };