import React from "react"
import Link from "gatsby-link"
import PostItem from "../components/PostItem"
import Layout from "./../components/PageWrapper"

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  return (
    <Layout>
      <div>
        {group.map(({ node }, index) => {
          return <PostItem key={index} node={node} />
        })}
        {!first && <Link to={`posts/${previousUrl}`}>Página anterior</Link>}
        {!last && <Link to={`posts/${nextUrl}`}>Próxima página</Link>}
      </div>
    </Layout>
  )
}
export default IndexPage
