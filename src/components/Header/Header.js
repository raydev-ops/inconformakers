import React from "react"
// import MainMenu from "../MainMenu"
import { Link, useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import Modal from "../Modal/Modal"
import CreateUser from "../CreateUser/CreateUser"
import Login from "../Login/Login"
import Private from "../Private"

const mapOfComponents = {
  login: Login,
  createUser: CreateUser,
}

const Header = props => {
  const [modal, updateModalContent] = React.useState(null)
  const Component = mapOfComponents[modal] || null
  const updateModalContentHandler = (modal = null) => {
    updateModalContent(modal)
  }
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const siteName = _get(site, "siteMetadata.title", "")
  return (
    <Private
      Component={selfProps => (
        <div>
          <div className="background-dark">
            <div className="container h-100">
              <div className="d-flex h-100 d-flex-align-center d-flex-space-between">
                <Link to="/">
                  <h1 className="color-white fs-custom">{siteName}</h1>
                </Link>
                {/* <MainMenu
                  {...props}
                  {...selfProps}
                  openLoginHandler={e => {
                    e.preventDefault()
                    updateModalContentHandler("login")
                  }}
                  openCreateUserHandler={e => {
                    e.preventDefault()
                    updateModalContentHandler("createUser")
                  }}
                /> */}
              </div>
            </div>
          </div>
          {Component && (
            <Modal updateModalContentHandler={updateModalContentHandler}>
              <Component onClose={() => updateModalContentHandler()} />
            </Modal>
          )}
        </div>
      )}
    />
  )
}

export default Header
