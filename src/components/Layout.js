import React from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks'

const Layout = ({ children }) => {
  const { author } = useSiteMetadata()
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} {author}. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
