import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
// TODO: centralise prism theme selection? imported here and in Code
import theme from 'prism-react-renderer/themes/oceanicNext'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

// HAX: these constants don't appear to be intended to be consumed outside of
// gatsby-remark-images' internals. Prepare for breaking changes.
import { imageWrapperClass, imageClass } from 'gatsby-remark-images/constants'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Body = styled.main`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.3em;
    margin-bottom: 0;
  }

  p,
  li,
  blockquote {
    font-size: calc(10px + 1vw);
    font-family: Helvetica, Arial, sans-serif;
  }

  li {
    margin-bottom: 0.8em;
  }

  pre,
  code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
  }

  pre {
    font-size: calc(6px + 1vw);
    overflow: auto;
    white-space: pre;
  }

  code {
    font-size: 0.85em;
    padding: 0.2em 0.4em 0.25em;
    border-radius: 0.2em;
    background: ${theme.plain.backgroundColor};
    color: ${theme.plain.color};
  }

  // TODO: these are largely the same styles as Breakout, find a way to DRY out
  .${imageWrapperClass} {
    width: 100vw !important;
    left: 50% !important;
    right: 50% !important;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    @media (min-width: ${sizes.viewport4}) {
      width: auto !important;
      left: auto !important;
      right: auto !important;
      margin-left: -2em !important;
      margin-right: -2em !important;
    }
  }

  .${imageClass} {
    @media (min-width: ${sizes.viewport4}) {
      border-radius: 0.3em;
    }
  }

  @media (min-width: ${sizes.viewport9}) {
    p,
    li,
    blockquote {
      font-size: 20px;
    }
    pre {
      font-size: 16px;
    }
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Body>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </Body>

        <List>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </List>

        <Bio />
      </Layout>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      code {
        body
      }
    }
  }
`
