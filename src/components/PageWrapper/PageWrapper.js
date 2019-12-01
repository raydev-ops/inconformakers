import React from "react"
import PropTypes from "prop-types"
import Header from "./../Header/Header"

const PageWrapper = ({ children, ...otherProps }) => {
  return (
    <>
      <div className="template">
        <Header {...otherProps} />
        <main className="w-100">
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper
