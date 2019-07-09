import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyBtISFSVaov9wmkv6aHMDajIE2iGDGnPVs",
  authDomain: "inconformakers-292ee.firebaseapp.com",
  databaseURL: "https://inconformakers-292ee.firebaseio.com",
  projectId: "inconformakers-292ee",
  storageBucket: "",
  messagingSenderId: "946260564561",
  appId: "1:946260564561:web:bff9868cb7739640",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const FBauth = firebase.auth()
export const FBdb = firebase.firestore()
