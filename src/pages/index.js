import React from "react"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <PageWrapper>
      <div>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      </div>
      <div />
    </PageWrapper>
  )
}

export default IndexPage
