import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

const Header = ({ absolute }) => {
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
    <div
      className={`m-bottom-50 header w-100 ${
        absolute ? "p-absolute" : "background-dark "
      }`}
    >
      <div className="container h-100 p-top-30 p-bottom-30">
        <div className="d-flex h-100 d-flex-align-center d-flex-space-between">
          <Link to="/">
            <h1 className="color-white fs-5">{siteName}</h1>
          </Link>
          <ul className="d-flex">
            <li>
              <Link to="/" className="color-white m-left-20">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" className="color-white m-left-20">
                Eventos
              </Link>
            </li>
            <li>
              <Link to="/" className="color-white m-left-20">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/" className="color-white m-left-20">
                Fazer parte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  absolute: PropTypes.bool,
}

Header.defaultProps = {
  absolute: false,
}

export default Header
