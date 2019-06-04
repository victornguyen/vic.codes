import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'

const Container = styled.section``

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
`

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <h3>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

Post.propTypes = {
  node: PropTypes.object.isRequired,
}

const Blog = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <Container>
            <Title>Writing</Title>
            {posts.map(({ node }) => (
              <Post key={node.id} node={node} />
            ))}
          </Container>
        )
      }}
    />
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
