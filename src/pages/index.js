import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Social from '../components/Social'
import Hire from '../components/Hire'
import Blog from '../components/Blog'

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <Bio />
      <Social />
      <Hire />
      <Blog />
    </Layout>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
