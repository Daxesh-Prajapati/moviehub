import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">Movie Hub</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
                <Nav.Link as={Link} to="/top-rated">Top Rated</Nav.Link>
                <Nav.Link as={Link} to="/now-playing">Now Playing</Nav.Link>
                <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
