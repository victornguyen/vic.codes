import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const createNode = type =>
  styled[type]`
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  `

const Breakout = ({ children, className, type }) => {
  const BreakoutNode = createNode(type)
  return <BreakoutNode className={className}>{children}</BreakoutNode>
}

Breakout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['div', 'header', 'footer', 'section', 'article']),
}

Breakout.defaultProps = {
  type: 'div',
}

export default Breakout
