import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../components/Button';
import '../styles/Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* Navbar */}
                    <div className='navbar'>
                        <div className='navbar-container container'>
                            {/* Navbar Logo*/}
                            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                                {/*<img src="images/logo-white.png" alt="Alt" className='navbar-icon'/>*/}
                                <span className='navbar-name'>SHOCKWAVE</span>
                            </Link>
                            
                            {/* Navbar Menu Toggler */}
                            <div className='menu-icon' onClick={handleClick}>
                                {click ? <FaTimes/> : <FaBars/>}
                            </div>

                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <div className="dropdown-wrapper">
                                    <li className='nav-item'>
                                        <Link to='services' smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                                            NEWS
                                        </Link>
                                    </li>
                                    <div className="dropdown-content">
                                        <a href="/patch-notes">PATCH NOTES</a>
                                    </div>
                                </div>

                                <div className="dropdown-wrapper">
                                    <li className='nav-item'>
                                        <Link to='services' smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                                            GUIDES
                                        </Link>
                                    </li>
                                    <div className="dropdown-content">
                                        <a href="/classes">CLASSES</a>
                                        <a href="/dungeons">DUNGEONS</a>
                                        <a href="/raids">RAIDS</a>
                                        <a href="/battlegrounds">BATTLEGROUNDS</a>
                                        <a href="/arena">ARENA</a>
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <li className='nav-item'>
                                    {button ? (
                                        <Link to='contact-container' smooth={true} duration={1000} className='nav-links'>
                                            <Button buttonStyle='style-transparent'
                                            buttonSize='size-auto'
                                            arrow='arrow-light'>
                                                SHOP
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link to='contact-container' smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                                            <Button buttonStyle='style-primary' 
                                            buttonColor="purple"
                                            buttonSize='size-auto'
                                            arrow='arrow-light'>
                                                SHOP
                                            </Button>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
            </IconContext.Provider>
        </>
    )
}


export default Navbar;