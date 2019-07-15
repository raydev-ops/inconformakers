import React from "react"
import Header from "./../Header/Header"

const PageWrapper = props => {
  return (
    <>
      <div className="template">
        <Header {...props} />
        <main className="container m-top-60 w-100">
          <div className="grid">
            <div className={`sm-12-12 overflow-scroll`}>{props.children}</div>
          </div>
        </main>
      </div>
    </>
  )
}

export default PageWrapper
