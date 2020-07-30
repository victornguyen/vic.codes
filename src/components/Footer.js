import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Breakout from './Breakout'
import Column from './Column'

const FooterBreakout = styled(Breakout)`
  background: rgba(0, 0, 0, 0.04);
`

const FooterColumn = styled(Column)`
  padding: 1.5em 0;
  font-size: 10px;
  text-align: center;
  color: rgba(var(--color-text), 0.4);
  @media (min-width: ${sizes.viewport4}) {
    font-size: 12px;
    text-align: left;
  }
  @media (min-width: ${sizes.viewport7}) {
    font-size: 14px;
  }
  p {
    display: inline;
  }
`

const Footer = ({ className }) => {
  const { author } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query FooterQuery {
      copy: mdx(frontmatter: { title: { eq: "Footer" } }) {
        body
      }
    }
  `)

  return (
    <FooterBreakout className={className} type="footer">
      <FooterColumn>
        <p>
          © {new Date().getFullYear()} {author}.{' '}
        </p>
        <MDXRenderer>{data.copy.body}</MDXRenderer>
      </FooterColumn>
    </FooterBreakout>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
