import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Social from '../components/Social'
import Hire from '../components/Hire'
import Blog from '../components/Blog'

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
