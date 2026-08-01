import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero1.jpg'
function Hero() {
    return (
        <section id='home' className='hero'>
            <div className="hero-content">
                { /*Left Section*/}
                <div className="hero-text">
                    <span className='tagline'>
                        Explore the World
                    </span>
                    <h1>
                        Discover Your Dream
                        <br />
                        Destination
                    </h1>
                    <p>
                        Explore breathtaking destinations, create
                        unforgettable memories, and plan your perfect 
                        vacation with us.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">Explore Now</button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>
                { /*Right Section*/}
            
            <div className="hero-image">
                <img src={heroImage} alt="Travel Destination" />
            </div>

            </div>
        </section>
    );
}

export default Hero