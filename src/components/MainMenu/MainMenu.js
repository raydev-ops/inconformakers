import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

class MainMenu extends React.Component {
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
            </ul>
          )
        }}
      />
    )
  }
}

export default MainMenu
