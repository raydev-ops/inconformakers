import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/PageWrapper"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const Blog = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {props.data.allWordpressPost.edges.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
      <div />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          date
          excerpt
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
