import React from "react"
import Header from "./../Header/Header"
import Modal from "./../Modal"
import CreateUser from "./../CreateUser"

const PageWrapper = props => {
  return (
    <>
      <div className="template">
        <Header />
        <main className="container m-top-60 w-100">
          <div className="grid">
            <div className={`sm-12-12 overflow-scroll`}>{props.children}</div>
          </div>
        </main>
        <Modal>
          <CreateUser />
        </Modal>
      </div>
    </>
  )
}

export default PageWrapper
