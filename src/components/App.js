import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from './ThemeContext'

const App = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

App.propTypes = {
  children: PropTypes.node,
}

export default App
