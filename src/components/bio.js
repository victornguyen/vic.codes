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

const Copy = styled.p`
  font-size: 20px;
`

// TODO: import the copy (and links) for this from somewhere pls

const Bio = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <Container>
          <Avatar
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <Copy>
            <strong>{author}</strong> is a frontend developer living and working
            in Melbourne who really likes{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              JavaScript
            </a>
            , <a href="https://reactjs.org/">React</a> and{' '}
            <a href="https://www.monsterhunterworld.com/" title="doot doot!">
              video
            </a>{' '}
            <a
              href="https://www.sekirothegame.com"
              title="Hesitation is defeat"
            >
              games
            </a>
            .
          </Copy>
        </Container>
      )
    }}
  />
)

const query = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/face.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Bio
