import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const NODE_TYPES = ['div', 'header', 'footer', 'section', 'article']

const createNode = (type) =>
  styled[type]`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${sizes.viewport7}) {
      width: calc(65% + 1vh);
      max-width: 780px;
    }
  `

const nodes = NODE_TYPES.reduce(
  (acc, type) => ({ ...acc, [type]: createNode(type) }),
  {}
)

const Column = ({ children, className, type }) => {
  const ColumnNode = nodes[type]
  return <ColumnNode className={className}>{children}</ColumnNode>
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(NODE_TYPES),
}

Column.defaultProps = {
  type: 'div',
}

export default Column
