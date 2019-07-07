import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/PageWrapper"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {props.data.allWordpressWpEventos.edges.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
      <div />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressWpEventos(limit: 6) {
      edges {
        node {
          title
          date
          path
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
