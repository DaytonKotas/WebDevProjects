import React from "react"
import Header from "./Header"
import Footer from "./footer"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding-bottom: 2.5rem; /* Add padding to ensure footer doesn't overlap content */
`

const Layout = ({ children }) => (
  <PageContainer>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </PageContainer>
)

export default Layout
