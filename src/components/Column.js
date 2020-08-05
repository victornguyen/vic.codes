import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const createNode = type =>
  styled[type]`
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${sizes.viewport7}) {
      width: calc(65% + 1vh);
      max-width: 780px;
    }
  `

const Column = ({ children, className, type }) => {
  const ColumnNode = React.useMemo(() => createNode(type), [type])
  return <ColumnNode className={className}>{children}</ColumnNode>
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['div', 'header', 'footer', 'section', 'article']),
}

Column.defaultProps = {
  type: 'div',
}

export default Column
