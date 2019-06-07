/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Element = styled(animated.a)`
  display: inline-block;
  text-decoration: none;
  color: var(--brand);
  padding: 0 0.3em;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2em;
  :hover {
    background: var(--accent);
    color: var(--title-color);
  }
`

// Static values that control the hover animation
const PERSPECTIVE = 200
const ROTATE_MODIFIER_X = 0.055
const ROTATE_MODIFIER_Y = 0.035
const SCALE_TO = 1.15
const SPRING_CONFIG = {
  mass: 1,
  tension: 1000,
  friction: 20,
}

// Returns computed [x, y, s] values to apply with trans().
// These values control the amount of rotation to apply based on the cursor
// position (x, y) relative to the element's position (left, top) and
// dimensions (width, height).
const calc = (x, y, { left, top, width, height }) => [
  -(((y - top) / height) * 100 - 50) / (height * ROTATE_MODIFIER_X),
  (((x - left) / width) * 100 - 50) / (width * ROTATE_MODIFIER_Y),
  SCALE_TO,
]

// Return a css transform string to interpolate
const trans = (x, y, s) =>
  `perspective(${PERSPECTIVE}px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AnimatedLink = ({ children, href }) => {
  const ref = useRef(null)
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: SPRING_CONFIG,
  }))

  return (
    <Element
      href={href}
      ref={ref}
      onMouseMove={({ clientX: x, clientY: y }) => {
        const rect = ref.current.getBoundingClientRect()
        return set({ xys: calc(x, y, rect) })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </Element>
  )
}

// TODO: make the styles extendable with className
AnimatedLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
}

export default AnimatedLink
