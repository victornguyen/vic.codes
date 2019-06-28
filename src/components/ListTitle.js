import styled from 'styled-components'
import sizes from '../styles/sizes'
import Title from './Title'

export default styled(Title)`
  &&& {
    margin-top: 0.8em;
    font-size: calc(16px + 1vw);
    @media (min-width: ${sizes.viewport9}) {
      font-size: 26px;
    }
  }
`
