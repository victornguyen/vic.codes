import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import ListTitle from './ListTitle'
import sizes from '../styles/sizes'

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
        body
      }
      hire: mdx(frontmatter: { title: { eq: "Hire" } }) {
        body
      }
      skills: mdx(frontmatter: { title: { eq: "Skills" } }) {
        body
      }
    }
  `)

  return (
    <Container>
      <Block>
        <ListTitle>Stalk me 🔎</ListTitle>
        <List>
          <MDXRenderer>{social.body}</MDXRenderer>
        </List>
      </Block>
      <Block>
        <ListTitle>Hire me 💼</ListTitle>
        <List>
          <MDXRenderer>{hire.body}</MDXRenderer>
        </List>
      </Block>
      <Block>
        <ListTitle>Mad skills 👨‍💻</ListTitle>
        <List>
          <MDXRenderer>{skills.body}</MDXRenderer>
        </List>
      </Block>
    </Container>
  )
}

export default Lists
