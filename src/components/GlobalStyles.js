import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import 'typeface-rubik'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    line-height: 1.4;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: rgb(var(--color-background));
    transition: background 250ms ease;
    color: rgb(var(--color-text));
    font-family: 'Rubik', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: rgba(var(--color-title), 1);
    text-shadow: 1.5px 1.5px 0 rgba(var(--color-title-shadow-rgba));
  }

  h1 {
    font-size: calc(20px + 2vw);
    letter-spacing: -0.025em;
    line-height: calc(26px + 2vw);
  }

  h2 {
    font-size: calc(20px + 1vw);
    letter-spacing: -0.015em;
  }

  h3 {
    font-size: calc(14px + 1vw);
  }

  h4 {
    font-size: calc(10px + 1vw);
  }

  h5 {
    font-size: calc(8px + 1vw);
  }

  h6 {
    font-size: calc(6px + 1vw);
  }
  @media (min-width: 992px) {
    h1 {
      font-size: 40px;
      letter-spacing: -1px;
      line-height: 1.2;
    }
    h2 {
      font-size: 30px;
      letter-spacing: -0.5px;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 18px;
    }
    h6 {
      font-size: 16px;
    }
  }

  .twitter-tweet-rendered {
    margin: 2rem auto !important;
  }
`

export default GlobalStyles
