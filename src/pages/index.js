import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../components/ThemeContext'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Lists from '../components/Lists'
import Blog from '../components/Blog'

const Index = ({ location }) => {
  return (
    <ThemeProvider>
      <Layout location={location}>
        <SEO />
        <Bio />
        <Lists />
        <Blog />
      </Layout>
    </ThemeProvider>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
