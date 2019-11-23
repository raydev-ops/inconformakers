import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/PageWrapper"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = props => {
  return (
    <Layout>
      <div>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2 className="m-bottom-20 color-white tt-uppercase">Blog</h2>
        <div className="grid m-bottom-50">
          {props.data.allWordpressPost.edges.map((post, index) => (
            <div key={index} className="sm-4-12">
              <PostItem {...post} />
            </div>
          ))}
        </div>
      </div>
      <div />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(limit: 3) {
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
