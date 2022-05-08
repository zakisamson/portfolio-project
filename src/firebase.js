import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MKiM5f4SKfl4TiqQgfTJ5FE1VawqOw4",
  authDomain: "portfolio-project-53333.firebaseapp.com",
  projectId: "portfolio-project-53333",
  storageBucket: "portfolio-project-53333.appspot.com",
  messagingSenderId: "585332190721",
  appId: "1:585332190721:web:2c00c88d8965c873399a00",
  measurementId: "G-8LVBT9PTW8",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }