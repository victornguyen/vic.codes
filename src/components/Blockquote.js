import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Breakout from './Breakout'
import Column from './Column'

const Quote = styled.blockquote`
  padding: 1.5vw 0 2vw 0;
  margin: 0 2vw;
  font-style: italic;
  @media (min-width: ${sizes.viewport9}) {
    padding: 15px 0 20px 0;
    margin: 0 20px;
  }
`

const QuoteBreakout = styled(Breakout)`
  // TODO: this is the same colour as Footer bg, make var?
  background: rgba(0, 0, 0, 0.04);
`

const Blockquote = ({ children, ...rest }) => {
  return (
    <QuoteBreakout>
      <Column>
        <Quote {...rest}>{children}</Quote>
      </Column>
    </QuoteBreakout>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node,
}

export default Blockquote
