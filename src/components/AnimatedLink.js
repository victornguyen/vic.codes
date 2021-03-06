/* eslint-disable react/prop-types */
import React, { Children, createRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import { ThemeContext } from './ThemeContext'
import Link from './Link'
import styled from 'styled-components'

const TextLink = styled(animated(Link))`
  display: inline-block;
  text-decoration: none;
  padding: 0 0.3em;
  background: ${({ alternate }) =>
    alternate === 'true'
      ? `rgb(var(--color-link-bg-alt))`
      : `rgba(var(--color-link-bg), 0.15)`};
  color: ${({ color }) => `rgb(var(--color-${color}))`};
  border: 1px solid rgba(var(--color-link-bg), 0.2);
  border-radius: 0.2em;
  line-height: 1.5;
  font-weight: ${({ alternate }) => (alternate === 'true' ? `bold` : `normal`)};
  // TODO: lose colormode and use vars
  text-shadow: ${({ colormode }) =>
    colormode === `dark` ? `1.5px 1.5px 0 rgba(0, 0, 0, 0.7)` : `none`};
  :hover {
    background: ${({ color }) => `rgb(var(--color-${color}))`};
    color: rgb(var(--color-link-text-hover));
    text-shadow: none;
    border-color: transparent;
  }
`

// TODO: styled to handle img links. Are there other use cases?
const OtherLink = styled(animated(Link))`
  display: inline-block;
  border-radius: 3px;
  border: 5px solid rgb(var(--color-brand1));
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
  :hover {
    border-color: rgb(var(--color-brand2));
  }
`

// Static values that control the hover animation
const PERSPECTIVE = 200
const ROTATE_MODIFIER_X = 0.02
const ROTATE_MODIFIER_Y = 0.035
const SPRING_CONFIG = {
  mass: 1,
  tension: 1000,
  friction: 20,
}

// Returns computed [x, y, s] values to apply with trans().
// These values control the amount of rotation to apply based on the cursor
// position (x, y) relative to the element's position (left, top) and
// dimensions (width, height).
const calc = (x, y, { left, top, width, height }, scaleTo, enablePerspective) =>
  enablePerspective
    ? [
        -(((y - top) / height) * 100 - 50) / (width * ROTATE_MODIFIER_X),
        (((x - left) / width) * 100 - 50) / (width * ROTATE_MODIFIER_Y),
        scaleTo,
      ]
    : [0, 0, scaleTo]

// Return a css transform string to interpolate
const trans = (x, y, s) =>
  `perspective(${PERSPECTIVE}px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

// Returns true if given React children is a string
// TODO: test
const childrenIsText = (children) =>
  Children.count(children) === 1 &&
  typeof Children.toArray(children)[0] === 'string'

const AnimatedLink = ({
  alternate,
  children,
  enablePerspective,
  href,
  scaleTo,
  ...rest
}) => {
  const ref = createRef()
  const { colorMode } = useContext(ThemeContext)
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: SPRING_CONFIG,
  }))

  const isTextLink = childrenIsText(children)
  const Element = isTextLink ? TextLink : OtherLink
  const elementProps = isTextLink
    ? {
        ref,
        onMouseMove: ({ clientX: x, clientY: y }) => {
          const rect = ref.current.getBoundingClientRect()
          return set({ xys: calc(x, y, rect, scaleTo, enablePerspective) })
        },
        onMouseLeave: () => set({ xys: [0, 0, 1] }),
        style: { transform: props.xys.interpolate(trans) },
      }
    : {}

  return (
    <Element
      to={href}
      alternate={alternate.toString()}
      colormode={colorMode}
      {...elementProps}
      {...rest}
    >
      {children}
    </Element>
  )
}

AnimatedLink.propTypes = {
  alternate: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  enablePerspective: PropTypes.bool,
  href: PropTypes.string.isRequired,
  scaleTo: PropTypes.number,
}

AnimatedLink.defaultProps = {
  alternate: false,
  color: 'brand4',
  enablePerspective: true,
  scaleTo: 1.15,
}

export default AnimatedLink

const coloredButton = (color) => (props) => (
  <AnimatedLink {...props} color={color} />
)

// We export AnimatedLinks with pre-baked colours so they can be easily
// configured in MDXProvider and consumed via MDXRenderer.
export const LinkBrand1 = coloredButton('brand1')
export const LinkBrand2 = coloredButton('brand2')
export const LinkBrand3 = coloredButton('brand3')
export const LinkBrand4 = coloredButton('brand4')
