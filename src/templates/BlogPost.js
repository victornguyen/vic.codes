import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// TODO: centralise prism theme selection? imported here and in Code
import theme from 'prism-react-renderer/themes/oceanicNext'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Breakout from '../components/Breakout'
import Column from '../components/Column'
import AnimatedLink from '../components/AnimatedLink'
import SEO from '../components/Seo'

// HAX: these constants don't appear to be intended to be consumed outside of
// gatsby-remark-images' internals. Prepare for breaking changes.
import { imageWrapperClass, imageClass } from 'gatsby-remark-images/constants'

const Header = styled(Breakout)`
  background: var(--brand);
  color: #fff;
  padding: 0.5em 0;
  font-size: calc(6px + 1vw);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  @media (min-width: 992px) {
    font-size: 16px;
  }
`

const Icon = styled.span`
  position: absolute;
  margin-left: -1.8em;
`

const Heading = styled(Title)`
  &&& {
    margin: 0 0 0.6em;
  }
  padding: 1.5em 0 0.6em;
  border-bottom: 1px dotted lightgrey;
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

const BlogPostTemplate = ({ data, location }) => {
  const { author } = useSiteMetadata()
  const post = data.mdx

  return (
    <Layout location={location} showBioFooter>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header>
        <Column>
          <Icon>✍</Icon>
          Hey, it&rsquo;s a blog post by{' '}
          <AnimatedLink href="/" alternatestyle="true">
            {author}
          </AnimatedLink>{' '}
          published on{' '}
          <time dateTime={post.frontmatter.datetime}>
            {post.frontmatter.date}
          </time>
          .
        </Column>
      </Header>
      <Heading size="1">{post.frontmatter.title}</Heading>
      <Body>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Body>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        datetime: date(formatString: "YYYY-MM-DD")
        description
      }
      body
    }
  }
`
