import React from 'react'
import logo from '../assets/img/LogoBlack.svg'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

const NavBarEx = () => {
  return (
    <>
    <Navbar className="navBg" bg="navbar-ligth" expand="lg">
      <Container>
        <img src={logo}></img>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*<section>
      <Outlet></Outlet>
    </section>*/}
    </>
  )
}

export default NavBarEx