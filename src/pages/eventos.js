import React from "react"
import { graphql } from "gatsby"
import Proptypes from "prop-types"
import Layout from "../components/PageWrapper"
import { Link } from "gatsby"

const NotFoundPage = props => {
  const posts = props.data.allWordpressPost.edges
  return (
    <Layout>
      <div className="container m-bottom-50">
        <h1 className="color-dark m-bottom-20">Eventos</h1>
        {posts.map(({ node }) => {
          const img =
            node.featured_media.localFile.childImageSharp.resolutions.src
          return (
            <div
              key={node.id}
              className="m-bottom-30 p-bottom-30 bb-lightdarken inline-card"
            >
              <div className="w-100 inline-card-image-wrapper">
                <img src={img} />
              </div>
              <div className="inline-card-content-wrapper">
                <p className="m-bottom-10 fs-5 fw-bold color-dark">
                  {node.title}
                </p>
                <p className="m-bottom-5 color-dark">
                  <span className=" tt-uppercas color-gray">Onde:</span>{" "}
                  {node.acf.data}
                </p>
                <p className="m-bottom-15 color-dark">
                  <span className=" tt-uppercas color-gray">Quando:</span>{" "}
                  {node.acf.onde}
                </p>
                <p
                  className="m-bottom-15 fs-7 color-dark"
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
                <Link className="color-primary" to={node.path}>
                  Ver como foi
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: Proptypes.shape({
    allWordpressPost: Proptypes.shape({ edges: Proptypes.array.isRequired }),
  }).isRequired,
}

export default NotFoundPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          excerpt
          title
          path
          status
          template
          format
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 600, height: 400) {
                  src
                }
              }
            }
          }
          acf {
            data
            horario
            onde
          }
        }
      }
    }
  }
`
