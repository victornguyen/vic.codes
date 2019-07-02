import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import ListTitle from './ListTitle'
import AnimatedLink from './AnimatedLink'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const Posts = styled.section``

const PostContainer = styled.article`
  position: relative;
  margin-bottom: 1em;
`

const PostTitle = styled(Title)`
  font-weight: normal;
  &&& {
    margin: 0;
  }
`

const PostDate = styled.time`
  position: static;
  font-size: 12px;
  color: var(--text-light);
  @media (min-width: ${sizes.viewport7}) {
    position: absolute;
    top: 0.8em;
    left: -11.2em;
    width: 10em;
    text-align: right;
  }
`

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <PostContainer key={node.fields.slug}>
      <PostTitle size="3">
        <AnimatedLink href={node.fields.slug} scaleTo={1.06}>
          {title}
        </AnimatedLink>
      </PostTitle>
      <PostDate>{node.frontmatter.date}</PostDate>
    </PostContainer>
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
    <Posts>
      <ListTitle>Writing ✍</ListTitle>
      {posts.map(({ node }) => (
        <Post key={node.id} node={node} />
      ))}
    </Posts>
  )
}

export default Blog
