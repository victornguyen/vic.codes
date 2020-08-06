import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// We need render a <video> node this way so the `muted` attribute gets applied.
// https://github.com/facebook/react/issues/6544
// https://github.com/DylanVann/react-video-tag
const videoTagString = (props) => {
  const autoPlay = props.autoPlay ? ' autoplay' : ''
  const loop = props.loop ? ' loop' : ''
  const muted = props.muted ? ' muted' : ''
  const playsInline = props.playsInline ? ' playsinline' : ''
  const img = props.img ? `<img src="${props.img}">` : ''
  return `<video${muted}${autoPlay}${loop}${playsInline}><source src="${props.src}">${img}</video>`
}

const Wrapper = styled('span')`
  video {
    width: 100%;
    height: auto;
  }
`

const Video = (props) => (
  <Wrapper
    dangerouslySetInnerHTML={{
      __html: videoTagString(props),
    }}
  />
)

Video.propTypes = {
  autoPlay: PropTypes.bool,
  img: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Video.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  type: 'video/mp4',
}

export default Video
