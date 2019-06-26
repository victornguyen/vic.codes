import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import Column from './Column'
import Footer from './Footer'
import AnimatedLink from './AnimatedLink'
import Blockquote from './Blockquote'

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
    <MDXProvider components={{ a: AnimatedLink, blockquote: Blockquote }}>
      <LayoutColumn>
        <main>{children}</main>
        <LayoutFooter />
      </LayoutColumn>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
