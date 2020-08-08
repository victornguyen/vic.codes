import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NODE_TYPES = ['div', 'header', 'footer', 'section', 'article']

const createNode = (type) =>
  styled[type]`
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  `

const nodes = NODE_TYPES.reduce(
  (acc, type) => ({ ...acc, [type]: createNode(type) }),
  {}
)

const Breakout = ({ children, className, type }) => {
  const BreakoutNode = nodes[type]
  return <BreakoutNode className={className}>{children}</BreakoutNode>
}

Breakout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(NODE_TYPES),
}

Breakout.defaultProps = {
  type: 'div',
}

export default Breakout
