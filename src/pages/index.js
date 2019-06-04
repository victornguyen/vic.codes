import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Social from '../components/Social'
import Hire from '../components/Hire'
import Skills from '../components/Skills'
import Blog from '../components/Blog'

const Links = styled.section`
  display: flex;
  margin-bottom: 40px;
`

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <Bio />
      <Links>
        <Social />
        <Hire />
        <Skills />
      </Links>
      <Blog />
    </Layout>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
