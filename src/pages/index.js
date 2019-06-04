import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Social from '../components/social'
import Hire from '../components/hire'
import Blog from '../components/blog'

const Index = ({ data, location }) => {
  const author = data.site.siteMetadata.author
  return (
    <Layout location={location} author={author}>
      <SEO title="All posts" />
      <Bio />
      <Social />
      <Hire />
      <Blog />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
