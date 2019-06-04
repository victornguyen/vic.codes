import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Container = styled.section`
  width: 33%;
`

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 14px;
`

const List = styled.div`
  font-size: 22px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin-bottom: 8px;
  }
`

const Skills = () => {
  const { content } = useStaticQuery(graphql`
    query SkillsQuery {
      content: markdownRemark(frontmatter: { title: { eq: "Skills" } }) {
        id
        html
      }
    }
  `)

  return (
    <Container>
      <Title>Mad skills 👨‍💻</Title>
      <List dangerouslySetInnerHTML={{ __html: content.html }} />
    </Container>
  )
}

export default Skills
