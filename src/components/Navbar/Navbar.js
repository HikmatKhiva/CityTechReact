import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className='container'>
                    <div className="navbar-container d-flex justify-content-between">
                        <Link to="/" className="navbar-logo">
                            <span className='header-logo__color'>City Teach</span> Coding School
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={click ? 'nav-menu active' : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar