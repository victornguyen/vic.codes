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

const Tweet = styled.blockquote`
  padding: 1.5vw 2vw 2vw;
  margin: 0;
  // TODO: centralise these colors
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.7em;
  p {
    margin-top: 0;
  }
  @media (min-width: ${sizes.viewport9}) {
    padding: 15px 20px 20px;
  }
`

const Blockquote = ({ children, className, ...rest }) => {
  if (className && className.includes('twitter-tweet')) {
    return (
      <Tweet className={className} {...rest}>
        {children}
      </Tweet>
    )
  }
  return (
    <QuoteBreakout>
      <Column>
        <Quote className={className} {...rest}>
          {children}
        </Quote>
      </Column>
    </QuoteBreakout>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Blockquote
