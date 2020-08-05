import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { COLORS } from '../styles/colors'

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

  const setColorMode = mode => {
    const root = window.document.documentElement

    // Update React colorMode state
    rawSetColorMode(mode)

    // Update localStorage
    localStorage.setItem('color-mode', mode)

    // Update colour css vars from theme
    for (const [name, color] of Object.entries(COLORS)) {
      root.style.setProperty(`--color-${name}`, color[mode])
    }
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
