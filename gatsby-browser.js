import React from 'react'
import App from './src/components/App'

// typefaces
import 'typeface-rubik'

// css reset
import 'sanitize.css'

// global styles
// TODO: replace with createGlobalStyles() from styled-components
import './src/styles/global.css'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
