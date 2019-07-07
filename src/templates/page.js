import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/PageWrapper"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1
          className="m-bottom-20 fs-custom color-white"
          dangerouslySetInnerHTML={{ __html: currentPage.title }}
        />
        <div
          className="content_ color-white m-bottom-100"
          dangerouslySetInnerHTML={{ __html: currentPage.content }}
        />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
