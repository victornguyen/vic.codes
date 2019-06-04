import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Bio from '../components/Bio'
import Social from '../components/Social'
import Hire from '../components/Hire'
import Skills from '../components/Skills'

const Links = styled.section`
  display: flex;
  margin-bottom: 30px;
`

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Bio />
      <Links>
        <Social />
        <Hire />
        <Skills />
      </Links>
    </Layout>
  )
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Index
