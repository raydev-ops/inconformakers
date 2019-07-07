import React from "react"
import Header from "./../Header/Header"

const SideBar = () => {
  return (
    <div>
      <p>Sitebar</p>
    </div>
  )
}

const PageWrapper = props => {
  const { hideSidebar } = props
  return (
    <>
      <div className="template">
        <Header />
        <main className="container m-top-60">
          <div className="grid">
            <div className={`sm-${hideSidebar ? "12" : "8"}-12`}>
              {props.children}
            </div>
            <div className={`sm-${hideSidebar ? "12" : "4"}-12`}>
              <SideBar />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default PageWrapper
