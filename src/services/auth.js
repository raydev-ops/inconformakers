import { FBauth } from "./firebaseConfig"
console.log("run")

export const login = (email, password) => {
  return FBauth.signInWithEmailAndPassword(email, password)
}

export const createUser = (email, password) => {
  return FBauth.createUserWithEmailAndPassword(email, password)
}

FBauth.onAuthStateChanged(user => {
  if (user) {
    return console.log("haslogged", user)
  }
  console.log("not logout")
})

export const logout = () => {
  FBauth.signOut()
}
