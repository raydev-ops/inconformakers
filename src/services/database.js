import { FBdb } from "./firebaseConfig"

export const logDB = () => {
  FBdb.collection("user")
    .get()
    .then(snap => {
      snap.forEach(doc => {
        console.log(doc.data())
      })
    })
    .catch(error => error)
}

export const RegisterUser = user => {
  return FBdb.collection("user")
    .doc()
    .set(user)
}
