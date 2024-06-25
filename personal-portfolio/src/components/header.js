import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
)

export default Header
