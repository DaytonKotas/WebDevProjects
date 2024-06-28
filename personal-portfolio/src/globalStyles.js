import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: #61dafb;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`