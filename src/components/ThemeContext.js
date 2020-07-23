import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    rawSetColorMode(initialColorValue)
  }, [])

  const setColorMode = value => {
    const root = window.document.documentElement

    // Update React colorMode state
    rawSetColorMode(value)

    // Update localStorage
    localStorage.setItem('color-mode', value)

    // Update colour css vars
    // TODO: DRY from gatsby-ssr.js
    root.style.setProperty(
      '--color-text',
      value === 'light' ? '#444444' : 'white'
    )
    root.style.setProperty(
      '--color-background',
      value === 'light' ? 'white' : 'black'
    )
    root.style.setProperty(
      '--color-brand',
      value === 'light' ? 'hotpink' : 'green'
    )
    root.style.setProperty(
      '--color-primary',
      value === 'light' ? 'hotpink' : 'darksalmon'
    )
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
