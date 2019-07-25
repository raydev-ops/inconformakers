import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/PageWrapper"
import Engajamento from "../custom-pages/Engajamento"

const customMap = {
  Engajamento: Engajamento,
}

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    const { title } = currentPage
    const Component = customMap[title]
    return (
      <Layout>
        <div className="m-bottom-100">
          <h1
            className="m-bottom-20 fs-custom color-white"
            dangerouslySetInnerHTML={{ __html: currentPage.title }}
          />
          <div
            className="content_ color-white"
            dangerouslySetInnerHTML={{ __html: currentPage.content }}
          />
          {Component && <Component {...currentPage} />}
        </div>
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
      acf {
        engajamento {
          source_url
        }
      }
    }
  }
`
