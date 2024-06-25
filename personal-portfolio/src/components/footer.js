import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: var(--grey);
  color: var(--white);
  text-align: center;
  padding: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
`

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
  </FooterContainer>
)

export default Footer
