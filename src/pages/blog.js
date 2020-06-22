import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"
import Pagination from "../components/blog/Pagination"
import { rhythm } from "../utils/typography"

import "../css/global.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { limit, skip, numOfPages, currentPage } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="All posts" />
        <div className="flex flex-wrap -mt-8">
          <div className="w-full px-2 sm:px-10 md:px-20 lg:px-20 xl:px-40">
            <div className="px-10 py-40 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              <h2 className="text-nord-3 dark:text-nord-8 underline">
                All posts
              </h2>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Link
                    key={node.fields.slug}
                    to={node.fields.slug}
                    className="block text-gray-700 dark:text-gray-200 mr-4 no-underline hover:text-nord-10 dark:hover:text-nord-13"
                  >
                    <h3
                      className="leading-relaxed sm:leading-relaxed md:leading-normal"
                      style={{ marginBottom: rhythm(1 / 4) }}
                    >
                      {title}
                    </h3>
                    <span className="text-nord-3 dark:text-nord-4">
                      <span>{node.frontmatter.date}</span>
                      <span className="px-3">|</span>
                      <span className="text-nord-3 dark:text-nord-8">
                        {node.fields.readingTime.text}
                      </span>
                    </span>
                    <p
                      className="text-nord-2 dark:text-nord-4"
                      dangerouslySetInnerHTML={{
                        __html: node.excerpt,
                      }}
                    />
                  </Link>
                )
              })}
              <Pagination numOfPages={numOfPages} currentPage={currentPage} />
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
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
