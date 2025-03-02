import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="foot">
                <div className="footer">
                    <div className="column1">
                        <img src="../Logo1.PNG" alt="Logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam mollitia illum quaerat.
                            Ullam
                            impedit reprehenderit quidem! Labore aspernatur ducimus necessitatibus consequatur vero accusantium!
                        </p>
                    </div>
                    <div className="column2">
                        <h2>Contact</h2>
                        <div className="detail">
                            <p><b>Address:</b>JV7R+MPC, 100 Feet Rd, near Sultanwind Road, Sudarshan Nagar, Amritsar.</p>
                            <p><b>Phone:</b>+91-9087654323</p>
                            <p><b>Email:</b>appointease@gmail.com</p>
                        </div>
                    </div>
                    <div className="column3">
                        <h2>Useful Links</h2>
                        <div className="link">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/doctor">All Doctors</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <div className="footer-text">
                        <p>Copyright &copy; 2023 by Nancy | All Rights Reserved.</p>
                    </div>
                    <div className="footer-iconTop">
                        <Link to="#home/.home-box"><img src="../up.png" alt="Upper Arrow" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
