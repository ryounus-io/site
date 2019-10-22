import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/blog/bio"
import Layout from "../components/partials/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              <h1>{post.frontmatter.title}</h1>
              <div
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                <div className="text-xl">
                  <span className="text-gray-600">{post.frontmatter.date}</span>
                  <span className="px-3">|</span>
                  <span className="text-gray-700">
                    {post.fields.readingTime.text}
                  </span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <Bio />

              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
