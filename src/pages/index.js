import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/PageWrapper"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="grid">
        {props.data.allWordpressPost.edges.map((post, index) => (
          <div key={index} className="sm-6-12">
            <PostItem {...post} />
          </div>
        ))}
      </div>
      <Link to="posts/2">Posts antigos</Link>
      <div />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(limit: 6) {
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
