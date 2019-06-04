/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Container = styled.header`
  display: flex;
`

const Avatar = styled(Image)`
  margin: 0 20px 0 0;
  min-width: 80px;
  border-radius: 100%;
`

const Copy = styled.section`
  font-size: 20px;
`

const Bio = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { fixed } = data.avatar.childImageSharp
      const { author } = data.site.siteMetadata
      const { html } = data.copy
      return (
        <Container>
          <Avatar
            fixed={fixed}
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <Copy dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      )
    }}
  />
)

export default Bio

const query = graphql`
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
    site {
      siteMetadata {
        author
      }
    }
  }
`
