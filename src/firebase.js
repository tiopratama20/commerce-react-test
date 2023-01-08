import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDTdsAblXsE56cPK2UGSzyoAR8ZhNthqwU",
  authDomain: "react-ecommerce-8f6b9.firebaseapp.com",
  projectId: "react-ecommerce-8f6b9",
  storageBucket: "react-ecommerce-8f6b9.appspot.com",
  messagingSenderId: "546733192451",
  appId: "1:546733192451:web:d768a6324b5e60262aa536",
  measurementId: "G-4JYY5H6HBT"
})

export const auth = app.auth()
export default app
