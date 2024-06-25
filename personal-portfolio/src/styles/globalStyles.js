import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --grey: #333;
    --dark-green: #006400;
    --black: #000;
    --white: #fff;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    background-color: var(--white);
    color: var(--black);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
    color: var(--dark-green);
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: var(--dark-green);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
