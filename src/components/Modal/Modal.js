import React from "react"

const Modal = props => {
  const { updateModalContentHandler = () => {} } = props
  return (
    <div className="modal p-bottom-100 p-top-100">
      <div className="modal-content background-white">
        <button onClick={updateModalContentHandler}>Fechar</button>
        <div>{props.children}</div>
      </div>
    </div>
  )
}

export default Modal
