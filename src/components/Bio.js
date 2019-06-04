import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { useSiteMetadata } from '../hooks'

const Container = styled.header`
  position: relative;
  padding: 25px 0 25px 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 20px;
  background: var(--brand);
`

const Inner = styled.section`
  width: 60%;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
`

const Avatar = styled(Image)`
  position: fixed !important;
  top: 45px;
  margin-left: -110px;
  min-width: 80px;
  border-radius: 30%;
  border: 6px solid var(--accent);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`

const Copy = styled.section`
  font-size: 26px;
  line-height: 1.4;
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
      color: var(--title);
      text-shadow: none;
      border-color: transparent;
    }
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
      copy: markdownRemark(frontmatter: { title: { eq: "Bio" } }) {
        id
        html
      }
    }
  `)

  const { author } = useSiteMetadata()
  const { fixed } = data.avatar.childImageSharp
  const { html } = data.copy

  return (
    <Container>
      <Inner>
        <Avatar fixed={fixed} alt={author} />
        <Copy dangerouslySetInnerHTML={{ __html: html }} />
      </Inner>
    </Container>
  )
}

export default Bio
