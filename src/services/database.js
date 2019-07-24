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

export const RegisterUser = (user, id = "") => {
  return FBdb.collection("user")
    .doc(id)
    .set(user)
}
