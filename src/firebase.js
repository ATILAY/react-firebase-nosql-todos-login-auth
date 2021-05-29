import firebase from 'firebase/app'
import "firebase/firestore"
// import "firebase/auth"
import "firebase/functions"

import 'firebase/auth'

const app =  firebase.initializeApp( {
  apiKey: "AIzaSyD9l-44LUqQpo6TpFe1Xu7Zl9wELuWO29M",
  authDomain: "auth-todo-83419.firebaseapp.com",
  projectId: "auth-todo-83419",
  storageBucket: "auth-todo-83419.appspot.com",
  messagingSenderId: "460624262281",
  appId: "1:460624262281:web:541520ef36ad3ade390258"
})

export const auth = app.auth()
// export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const functions = firebase.functions()

// export const firebase = firebase

export default app