import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Lists from '../components/Lists'

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Bio />
      <Lists />
    </Layout>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
