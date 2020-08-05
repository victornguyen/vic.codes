import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from './ThemeContext'
import GlobalStyles from './GlobalStyles'

const App = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
