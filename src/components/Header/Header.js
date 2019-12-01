import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import MainMenu from "../MainMenu/MainMenu"

const Header = ({ absolute }) => {
  const { site, allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
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
    `
  )

  const siteName = _get(site, "siteMetadata.title", "")
  const menu = allWordpressWpApiMenusMenusItems.edges[0].node.items
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
          <MainMenu menu={menu} />
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
