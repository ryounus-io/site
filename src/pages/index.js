import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/home/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import '../css/global.css'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
