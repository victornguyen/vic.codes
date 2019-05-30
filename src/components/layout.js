import React from 'react'
import PropTypes from 'prop-types'

import { rhythm } from '../utils/typography'

const Layout = ({ author, children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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

Layout.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Layout
