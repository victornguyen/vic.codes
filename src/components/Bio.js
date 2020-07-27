import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Image from 'gatsby-image'
import Breakout from './Breakout'
import Column from './Column'
import AnimatedLink from './AnimatedLink'
import DarkToggle from './DarkToggle'

const BioLink = props => <AnimatedLink {...props} alternatestyle="true" />

const BioBreakout = styled(Breakout)`
  margin-top: ${props => (props.inFooter ? `50px` : `0`)};
  margin-bottom: ${props => (props.inFooter ? `0` : `20px`)};
  padding: ${props => (props.inFooter ? `15px 0 1.5vw 0` : `25px 0 2.5vw 0`)};
  background: var(--color-brand);
  background-image: linear-gradient(
    to bottom right,
    var(--color-brand) 70%,
    var(--color-brand)
  );
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
  border: 6px solid var(--accent);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

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
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);

  strong {
    text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, 0.5);
    a {
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    font-size: ${props => (props.inFooter ? `22px` : `26px`)};
  }
`

const Bio = ({ inFooter }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/face.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
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
        <Copy inFooter={inFooter}>
          <MDXProvider components={{ a: BioLink }}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Copy>
        <DarkToggle />
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
