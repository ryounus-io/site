import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-40 mb-24">
              <h1>Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
