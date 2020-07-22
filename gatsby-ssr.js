import React from 'react'

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

  root.style.setProperty(
    '--color-text',
    mode === 'light'
      ? '#444'
      : 'white'
  );
  root.style.setProperty(
    '--color-background',
    mode === 'light'
      ? 'white'
      : 'black'
  );
  root.style.setProperty(
    '--color-brand',
    mode === 'light'
      ? 'hotpink'
      : 'green'
  );
  root.style.setProperty(
    '--color-primary',
    mode === 'light'
      ? 'hotpink'
      : 'darksalmon'
  );
  root.style.setProperty('--initial-color-mode', mode);
})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

// A Gatsby SSR lifecycle method that lets us inject content onto pages at
// compile time. https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
