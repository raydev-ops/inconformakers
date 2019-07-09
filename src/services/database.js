import { FBdb } from "./firebaseConfig"

export const logDB = () => {
  FBdb.collection("users")
    .get()
    .then(snap => {
      snap.forEach(doc => {
        console.log(doc.data())
      })
    })
    .catch(error => error)
}

export const recordUser = async () => {
  try {
    await FBdb.collection("users")
      .doc()
      .set({
        name: "Sérgio",
        age: 28,
      })
    console.log("success")
  } catch (error) {
    console.log("error", error)
  }
}
