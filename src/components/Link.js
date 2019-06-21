import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = forwardRef(
  ({ children, to, activeClassName, partiallyActive, ...rest }, ref) => {
    // Internal links start with one slash, anything else is external
    const isInternal = /^\/(?!\/)/.test(to)
    // Assets are links to static assets like PDFs and images
    const isAsset = /^.+\.(pdf|jpg)$/i.test(to)

    // Use Gatsby Link for internal page links, and <a> for others
    if (isInternal && !isAsset) {
      return (
        <GatsbyLink
          ref={ref}
          to={to}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...rest}
        >
          {children}
        </GatsbyLink>
      )
    }
    return (
      <a href={to} ref={ref} {...rest}>
        {children}
      </a>
    )
  }
)

Link.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node,
  partiallyActive: PropTypes.string,
  to: PropTypes.string.isRequired,
}

Link.displayName = 'Link'

export default Link
