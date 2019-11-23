import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

const Header = () => {
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
    <div>
      <div className="background-dark">
        <div className="container h-100">
          <div className="d-flex h-100 d-flex-align-center d-flex-space-between">
            <Link to="/">
              <h1 className="color-white fs-custom">{siteName}</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
