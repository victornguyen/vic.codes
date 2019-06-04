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

const Hire = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { html } = data.content
      return (
        <Container>
          <Title>Hire me</Title>
          <List dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      )
    }}
  />
)

export default Hire

const query = graphql`
  query HireQuery {
    content: markdownRemark(frontmatter: { title: { eq: "Hire" } }) {
      id
      html
    }
  }
`
