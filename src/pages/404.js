import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <div className="flex flex-wrap -mt-8">
          <div className="w-full px-2 sm:px-10 md:px-20 lg:px-20 xl:px-40">
            <div className="px-10 py-40 sm:px-10 md:px-12 lg:px-20 xl:px-40 xl:mb-5">
              <h1>404 - Not Found</h1>
              <h2>
                You just hit a route that doesn&#39;t exist... the sadness :(
              </h2>
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-gray-500 mr-4"
              >
                ← Back to Safety
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
