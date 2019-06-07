import React from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Breakout from './Breakout'
import Column from './Column'
import AnimatedLink from './AnimatedLink'

const FooterBreakout = styled(Breakout)`
  background: rgba(0, 0, 0, 0.04);
`

const FooterColumn = styled(Column)`
  padding: 1.5em 0;
  font-size: 10px;
  text-align: center;
  color: var(--text-light);
  @media (min-width: ${sizes.viewport4}) {
    font-size: 12px;
    text-align: left;
  }
  @media (min-width: ${sizes.viewport7}) {
    font-size: 14px;
  }
`

const Footer = ({ className }) => {
  const { author } = useSiteMetadata()
  return (
    <FooterBreakout className={className} type="footer">
      <FooterColumn>
        © {new Date().getFullYear()} {author}. Over-engineered with
        {` `}
        <AnimatedLink href="https://www.gatsbyjs.org">Gatsby</AnimatedLink>,
        hosted on
        {` `}
        <AnimatedLink href="https://www.netlify.com">Netlify</AnimatedLink>,
        source code on
        {` `}
        <AnimatedLink href="https://github.com/victornguyen/vic.codes">
          GitHub
        </AnimatedLink>
        .
      </FooterColumn>
    </FooterBreakout>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
