import { FBauth } from "./firebaseConfig"

export const LoginFN = (email, password) => {
  return FBauth.signInWithEmailAndPassword(email, password)
}

export const CreateUserFN = (email, password) => {
  return FBauth.createUserWithEmailAndPassword(email, password)
}

export const WatchAuth = fn => {
  FBauth.onAuthStateChanged(user => fn(user))
}

export const LogoutFN = () => {
  FBauth.signOut()
}
