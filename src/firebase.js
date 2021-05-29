import firebase from 'firebase/app'
import "firebase/firestore"
// import "firebase/auth"
import "firebase/functions"

import 'firebase/auth'

const app =  firebase.initializeApp({
  apiKey: "AIzaSyDrH9of4ehN1Y9y5kBoZMBhf8NDcI8aj5U",
  authDomain: "auth-dev-1ed67.firebaseapp.com",
  projectId: "auth-dev-1ed67",
  storageBucket: "auth-dev-1ed67.appspot.com",
  messagingSenderId: "551085605839",
  appId: "1:551085605839:web:bbc59c4f1b3e411594c8ba"
})

export const auth = app.auth()
// export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const functions = firebase.functions()

// export const firebase = firebase

export default app