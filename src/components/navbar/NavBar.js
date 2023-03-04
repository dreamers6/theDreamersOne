import "./NavBar.css" ;
import React from 'react' ;
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/imgs-ayoub/logo.png";
import { Button } from 'react-bootstrap';
// import { button } from "NavBarStyle.js"

function NavBar() {

    return (
        <Navbar expand="lg">
        <Container fluid>
            <Navbar.Brand><NavLink to="/"><img src={logo} alt="logo" /></NavLink></Navbar.Brand>
            <div className="search">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavLink href="#link"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></NavLink>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
            <ul className="me-0 navbar-nav">
                <NavLink to="/">Ayoub</NavLink>
                <NavLink to="/services">Services<i class="fa-solid fa-plus"></i>
                <div className="inside">
                    <NavLink to="#home"><span>Service</span></NavLink>
                    <NavLink to="#home"><span>Service Details</span></NavLink>
                </div>
                </NavLink>
                <NavLink to="/header">Blog <i class="fa-solid fa-plus"></i>
                <div className="inside">
                    <NavLink to="#home"><span>Blog</span></NavLink>
                    <NavLink to="#home"><span>Blog Details</span></NavLink>
                </div>
                </NavLink>
                <NavLink to="/footer">About</NavLink>
                <NavLink to="/search"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></NavLink>
                <NavLink to="tel:(+212)625742282"><i class="fa-sharp fa-solid fa-phone"></i> (+212) 625 742 282</NavLink>
                <NavLink to="/contactUs"><Button variant="primary">CONTACT US <i class="fa-sharp fa-solid fa-greater-than"></i></Button></NavLink>
            </ul>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;
