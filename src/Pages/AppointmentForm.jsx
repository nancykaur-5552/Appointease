import React from 'react'
import { Link } from 'react-router-dom'
import book from '../assets/About/book.jpg'
const AppointmentForm = () => {
    return (
        <>
            <div className="form">
                <div className="box">
                    <img src={book} alt="Contact" />
                    <form className="details">
                        <h1>Appointment Form</h1>
                        <label htmlFor="Name">Full Name</label>
                        <input type="text" placeholder="Your Name" />
                        <label htmlFor="Phone">Phone Number</label>
                        <input type="number" placeholder="Your Mobile Number" />
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Your Email" />
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Your Message"></textarea>
                        <button className="send">Make Appointment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AppointmentForm
