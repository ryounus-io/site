const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const postsPrefix = "blog"

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    // Create blog pages for pagination
    const postsPerPage = 3
    const numOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numOfPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${postsPrefix}` : `/${postsPrefix}?page=${i + 1}`,
        component: path.resolve(`./src/pages/blog.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numOfPages,
          currentPage: i + 1,
        },
      })
    })

    // Create individual blog post pages.
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/pages/blogPost.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/${postsPrefix}${value}`,
    })
  }
}
