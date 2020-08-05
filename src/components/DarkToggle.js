import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Switch from 'react-switch'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext'

const DarkToggle = ({ className }) => {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <label className={className}>
      <Switch
        aria-label="Toggle dark mode"
        boxShadow="0 0 4px rgba(0, 0, 0, 0.7)"
        checked={colorMode === 'dark'}
        checkedIcon={false}
        handleDiameter={20}
        height={24}
        offHandleColor="#E7E9ED"
        onHandleColor="#182026"
        offColor="#6C6C6C"
        onColor="#FAC863"
        onChange={checked => {
          setColorMode(checked ? 'dark' : 'light')
        }}
        uncheckedIcon={false}
        width={44}
      />
    </label>
  )
}

DarkToggle.propTypes = {
  className: PropTypes.string,
}

export default DarkToggle

const PositionedToggle = styled(DarkToggle)`
  position: absolute;
  top: 18px;
  right: 22px;
  z-index: 1;
`

export { PositionedToggle }
