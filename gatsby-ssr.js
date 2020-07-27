import React from 'react'
import { COLORS } from './src/styles/colors'

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

// A Gatsby SSR lifecycle method that lets us inject content onto pages at
// compile time. https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
