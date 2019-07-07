const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
            title
            date
            excerpt
            featured_media {
              localFile {
                childImageSharp {
                  resolutions {
                    src
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
      allWordpressWpEventos {
        edges {
          node {
            id
            path
            status
            template
            date
            content
            featured_media {
              localFile {
                childImageSharp {
                  resolutions {
                    src
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpEventos,
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const customPage = path.resolve(`./src/templates/customPage.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const eventTemplate = path.resolve(`./src/templates/evento.js`)

  allWordpressPage.edges.forEach(edge => {
    const template = edge.node.path.includes("contato")
      ? customPage
      : pageTemplate
    createPage({
      path: edge.node.path,
      component: slash(template),
      context: {
        id: edge.node.id,
      },
    })
  })

  createPaginatedPages({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: "src/templates/posts.js",
    pageLength: 6,
    pathPrefix: "posts",
  })

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  createPaginatedPages({
    edges: allWordpressWpEventos.edges,
    createPage: createPage,
    pageTemplate: "src/templates/posts.js",
    pageLength: 1,
    pathPrefix: "nossos-eventos",
  })

  allWordpressWpEventos.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(eventTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
