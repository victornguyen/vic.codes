import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Column from './Column'
import Footer from './Footer'

const LayoutColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LayoutFooter = styled(Footer)`
  margin-top: auto;
`

const Layout = ({ children }) => {
  return (
    <LayoutColumn>
      <main>{children}</main>
      <LayoutFooter />
    </LayoutColumn>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
