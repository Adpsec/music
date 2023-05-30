import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD04ud5IT9jDnDdzYJIHwSz2dn7PgsQiDQ",
  authDomain: "musicos-2e3f0.firebaseapp.com",
  projectId: "musicos-2e3f0",
  storageBucket: "musicos-2e3f0.appspot.com",
  messagingSenderId: "70057160623",
  appId: "1:70057160623:web:99de70329c2d220ca7495a",
  measurementId: "G-SLDYTHYKWW"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}