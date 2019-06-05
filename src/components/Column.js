import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const Container = styled.section`
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${sizes.viewport7}) {
    width: calc(65% + 1vh);
    max-width: 780px;
  }
`

// TODO: prop to customise node type?
const Column = ({ children }) => <Container>{children}</Container>

Column.propTypes = {
  children: PropTypes.node,
}

export default Column
