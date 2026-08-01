import React from 'react'
import './Contact.css'
import { FaMapMarkedAlt, FaPhoneAlt,FaClock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import travelQuote from '../../assets/travel-quote1.png'
import bottomImage from '../../assets/travel-illustration.jpg'
function ContactSection() {
    return (
        <section className='contact-section' id='contact'>
            <div className="contact-overlay">
                <div className="contact-header">
                    <p className="contact-tag">Get in Touch
                    </p>
                    <hr />
                    <h2>
                        Let's Plan Your
                        <span style={{ color: '#2563eb', fontStyle: 'italic' }}> next Adventure</span>
                    </h2>
                    <p className='contact-description'>
                        We'd love to hear from you.Whether you have a travel quetsion, need advice, or want to plan
                        your dream trip, our team is always ready to help.
                    </p>
                </div>
                <div className="contact-container ">
                    <div className="contact-left">
                        <div className="heading">
                            <h2>
                                <span style={{textDecoration:
                                    'underline #2563EB',textUnderlineOffset:'8px'
                                }}>Reach</span> Us On
                            </h2>
                        </div>
                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaMapMarkedAlt />
                                </div>
                                <div className="info-text">
                                    <h4>
                                        Visit us
                                    </h4>
                                    <p>Travelia Office, Jauharabad, Pakistan</p>
                                </div>

                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <MdEmail />
                                </div>
                                <div className="info-text">
                                    <h4>
                                        Email
                                    </h4>
                                    <p>travelia@gmail.com
                                        support@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="info-text">
                                    <h4>
                                        Call us
                                    </h4>
                                    <p>+92 300 1234567 <br />
                                        +92 321 1234567</p>
                                </div>
                            </div>


                        </div>

                        <div className="travel-quote">
                            <img src={travelQuote} alt="Travel Quote" />
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-form">
                            <div className="form-header">
                                <h3> <span style={{textDecoration:
                                    'underline #2563EB',textUnderlineOffset:'10px'
                                }}>Send</span> Us a Message</h3>
                                <p>Have a question or need help planning your trip?
                                    Send us a message and we'll get back to you.
                                </p>

                            </div>
                            <form >
                                <div className='form-group'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' placeholder='Enter your name' />

                                </div>

                                <div className='form-group'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id='email' placeholder='Enter your email' />

                                </div>

                                  <div className='form-group'>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id='subject' placeholder='What can we help you with?' />

                                </div>

                                  <div className='form-group'>
                                    <label htmlFor="message">Message</label>
                                    <textarea  id="message" rows='4' placeholder='Write your message...'
                                    ></textarea>

                                </div>
                                <button type='submit' className='contact-submit '>
                                  Send Message
                                </button>

                            </form>
                        </div>

                    </div>


                </div>
                <div className="contact-bottom">
                    <div className="bottom-content">
                        <div className="bottom-icon">
                           <FaClock/>
                        </div>
                        <div className="bottom-text">
                            <h3>We're Available 24/7</h3>
                            <p>Our team is always here to assist you with your travel plans. </p>
                        </div>
                    </div>
                       <div className="bottom-illustration">
                    <img src={bottomImage} alt="Travel illustratiom" />
                </div>
                </div>
              
            </div>

        </section>
    )
}

export default ContactSection