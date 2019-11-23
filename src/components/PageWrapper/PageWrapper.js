import React from "react"
import PropTypes from "prop-types"
// import Header from "./../Header/Header"

const PageWrapper = ({ children }) => {
  return (
    <>
      <div className="template">
        {/* <Header {...otherProps} /> */}
        <main className="container_ w-100">
          <div className="grid">
            <div className={"sm-12-12 overflow-scroll"}>{children}</div>
          </div>
        </main>
      </div>
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper
