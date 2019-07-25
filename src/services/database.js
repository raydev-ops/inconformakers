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

export const RegisterNewDocument = (doc, id = "", prefix = "user") => {
  return FBdb.collection(prefix)
    .doc(id)
    .set(doc)
}

export const DeleteDocument = (prefix, id) => {
  return FBdb.collection(prefix)
    .doc(id)
    .delete()
}

export const RegisterUser = (user, id = "") => {
  return RegisterNewDocument(user, id)
}

export const RegisterEventInteresting = (user, id) => {
  return RegisterNewDocument(user, id, "event")
}

export const GetSingleUser = uid => {
  return FBdb.collection("user")
    .doc(uid)
    .get()
    .then(doc => {
      return doc.data()
    })
    .catch(error => error)
}
