import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../hooks'

function SEO({ description, title }) {
  const siteMetadata = useSiteMetadata()
  const metaDescription = description || siteMetadata.description
  const defaultTitle = title || `${siteMetadata.title} | ${siteMetadata.job}`

  return (
    <Helmet
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
