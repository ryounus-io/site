import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/home/layout"
import Hero from "../components/home/hero"
import Footer from "../components/home/footer";

import '../css/global.css'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <Hero />
        <Footer />
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
