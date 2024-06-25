import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Dayton Kotas. All rights reserved.</p>
  </FooterContainer>
)

export default Footer
