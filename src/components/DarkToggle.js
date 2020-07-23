import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={event => {
          setColorMode(event.target.checked ? 'dark' : 'light')
        }}
      />{' '}
      Go dark
    </label>
  )
}

export default DarkToggle
