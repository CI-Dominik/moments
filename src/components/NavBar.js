import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedInIcons = (
        <>
        {currentUser?.username}
        </>
    );
    const loggedOutIcons = (
        <>
            <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/sign-in">
                <i className="fas fa-sign-in-alt"></i> Sign-in
            </NavLink>
            <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/sign-up">
                <i className="fas fa-user-plus"></i> Sign-up
            </NavLink>
        </>
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand><img src={logo} alt="Logo" height="45" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav
                        className="ms-auto text-center"
                        style={{ maxHeight: '100px' }}
                    >
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar
