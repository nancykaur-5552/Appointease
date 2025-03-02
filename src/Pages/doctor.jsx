import React from 'react'
import { Link } from 'react-router-dom'
import AllDoctors from './AllDoctors'
import Experience from './Experience'
import Navbar from './Navbar'
import Footer from './Footer'
import AppointmentForm from './AppointmentForm'
const doctor = () => {
   return (
    <>
      <Navbar />
      <div className="Doctors">
        <div className="banner">
          <h1>Our Doctors</h1>
          <a href="../Home/home.html">Home&nbsp;//</a>
          <a href="../All Doctors/doctor.html" className="doctors">All Doctors</a>
        </div>
      </div>
      <AllDoctors />
      <AppointmentForm />
      <div className="container">
        <AppointmentForm />
        <Experience/>
      </div>
      <Footer />
    </>
  )
}

export default doctor
