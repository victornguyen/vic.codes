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

const Social = () => {
  const { content } = useStaticQuery(graphql`
    query SocialQuery {
      content: markdownRemark(frontmatter: { title: { eq: "Social" } }) {
        id
        html
      }
    }
  `)

  return (
    <Container>
      <Title>Stalk me</Title>
      <List dangerouslySetInnerHTML={{ __html: content.html }} />
    </Container>
  )
}

export default Social
