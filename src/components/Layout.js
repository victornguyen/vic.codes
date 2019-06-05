import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks'
import Column from './Column'

const Container = styled(Column)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

// TODO: create standalone component for footer
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
