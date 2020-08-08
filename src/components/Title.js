import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SIZES = ['1', '2', '3', '4', '5', '6']

const createNode = (size) =>
  styled[`h${size}`]`
    margin-top: 1.5em;
    margin-bottom: 0.6em;
  `

const nodes = SIZES.reduce(
  (acc, type) => ({ ...acc, [type]: createNode(type) }),
  {}
)

const Title = ({ children, size, ...rest }) => {
  const TitleNode = nodes[size]
  return <TitleNode {...rest}>{children}</TitleNode>
}

Title.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(SIZES),
}

Title.defaultProps = {
  size: '2',
}

export default Title
