import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"
import { rhythm } from "../utils/typography"

import "../css/global.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="All posts" />
        <div className="flex flex-wrap -mt-8">
          <div className="w-full mx-2 sm:mx-10 md:mx-20 lg:mx-20 xl:mx-40">
            <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      className="leading-relaxed sm:leading-relaxed md:leading-normal"
                      style={{ marginBottom: rhythm(1 / 4) }}
                    >
                      <Link
                        to={node.fields.slug}
                        className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-gray-500 mr-4"
                      >
                        {title}
                      </Link>
                    </h3>
                    <span className="text-gray-600 dark:text-gray-500">
                      {node.frontmatter.date}
                    </span>
                    <p
                      className="text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: node.excerpt,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
