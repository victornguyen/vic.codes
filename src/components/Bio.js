import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { useSiteMetadata } from '../hooks'

const Container = styled.header`
  position: relative;
  padding-top: 20px;
`

const Avatar = styled(Image)`
  position: fixed !important;
  top: 32px;
  margin-left: -100px;
  min-width: 80px;
  border-radius: 100%;
  border: 10px solid pink;
`

const Copy = styled.section`
  font-size: 24px;
  line-height: 1.4;
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
