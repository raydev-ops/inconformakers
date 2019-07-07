import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/PageWrapper"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="grid">
        {props.data.allWordpressWpEventos.edges.map((post, index) => (
          <div key={index} className="sm-4-12">
            <PostItem {...post} />
          </div>
        ))}
      </div>
      <div />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressWpEventos(limit: 3) {
      edges {
        node {
          title
          date
          path
          content
          featured_media {
            localFile {
              childImageSharp {
                resolutions {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
