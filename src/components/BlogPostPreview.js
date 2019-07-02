import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import AnimatedLink from './AnimatedLink'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const Container = styled.article`
  position: relative;
  margin-bottom: 1em;
`

const PostTitle = styled(Title)`
  font-weight: normal;
  &&& {
    margin: 0;
  }
`

const Date = styled.time`
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

const BlogPostPreview = ({ title, date, datetime, slug }) => (
  <Container>
    <PostTitle size="3">
      <AnimatedLink href={slug} scaleTo={1.06}>
        {title || slug}
      </AnimatedLink>
    </PostTitle>
    <Date dateTime={datetime}>{date}</Date>
  </Container>
)

BlogPostPreview.propTypes = {
  date: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogPostPreview
