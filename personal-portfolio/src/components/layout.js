import React from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/globalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout
