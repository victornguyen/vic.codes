import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Breakout from './Breakout'
import Column from './Column'

const CodeBreakout = styled(Breakout)`
  background-color: ${theme.plain.backgroundColor};
  padding: 1vw 0 1.5vw 0;
  @media (min-width: ${sizes.viewport9}) {
    padding: 10px 0 15px 0;
  }
`

const Code = ({ codeString, language }) => (
  <CodeBreakout>
    <Column>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Column>
  </CodeBreakout>
)

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
}

export default Code
