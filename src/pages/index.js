import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Lists from '../components/Lists'
import Blog from '../components/Blog'

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Bio />
      <Lists />
      <Blog />
    </Layout>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
