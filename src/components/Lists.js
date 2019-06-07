import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import AnimatedLink from './AnimatedLink'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: ${sizes.viewport4}) {
    flex-direction: row;
    text-align: left;
  }
`

const Block = styled.article`
  flex-grow: 1;
  @media (min-width: ${sizes.viewport4}) {
    width: 50%;
  }
  @media (min-width: ${sizes.viewport7}) {
    width: 33%;
  }
`

const Title = styled.h2`
  font-size: var(--title-size);
  margin-bottom: 0.6em;
`

const List = styled.div`
  font-size: calc(14px + 1vw);
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin-bottom: 8px;
  }
  @media (min-width: ${sizes.viewport7}) {
    font-size: 22px;
  }
`

const Lists = () => {
  const { social, hire, skills } = useStaticQuery(graphql`
    query ListsQuery {
      social: mdx(frontmatter: { title: { eq: "Social" } }) {
        code {
          body
        }
      }
      hire: mdx(frontmatter: { title: { eq: "Hire" } }) {
        code {
          body
        }
      }
      skills: mdx(frontmatter: { title: { eq: "Skills" } }) {
        code {
          body
        }
      }
    }
  `)

  return (
    <MDXProvider components={{ a: AnimatedLink }}>
      <Container>
        <Block>
          <Title>Stalk me 🔎</Title>
          <List>
            <MDXRenderer>{social.code.body}</MDXRenderer>
          </List>
        </Block>
        <Block>
          <Title>Hire me 💼</Title>
          <List>
            <MDXRenderer>{hire.code.body}</MDXRenderer>
          </List>
        </Block>
        <Block>
          <Title>Mad skills 👨‍💻</Title>
          <List>
            <MDXRenderer>{skills.code.body}</MDXRenderer>
          </List>
        </Block>
      </Container>
    </MDXProvider>
  )
}

export default Lists
