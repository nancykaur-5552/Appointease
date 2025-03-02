import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Expert from './Expert';
import index from '../assets/index.png'
import Speciality from './Speciality';

const home = () => {
    function ContactBox() {
        window.open('/contact','_self');
    }
    function doctorBox(){
        window.open('/doctor','_self');
    }
  return (
    <>
    <Navbar/>
    <div className="home-box">
        <img src={index} alt="Home image"/>
        <h1>Book Appointment <br/>With Trusted Doctors</h1>
        <p>Simple browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free.</p>
        <button>BOOK APPOINTMENT </button>
    </div>
    <Speciality/>
    <Expert/>
    <div className="contact">
        <div className="row">
            <div className="left-side">
                <h3>Get in Touch</h3>
                <h1>Best Medical & Health <br/>Care Near Your City</h1>
                <h4>We've 25 Years of experience in Medical Services.</h4>
                <div className="buttons">
                    <button className="cont" onClick={ContactBox}><b>Contact Us | +</b></button>
                    <button className="List" onClick={doctorBox}><b>Doctors List | +</b></button>
                </div>
            </div>
            <div className="right-side">
                <img className="videoplay" src="play.gif" alt="play" onClick="playVideo()"/>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default home;
