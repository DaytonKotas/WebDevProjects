import React from "react"
import { GlobalStyle } from "./src/globalStyles"

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)