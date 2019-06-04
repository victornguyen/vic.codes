import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
`

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px 0;
  font-size: 14px;
  color: var(--text-light);
`

const Layout = ({ children }) => {
  const { author } = useSiteMetadata()
  return (
    <Container>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()} {author}. Over-engineered with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted on
        {` `}
        <a href="https://www.netlify.com">Netlify</a>. Check out this
        site&rsquo;s
        {` `}
        <a href="https://github.com/victornguyen/vic.codes">source code</a>.
      </Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
