import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Container = styled.section``

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
`

const List = styled.div`
  font-size: 22px;
`

const Hire = () => {
  const { content } = useStaticQuery(graphql`
    query HireQuery {
      content: markdownRemark(frontmatter: { title: { eq: "Hire" } }) {
        id
        html
      }
    }
  `)

  return (
    <Container>
      <Title>Hire me</Title>
      <List dangerouslySetInnerHTML={{ __html: content.html }} />
    </Container>
  )
}

export default Hire
