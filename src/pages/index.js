import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Lists from '../components/Lists'
import Blog from '../components/Blog'
import { PositionedToggle } from '../components/DarkToggle'

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <PositionedToggle />
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
