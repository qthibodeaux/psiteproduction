// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDT0jr77uwRhCisXdKW8ZrKDsynHdSg6d8",

  authDomain: "photosite-60083.firebaseapp.com",

  projectId: "photosite-60083",

  storageBucket: "photosite-60083.appspot.com",

  messagingSenderId: "403174285660",

  appId: "1:403174285660:web:d5efb0a861d38089d5a199",

  measurementId: "G-0EQ31M496S"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }