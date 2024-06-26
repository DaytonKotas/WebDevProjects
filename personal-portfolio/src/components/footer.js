import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: var(--grey);
  color: var(--white);
  text-align: center;
  padding: 1rem;
  height: 2.5rem; /* Set the height of the footer */
`

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Dayton Kotas. All rights reserved.</p>
  </FooterContainer>
)

export default Footer
