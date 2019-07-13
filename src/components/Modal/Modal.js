import React from "react"

const Modal = props => {
  return (
    <div className="modal p-bottom-100 p-top-100">
      <div className="modal-content background-white">{props.children}</div>
    </div>
  )
}

export default Modal
