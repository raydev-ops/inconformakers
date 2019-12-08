import React from "react"
import _get from "lodash/get"
import { WatchAuth } from "../services/auth"

const Engajamento = props => {
  const [isLogged, setUserLogged] = React.useState(false)
  React.useEffect(() => {
    WatchAuth(user => {
      setUserLogged(!!user)
    })
  })
  const fileURL = _get(props, "acf.engajamento.source_url")
  return (
    <div>
      {isLogged ? (
        <div>
          <p className="color-white">Fazer download</p>
          <a target="blank" className="color-white" href={fileURL}>
            Download
          </a>
        </div>
      ) : (
        <p className="color-white">Criar conta</p>
      )}
    </div>
  )
}

export default Engajamento
