import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import theme from '../styles/prism'
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

const Pre = styled.pre`
  margin-left: -2.5em;
`

const Gutter = styled.span`
  display: inline-block;
  width: 2.5em;
  padding-left: 0.5em;
  padding-right: 1em;
  text-align: right;
  opacity: 0.1;
  user-select: none;
`

const Line = styled.div`
  background: ${(props) =>
    props.isHighlighted ? 'rgba(var(--color-code-highlight), 0.1)' : 'none'};
  ${Gutter} {
    ${(props) =>
      props.isHighlighted &&
      `
      color: ${theme.plain.backgroundColor};
      opacity: 1;
      `}
  }
`

// Regular expression to parse line ranges from code-fence metastrings
const RE = /{([\d,-]+)}/

// Returns a function that tests whether a given line should be highlighted
// using data parsed from a code-fence metastring ("{2,5,8-10}").
// Stolen wholesale from @kentcdodds :)
function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)))
    return (index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const Code = ({ codeString, language, metastring }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <CodeBreakout>
      <Column>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line
                  key={i}
                  {...getLineProps({ line, key: i })}
                  isHighlighted={shouldHighlightLine(i)}
                >
                  <Gutter>{language === 'bash' ? '$' : i + 1}</Gutter>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </Column>
    </CodeBreakout>
  )
}

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  metastring: PropTypes.string,
}

export default Code
