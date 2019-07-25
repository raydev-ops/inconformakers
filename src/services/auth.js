import { FBauth } from "./firebaseConfig"
import { GetSingleUser } from "./database"

export const LoginFN = (email, password) => {
  return FBauth.signInWithEmailAndPassword(email, password)
}

export const CreateUserFN = (email, password) => {
  return FBauth.createUserWithEmailAndPassword(email, password)
}

export const WatchAuth = fn => {
  FBauth.onAuthStateChanged(user => fn(user))
}

export const WatchAndGetUserDetails = fn => {
  return FBauth.onAuthStateChanged(async user => {
    try {
      const details = await GetSingleUser(user.uid)
      fn({
        ...details,
        uid: user.uid,
      })
    } catch (error) {}
  })
}

export const LogoutFN = () => {
  FBauth.signOut()
}
