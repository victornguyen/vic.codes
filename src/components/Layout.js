import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import styled from 'styled-components'

import Column from './Column'
import Footer from './Footer'
import Bio from './Bio'
import AnimatedLink from './AnimatedLink'
import Blockquote from './Blockquote'
import Code from './Code'

const LayoutColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LayoutFooter = styled.footer`
  margin-top: auto;
`

const mdxComponents = {
  a: AnimatedLink,
  blockquote: Blockquote,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

const Layout = ({ children, showBioFooter }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <LayoutColumn>
        <main>{children}</main>
        <LayoutFooter>
          {showBioFooter && <Bio inFooter />}
          <Footer />
        </LayoutFooter>
      </LayoutColumn>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  showBioFooter: PropTypes.bool,
}

Layout.defaultProps = {
  showBioFooter: false,
}

export default Layout
