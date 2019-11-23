import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PageWrapper from "./../components/PageWrapper"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <PageWrapper>
        <div className="container">
          <h1
            className="m-bottom-20 fs-custom color-white_"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div
            className="content_ color-white_ m-bottom-100_"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </PageWrapper>
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
