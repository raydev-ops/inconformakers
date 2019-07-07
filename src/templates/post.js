import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./../components/PageWrapper"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout hideSidebar>
        <h1
          className="m-bottom-20 fs-custom color-white"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div
          className="content_ color-white m-bottom-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`
