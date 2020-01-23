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
        <div className="flex flex-wrap">
          <div className="w-full h-64">
            <div className="px-10 m-4 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                      <Link
                        to={node.fields.slug}
                        className="text-gray-700 hover:text-black mr-4"
                      >
                        {title}
                      </Link>
                    </h3>
                    <span className="text-gray-600">
                      {node.frontmatter.date}
                    </span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
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
          excerpt
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
