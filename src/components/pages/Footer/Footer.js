import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';

function Footer() {
  
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <section className='footer-logo'>
                    <div className='logo'>
                        <Link to='/' className='social-logo-link'>
                            <h1 className='social-logo'>SHOCKWAVE</h1>
                        </Link>
                    </div>
                </section>

                <section className='footer-subscription'>
                    {/* Header */}
                    <label htmlFor="email">
                        <p className='footer-subscription-heading'>
                            THIS IS THE FOOTER
                        </p>
                    </label>
                    <p className='footer-subscription-text'>
                        A SMALLER SUBTEXT WOULD GO HERE
                    </p>

                </section>

                <section className='social-media'>
                    <div className='social-media-wrap'>

                        {/* Socials */}
                        <div className='social-icons'>
                            <a className="sociallink" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <FaFacebook/>
                            </a>
                            
                            <a className="sociallink" href="https://www.twitter.com/decisionthree" target="_blank" rel="noreferrer">
                                <FaTwitter/>
                            </a>

                            <a className="sociallink" href="https://www.instagram.com/ruairifit/" target="_blank" rel="noreferrer">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;