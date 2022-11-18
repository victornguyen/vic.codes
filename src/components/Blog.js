import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ListTitle from './ListTitle'
import Post from './BlogPostPreview'

const Blog = () => {
  const data = useStaticQuery(query)
  const posts = data.allMdx.edges

  return (
    <section>
      <ListTitle>Writing ✍</ListTitle>
      {posts.map(({ node }) => {
        const {
          id,
          fields: { slug },
          frontmatter: { date, datetime, title },
        } = node
        return (
          <Post
            key={id}
            title={title}
            date={date}
            datetime={datetime}
            slug={slug}
          />
        )
      })}
    </section>
  )
}

export default Blog

const query = graphql`
  query BlogQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            datetime: date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
