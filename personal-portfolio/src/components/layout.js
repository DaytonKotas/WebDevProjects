import React from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"

const Main = styled.main`
  min-height: calc(100vh - 2.5rem); /* Adjusting for the footer height */
  padding-bottom: 2.5rem; /* Adding bottom padding for footer space */
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
