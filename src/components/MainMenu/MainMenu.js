import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { LogoutFN } from "../../services/auth"

class MainMenu extends React.Component {
  onLogoutHandler = e => {
    e.preventDefault()
    LogoutFN()
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query MainMenuQuery {
            allWordpressWpApiMenusMenusItems {
              edges {
                node {
                  items {
                    title
                    url
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <ul className="d-flex">
              {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                ({ title, url }, index) => {
                  return (
                    <li className="m-left-10" key={index}>
                      <Link
                        className="color-white tt-uppercase fs-custom"
                        to={url}
                      >
                        {title}
                      </Link>
                    </li>
                  )
                }
              )}
              {this.props.isLogged ? (
                <li className="m-left-10">
                  <a
                    onClick={this.onLogoutHandler}
                    className="color-white tt-uppercase fs-custom"
                    href="/#"
                  >
                    Sair
                  </a>
                </li>
              ) : (
                <React.Fragment>
                  <li className="m-left-10">
                    <a
                      onClick={this.props.openLoginHandler}
                      className="color-white tt-uppercase fs-custom"
                      href="/#"
                    >
                      Login
                    </a>
                  </li>
                  <li className="m-left-10">
                    <a
                      onClick={this.props.openCreateUserHandler}
                      className="color-white tt-uppercase fs-custom"
                      href="/#"
                    >
                      Criar Conta
                    </a>
                  </li>
                </React.Fragment>
              )}
            </ul>
          )
        }}
      />
    )
  }
}

export default MainMenu
