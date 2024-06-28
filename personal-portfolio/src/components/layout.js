import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Header = styled.header`
  background-color: #2c3e50;
  padding: 20px 0;
  text-align: center;
  color: #ecf0f1;
`

const Footer = styled.footer`
  background-color: #2c3e50;
  padding: 10px 0;
  text-align: center;
  color: #ecf0f1;
  position: fixed;
  bottom: 0;
  width: 100%;
`


const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Dayton Kotas</h1>
        <nav>
          <a href="/">Home</a> | <a href="/projects">Projects</a> |{" "}
          <a href="/resume">Resume</a> | <a href="/contact">Contact</a>
        </nav>
      </Header>
      {children}
      <Footer>
        &copy; {new Date().getFullYear()} Dayton Kotas. All rights reserved.
      </Footer>
    </Container>
  )
}

export default Layout
