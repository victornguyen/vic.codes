import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks'
import { MDXRenderer } from 'gatsby-mdx'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Image from 'gatsby-image'
import Breakout from './Breakout'
import Column from './Column'

const BioBreakout = styled(Breakout)`
  margin-bottom: 20px;
  padding: 25px 0 2.5vw 0;
  background: var(--brand);
  background-image: linear-gradient(
    to bottom right,
    var(--brand) 70%,
    var(--brand-light)
  );
  @media (min-width: ${sizes.viewport9}) {
    padding-bottom: 25px;
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
    top: 45px;
    margin-left: -110px;
  }
`

const Copy = styled.section`
  font-size: calc(16px + 1vw);
  line-height: 1.5;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);

  strong {
    text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, 0.5);
    a {
      color: #fff;
    }
  }

  a {
    color: var(--accent);
    background: rgba(0, 0, 0, 0.1);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    :hover {
      background: var(--accent);
      color: var(--title-color);
      text-shadow: none;
      border-color: transparent;
    }
  }

  @media (min-width: 992px) {
    font-size: 26px;
  }
`

const Bio = () => {
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
        code {
          body
        }
      }
    }
  `)

  const { author } = useSiteMetadata()
  const { fixed } = data.avatar.childImageSharp
  const { code } = data.copy

  return (
    <BioBreakout type="header">
      <Column>
        <Avatar fixed={fixed} alt={author} />
        <Copy>
          <MDXRenderer>{code.body}</MDXRenderer>
        </Copy>
      </Column>
    </BioBreakout>
  )
}

export default Bio
