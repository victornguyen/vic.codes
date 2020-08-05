import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

import { useSiteMetadata } from '../hooks'
import { ThemeContext } from './ThemeContext'

import Breakout from './Breakout'
import Column from './Column'
import { LinkBrand3 } from './AnimatedLink'
import DarkToggle from './DarkToggle'

import sizes from '../styles/sizes'

const BioBreakout = styled(Breakout)`
  margin-top: ${props => (props.inFooter ? `50px` : `0`)};
  margin-bottom: ${props => (props.inFooter ? `0` : `20px`)};
  padding: ${props => (props.inFooter ? `15px 0 1.5vw 0` : `25px 0 2.5vw 0`)};
  transition: background 250ms ease;
  @media (min-width: ${sizes.viewport9}) {
    padding-bottom: ${props => (props.inFooter ? `15px` : `25px`)};
  }
`

const Avatar = styled(Image)`
  &[style] {
    display: block !important;
  }
  margin-left: auto;
  margin-right: auto;

  min-width: 80px;
  border-radius: 50%;
  border: 6px solid rgb(var(--color-brand2));
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.4);

  @media (min-width: ${sizes.viewport7}) {
    &[style] {
      position: absolute !important;
    }
    top: ${props => (props.inFooter ? `35px` : `45px`)};
    margin-left: -110px;
  }
`

const Copy = styled.section`
  font-size: calc(${props => (props.inFooter ? `12px` : `16px`)} + 1vw);
  line-height: 1.5;
  color: rgb(var(--color-text));
  text-shadow: ${({ colorMode }) =>
    colorMode === `dark` ? `1.5px 1.5px 0 rgba(0, 0, 0, 0.6)` : `none`};

  // TODO: can we use a className to differentiate the name link?
  strong {
    text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, 0.8);
    ${({ colorMode }) => {
      return colorMode === 'dark'
        ? `
        a {
          color: rgb(var(--color-brand2));
          :hover {
            background: rgb(var(--color-brand2));
          }
        }
      `
        : `
        a {
          color: rgb(var(--color-brand2));
          background: rgba(var(--color-title), 0.9);
          :hover {
            background: rgb(var(--color-brand2));
          }
        }
      `
    }}
  }

  @media (min-width: 992px) {
    font-size: ${props => (props.inFooter ? `22px` : `26px`)};
  }
`

const Bio = ({ inFooter }) => {
  const { colorMode } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/face.jpg/" }) {
        childImageSharp {
          fixed(width: 90, height: 90, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      copy: mdx(frontmatter: { title: { eq: "Bio" } }) {
        id
        body
      }
    }
  `)

  const { author } = useSiteMetadata()
  const { fixed } = data.avatar.childImageSharp
  const { body } = data.copy

  return (
    <BioBreakout type="header" inFooter={inFooter}>
      <Column>
        <Avatar fixed={fixed} alt={author} inFooter={inFooter} />
        <Copy colorMode={colorMode} inFooter={inFooter}>
          <MDXProvider components={{ a: LinkBrand3 }}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Copy>
        {!inFooter && <DarkToggle />}
      </Column>
    </BioBreakout>
  )
}

Bio.propTypes = {
  inFooter: PropTypes.bool,
}

Bio.defaultProps = {
  inFooter: false,
}

export default Bio
