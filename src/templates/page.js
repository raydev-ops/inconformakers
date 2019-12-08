import React from "react"
import { graphql } from "gatsby"
import Proptypes from "prop-types"
import Layout from "./../components/PageWrapper"

const PageTemplate = props => {
  const currentPage = props.data.wordpressPage

  return (
    <Layout>
      <div className="container">
        <h1
          className="m-bottom-20 fs-custom color-dark"
          dangerouslySetInnerHTML={{ __html: currentPage.title }}
        />
        <div
          className="color-dark"
          dangerouslySetInnerHTML={{ __html: currentPage.content }}
        />
      </div>
    </Layout>
  )
}

export default PageTemplate

PageTemplate.propTypes = {
  data: Proptypes.shape({
    wordpressPage: Proptypes.shape({
      title: Proptypes.string.isRequired,
      content: Proptypes.string.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
