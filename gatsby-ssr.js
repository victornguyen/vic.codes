import React from 'react'
import App from './src/components/App'
import { COLORS } from './src/styles/colors'

// <script> to inject to parse color mode from localStorage and set an initial
// color mode and values for React to consume.
const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    // Return stored colour preference if it exists.
    const storedColorPreference = window.localStorage.getItem('color-mode');
    const hasStoredPreference = typeof storedColorPreference === 'string';
    if (hasStoredPreference) {
      return storedColorPreference;
    }

    // Otherwise, check the media query for system value.
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    // Otherwise, default to light.
    return 'light';
  }

  const mode = getInitialColorMode();
  const root = document.documentElement;

  // Set initial color mode
  root.style.setProperty('--initial-color-mode', mode);

  // Set inital color var values according to mode/theme
  for (const [name, color] of Object.entries(${JSON.stringify(COLORS)})) {
    root.style.setProperty('--color-' + name, color[mode])
  }
})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

// <style> to inject with color vars to serve to non-JS clients.
const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (string, [name, color]) => `${string}\n--color-${name}: ${color.light};`,
    ''
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

// A Gatsby SSR lifecycle method that lets us inject content onto pages at
// compile time. https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<MagicScriptTag />)
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
