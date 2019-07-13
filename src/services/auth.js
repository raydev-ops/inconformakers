import { FBauth } from "./firebaseConfig"
console.log("run")

export const LoginFN = (email, password) => {
  return FBauth.signInWithEmailAndPassword(email, password)
}

export const CreateUserFN = (email, password) => {
  return FBauth.createUserWithEmailAndPassword(email, password)
}

FBauth.onAuthStateChanged(user => {
  if (user) {
    return console.log("haslogged", user)
  }
  console.log("not logout")
})

export const LogoutFN = () => {
  FBauth.signOut()
}
