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
        <div className="grid">
          {group.map(({ node }, index) => {
            return (
              <div className="sm-4-12">
                <PostItem key={index} node={node} />
              </div>
            )
          })}
        </div>
        {!first && <Link to={`posts/${previousUrl}`}>Página anterior</Link>}
        {!last && <Link to={`posts/${nextUrl}`}>Próxima página</Link>}
      </div>
    </Layout>
  )
}
export default IndexPage
