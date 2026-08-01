import React from 'react'
import aboutImage from '../../assets/about.jpg'

import { FaShieldAlt, FaSuitcase, FaHeadset, FaStar
    ,FaUsers,FaMapMarkedAlt,FaArrowRight} from 'react-icons/fa'
import './About.css'
function AboutSection() {
    return (
        <section className='about-section' id='about'>
            <div className="about-container">
                {/* left section */}
                <div className="about-left">
                    <img src={aboutImage} alt="Travel" />
                </div>

                {/* right section */}
                <div className="about-right">
                    <div className="about-heading">
                        <h5> <span>About</span> us</h5>
                        <h2>Explore The World With Travelia</h2>
                        <p>We create unforgettable travel experiences with
                            carefully planned tours, trusted guides, and affordable
                            packages designed to make every journey memorable.
                        </p>
                    </div>

                    <div className="about-features">

                        <div className="feature">
                            <div className="feature-icon">
                                <FaShieldAlt />
                            </div>

                            <div className="feature-content">
                                <h4>
                                    Trusted Travel Expert
                                </h4>
                                <p>
                                    Oue experienced travel specialists ensure every journey is safe, smooth ,unforgettable.
                                </p>

                            </div>

                        </div>

                        <div className="feature">

                            <div className="feature-icon">
                                <FaSuitcase />
                            </div>

                            <div className="feature-content">
                                <h4>
                                    Personalized Tour Packages
                                </h4>
                                <p>
                                    Choose customized travel packages designed to match your budget,
                                    interests, and travel style.
                                </p>
                            </div>

                        </div>

                        <div className="feature">

                            <div className="feature-icon">
                                <FaHeadset />
                            </div>

                            <div className="feature-content">
                                <h4>
                                    24/7 Customer Support
                                </h4>
                                <p>
                                    Our friendly support team is avialable anytime to assist you beore,during,
                                    and after your trip.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            
            </div>


            <div className="about-stats">

                <div className="stat">
                     <div className="stat-icon">
                    <FaUsers />
                     </div>
                     <div className="stat-content">
                    <h3>10k+</h3>
                    <p>Happy Travels</p>
                     <hr className="line" />
                    </div>
                </div>

                <div className="stat">
                     <div className="stat-icon">
                    <FaMapMarkedAlt />
                    </div>
                    <div className="stat-content">
                    <h3>50+</h3>
                    <p>Destinations</p>
                        <hr className="line" />
                    </div>
                </div>

               

                <div className="stat">
                     <div className="stat-icon">
                    <FaStar />
                    </div>
                    <div className="stat-content">
                    <h3>4.9</h3>
                    <p>Customer Ratting</p>
                    <hr className="line" />
                    </div>
                </div>

                <div className="stat">
                   <div className="stat-icon">
                    <FaHeadset />
                    </div>
                    <div className="stat-content">
                    <h3>
                        24/7                       
                    </h3>
                   <p>Support</p>
                       <hr className="line" />
                   </div>
                </div>

            </div>
            <button className='about-btn'>
                Explore More <FaArrowRight/>
            </button>


        </section>
    )
}

export default AboutSection;