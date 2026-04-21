import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background-color: #FAFAF8;
    color: #1a1a1a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --sage: #7C9A7E;
    --sage-light: #EEF3EE;
    --sage-mid: #C8D8C8;
    --cream: #FAFAF8;
    --dark: #1a1a1a;
    --gray: #666;
  }
`

export default GlobalStyles