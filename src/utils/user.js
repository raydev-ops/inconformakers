export const formatUserInfo = user => {
  const { email, uid } = user
  return {
    email,
    uid,
  }
}

export const formatException = content => {
  const index = content.indexOf(".")
  return `${content.slice(0, index)}...`
}
