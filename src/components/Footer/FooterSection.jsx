import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub,FaRegCopyright } from 'react-icons/fa'
import './Footer.css'
function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Travelia</h2>
                    <p>
                        Explore beautiful destinations, discover new experiences, and make unforgettable
                        travel memories.
                    </p>
                    <div className="footer-socials">
                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedin />
                        </a>

                        <a href="#">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#destination">Destination</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </div>

                {/* Services */}

                <div className="footer-column">
                    <h3>Our Services</h3>
                    <ul>
                        <li><a href="#">Tour Packages</a></li>
                        <li><a href="#">Travel Planning</a></li>
                        <li><a href="#">Hotel Booking</a></li>
                        <li><a href="#">Flight Booking</a></li>
                        <li><a href="#">Travel Guide</a></li>
                    </ul>
                </div>

                {/* Contact */}

                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>
                    <p>Travelia Office, Jauharabad, Pakistan</p>
                    <p>travelia@gmail.com</p>
                    <p>+92 300 1234567</p>
                </div>
            </div>


         <div className="footer-bottom">
            <p><FaRegCopyright className='copyright' />    2026 Travelia. All rights reserved</p>
         </div>
        </footer>
    )
}

export default FooterSection