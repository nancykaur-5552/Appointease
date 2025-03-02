import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import location from '../assets/contact/location.png'
import contacts from '../assets/contact/contacts.png'
import internet from '../assets/contact/internet.png'
import message from '../assets/contact/message.png'
import cont from '../assets/contact/cont.avif'
const contact = () => {
  function create() {
    window.open('/createAcc', '_self');
}
  return (
    <>
     <Navbar/>
    <div className="contact">
        <div className="banner">
            <h1>Contact Us</h1>
            <Link to="/">Home&nbsp;//</Link>
            <Link to="contact" className="contact">Contact Us</Link>
        </div>
    </div>

    <div className="map">
        <p><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7183870318736!2d74.8891916754771!3d31.61417547417124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197cb957eaf97d%3A0x2127b4207f6390e0!2sAmritsar%20Hospital!5e0!3m2!1sen!2sin!4v1739109912775!5m2!1sen!2sin"
                width="1000" 
                height="450" 
                style={{border:'0'}} allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/></p>
    </div>
    <div className="card">
        <div className="box1">
            <img src={location} alt="Address"/>
            <h3>ADDRESS</h3>
            <p>JV7R+MPC, 100 Feet Rd, near Sultanwind Road, Sudarshan Nagar, Amritsar.
            </p>
        </div>
        <div className="box2">
            <img src={contacts} alt="Address"/>
            <h3>CONTACT NUMBER</h3>
            <p>+91-9087654323</p>
        </div>
        <div className="box3">
            <img src={message} alt="Address"/>
            <h3>EMAIL ADDRESS</h3>
            <p>appointease@gmail.com</p>
        </div>
        <div className="box4">
            <img src={internet} alt="Address"/>
            <h3>WEBSITE</h3>
            <p>Appointease.com</p>
        </div>
    </div>
    <div className="form">
        <div className="box">
            <img src={cont} alt="Contact"/>
            <form className="details">
                <label htmlFor="Name"></label>
                <input type="text" placeholder="Your Name"/>
                <label htmlFor="Email"></label>
                <input type="email" placeholder="Your Email"/>
                <label htmlFor="Subject"></label>
                <input type="text" placeholder="Subject"/>
                <label htmlFor="message"></label>
                <textarea placeholder="Message"></textarea>
                <button className="send">Send Message</button>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default contact
