import React from 'react'
import App from './src/components/App'

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
