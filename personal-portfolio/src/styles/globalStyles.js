import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`

export default GlobalStyle
