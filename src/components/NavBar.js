import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container fluid>
                <Navbar.Brand><img src={logo} alt="Logo" height="45" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav
                        className="ms-md-auto"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link>
                            <i className="fas fa-home"></i> Home
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-sign-in-alt"></i> Sign in
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-user-plus"></i> Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar
