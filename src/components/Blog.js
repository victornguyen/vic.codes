import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const Container = styled.section``

const PostTitle = styled.h3`
  font-size: 22px;
  font-weight: normal;
  margin: 0;
`

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <PostTitle>
        <Link to={node.fields.slug}>{title}</Link>
      </PostTitle>
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
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMdx(
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
  `)

  const posts = data.allMdx.edges

  return (
    <Container>
      <Title>Writing ✍</Title>
      {posts.map(({ node }) => (
        <Post key={node.id} node={node} />
      ))}
    </Container>
  )
}

export default Blog
