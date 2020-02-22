import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/blog/Bio"
import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"
import { rhythm, scale } from "../utils/typography"

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="flex flex-wrap -mt-8">
          <div className="w-full mx-2 sm:mx-10 md:mx-20 lg:mx-20 xl:mx-40">
            <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              <h1 className="mb-8 dark:text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {post.frontmatter.title}
              </h1>
              <div
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                <div className="dark:text-gray-500 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-nord-3">
                  <span>{post.frontmatter.date}</span>
                  <span className="px-3">|</span>
                  <span>{post.fields.readingTime.text}</span>
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

export default BlogPost

export const pageQuery = graphql`
  query($slug: String) {
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
