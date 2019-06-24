import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const createNode = size =>
  styled[`h${size}`]`
    font-size: var(--title-size);
    margin-bottom: 0.6em;
  `

const Title = ({ children, size, ...rest }) => {
  const Element = createNode(size)
  return <Element {...rest}>{children}</Element>
}

Title.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
}

Title.defaultProps = {
  size: '2',
}

export default Title
