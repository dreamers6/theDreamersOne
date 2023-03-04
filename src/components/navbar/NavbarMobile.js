import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarMobile() {
    return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="#">Features</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="#">Pricing</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                    </ul>
                    </li>
                </ul>
            // <h1>haha</h1>
    )
}

export default NavbarMobile 
