import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
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
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

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
}

export default Bio
