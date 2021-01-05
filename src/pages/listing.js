import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"
import { rhythm } from "../utils/typography"

import "../css/global.css"

function LatestPostTag() {
  return (
    <>
      <span className="px-2 bg-nord-10 dark:bg-nord-13 text-white dark:text-black">Latest</span>
      <span className="px-3">|</span>
    </>
  );
}

function BlogTags({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
          <div key={index} className="bg-nord-3 p-1 rounded text-white mr-3 mb-2 text-xs">
            {tag.trim()}
          </div>
        )
      )}
    </>
  )
}

class Listing extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="All posts" />
        <div className="flex flex-wrap -mt-8">
          <div className="w-full px-2 sm:px-10 md:px-20 lg:px-20 xl:px-40">
            <div className="px-10 py-10 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              <h2 className="text-nord-3 dark:text-nord-8 underline">
                All posts
              </h2>
              {posts.map(({ node }, index) => {
                const title = node.frontmatter.title || node.fields.slug
                const tags =  node.frontmatter.tags ? node.frontmatter.tags.split(',') : []
                const description = node.excerpt.length > 0 ? node.excerpt : node.frontmatter.description
                return (
                  <Link
                    key={node.fields.slug}
                    to={node.fields.slug}
                    className="block text-gray-700 dark:text-gray-200 no-underline hover:text-nord-10 dark:hover:text-nord-13"
                  >
                    <h3
                      className="leading-relaxed sm:leading-relaxed md:leading-normal"
                      style={{ marginBottom: rhythm(1 / 4) }}
                    >
                      {title}
                    </h3>

                    <span className="text-nord-3 dark:text-nord-4">
                      {index === 0 && <LatestPostTag />}
                      <span>{node.frontmatter.date}</span>
                      <span className="px-3">|</span>
                      <span className="text-nord-3 dark:text-nord-8">
                        {node.fields.readingTime.text}
                      </span>
                    </span>
                    {tags.length > 0 &&
                      <div className="flex flex-wrap justify-start py-1">
                        <BlogTags tags={tags} />
                      </div>
                    }
                    <p
                      className="text-nord-2 dark:text-nord-4"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Listing

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
            tags
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
