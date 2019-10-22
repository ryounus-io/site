import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/partials/layout"
import Hero from "../components/home/hero"

import "../css/global.css"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <Hero />
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
