import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/About/img1.png'
import img2 from '../assets/About/img2.png'
import Navbar from './Navbar'
import Footer from './Footer'
import AppointmentForm from './AppointmentForm'
const About = () => {
    function create() {
        window.open('/createAcc', '_self');
    }
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="banner">
                    <h1>About Us</h1>
                    <Link to="/home">Home&nbsp;//</Link>
                    <Link to="/about" className="about">About Us</Link>
                </div>
            </div>

            <div className="block-2">
                <div className="left-side">
                    <h2 style={{ color: "rgb(10, 91, 137)" }}>WELCOME TO OUR HOSPITAL</h2>
                    <p>At Appointease, we believe that healthcare should be hassle-free, efficient, and accessible for everyone.
                        Our platform is designed to simplify the doctor appointment booking process, ensuring that patients can
                        quickly connect with trusted healthcare professionals at their convenience.</p>
                    <h3 style={{ color: "rgb(24, 122, 24)" }}>Who we are?</h3>
                    <p>We are a team of tech enthusiasts and healthcare experts committed to bridging the gap between patients
                        and doctors. With a deep understanding of the challenges faced in traditional appointment scheduling, we
                        created Appointease to offer a seamless, time-saving, and user-friendly experience.</p>
                    <h3 style={{ color: "rgb(24, 122, 24)" }}>Our Mission</h3>
                    <p>At Appointease, our mission is to make healthcare more accessible by reducing wait times, eliminating
                        scheduling conflicts, and ensuring that everyone gets the right care at the right time.Join us in
                        revolutionizing healthcare scheduling—because your health matters, and so does your time!</p>
                </div>
                <div className="container">
                    <div className="image-stack">
                        <img src={img1} alt="Doctors" className="image-main" />
                        <img src={img2} alt="Elder care" className="image-overlay" />
                    </div>
                    <div className="experience-box">
                        <h2>25</h2>
                        <p>Years Of Experience in Medical Services</p>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="overlay">
                    <div className="content">
                        <div className="box1">
                            <h1>30</h1>
                            <h5>YEARS OF EXPERIENCED</h5>
                        </div>
                        <div className="box2">
                            <h1>4,500</h1>
                            <h5>HAPPY PATIENTS</h5>
                        </div>
                        <div className="box3">
                            <h1>84</h1>
                            <h5>NUMBER OF DOCTORS</h5>
                        </div>
                        <div className="box4">
                            <h1>300</h1>
                            <h5>NUMBER OF STAFFS</h5>
                        </div>
                    </div>
                </div>
            </div>

            <AppointmentForm />
            <Footer />
        </>
    )
}

export default About
