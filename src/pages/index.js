import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/partials/Layout"
import Seo from "../components/Seo"
import Analytics from "../components/Analytics"
import Hero from "../components/home/Hero"

import "../css/global.css"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Analytics />
        <Seo title="RYounus - Portfolio" />
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
