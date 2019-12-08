import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PageWrapper from "./../components/PageWrapper"

const PostTemplate = props => {
  const post = props.data.wordpressPost
  const acf = props.data.wordpressPost.acf

  return (
    <PageWrapper>
      <div className="container m-bottom-50">
        <h1
          className="m-bottom-20 fs-custom"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="m-bottom-5 color-dark">
          <span className=" tt-uppercas color-gray">Onde:</span> {acf.data}
        </p>
        <p className="m-bottom-15 color-dark">
          <span className=" tt-uppercas color-gray">Quando:</span> {acf.onde}
        </p>
        <div
          className="content_ color-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </PageWrapper>
  )
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
      acf {
        data
        horario
        onde
      }
    }
  }
`
