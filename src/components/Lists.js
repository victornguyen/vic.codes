import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: ${sizes.viewport7}) {
    flex-direction: row;
    text-align: left;
  }
`

const Block = styled.article`
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
      social: markdownRemark(frontmatter: { title: { eq: "Social" } }) {
        html
      }
      hire: markdownRemark(frontmatter: { title: { eq: "Hire" } }) {
        html
      }
      skills: markdownRemark(frontmatter: { title: { eq: "Skills" } }) {
        html
      }
    }
  `)

  return (
    <Container>
      <Block>
        <Title>Stalk me 🔎</Title>
        <List dangerouslySetInnerHTML={{ __html: social.html }} />
      </Block>
      <Block>
        <Title>Hire me 💼</Title>
        <List dangerouslySetInnerHTML={{ __html: hire.html }} />
      </Block>
      <Block>
        <Title>Mad skills 👨‍💻</Title>
        <List dangerouslySetInnerHTML={{ __html: skills.html }} />
      </Block>
    </Container>
  )
}

export default Lists
