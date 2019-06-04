import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks'

const Container = styled.div`
  width: 60%;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children }) => {
  const { author } = useSiteMetadata()
  return (
    <Container>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} {author}. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
