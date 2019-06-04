import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.section``

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
`

const List = styled.div`
  font-size: 22px;
`

const Social = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { html } = data.content
      return (
        <Container>
          <Title>Stalk me</Title>
          <List dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      )
    }}
  />
)

export default Social

const query = graphql`
  query SocialQuery {
    content: markdownRemark(frontmatter: { title: { eq: "Social" } }) {
      id
      html
    }
  }
`
