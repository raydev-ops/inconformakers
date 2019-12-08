import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/seo"
import GAS from "./../images/ong.png"
import Button from "../components/Button"
import PostItem from "../components/PostItem"

const IndexPage = props => {
  const posts = props.data.allWordpressPost.edges
  const menu = props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items
  return (
    <PageWrapper absolute>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <div className="main-background">
        <div className="container p-relative z-i-1">
          <div className="main-description d-flex d-flex-column h-100 d-flex-end p-bottom-60"></div>
        </div>
      </div>
      <div>
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-dark">
            Próximos eventos
          </p>
          <div className="grid">
            {posts.map(({ node }, index) => {
              return <PostItem isLast={index !== 2} key={node.id} {...node} />
            })}
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-white">
            Nosso trabalho
          </p>
          <div className="grid">
            <div className="sm-6-12">
              <p className="color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
            </div>
            <div className="sm-6-12">
              <p className="color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-blue_">
        <div className=" p-top-60 p-bottom-60">
          <p className=" container fs-5 tt-uppercase m-bottom-40 fw-bold color-dark">
            Quem já passaram por aqui
          </p>
          <div className="d-flex d-flex-space-around">
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-white">
            Como fazer parte
          </p>
          <div className="grid">
            <div className="sm-12-12">
              <p className="m-bottom-40 color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
              <form className="d-flex max-width-container m-auto">
                <input placeholder="Seu e-mail" type="text" />
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="background-darker">
        <div className="container p-top-20 p-bottom-20">
          <div className="grid">
            <div className="sm-6-12">
              <p className=" color-white">InconforMakers</p>
            </div>

            <div className="sm-6-12 p-right">
              <ul>
                {menu.map(({ title, url }) => (
                  <li key={url} className="m-left-10 d-inline">
                    <Link className="color-white" to={url}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
    allWordpressWpApiMenusMenusItems: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

export const query = graphql`
  query {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          title
          path
          status
          template
          format
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 600, height: 400) {
                  src
                }
              }
            }
          }
          acf {
            data
            horario
            onde
          }
        }
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          items {
            title
            url
          }
        }
      }
    }
  }
`
