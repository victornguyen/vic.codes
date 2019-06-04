import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ author, children }) => (
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

Layout.propTypes = {
  // TODO: should this be a prop? maybe it should query it itself?
  author: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Layout
