import { Link } from "react-router-dom";
import './navbar.css'
import { HamburgerSlider } from 'react-animated-burgers'
import React, { useState, useCallback } from 'react'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
      () => setIsActive(prevState => !prevState),
      [],
    )

    return ( 
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid container">
                    <Link to='/'>
                        <a className="navbar-brand">🍿 <span className='navbar-brand-text'>Tv Shows</span></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <HamburgerSlider
                            buttonColor="transparent"
                            barColor="white"
                            {...{ isActive, toggleButton }} />
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/'>
                                <a className="nav-link" >Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'>
                                <a className="nav-link" >About</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
     );
}
 
export default Navbar;