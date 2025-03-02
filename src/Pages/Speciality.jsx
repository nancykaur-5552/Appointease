import React from 'react'
import Dermatologist from '../assets/Home/Dermatologist.png';
import Gastro from '../assets/Home/Gastro.png';
import Gynecologist from '../assets/Home/Gynecologist.png';
import Neurologist from '../assets/Home/Neurologist.png';
import Pediatricians from '../assets/Home/Pediatricians.png';
import Physician from '../assets/Home/Physician.png';
const Speciality = () => {
  return (
    <>
      <div className="speciality">
              <h2>Find by Speciality</h2>
              <p>Simply browse thorugh our extensive list of doctors, schedule <br/>
                  your appointment hassle-free.
              </p>
              <div className="expert">
                  <img src={Physician} alt="Physician"/>
                  <img src={Pediatricians} alt="Pediatricians"/>
                  <img src={Neurologist} alt="Neurologist"/>
                  <img src={Gynecologist} alt="Gynecologist"/>
                  <img src={Gastro} alt="Gastro"/>
                  <img src={Dermatologist} alt="Dermatologist"/>
              </div>
              <div className="Expertname">
                  <h4>General Physician</h4>
                  <h4>Pediatricians</h4>
                  <h4>Neurologist</h4>
                  <h4>Gynecologist</h4>
                  <h4>Gastroenterologist</h4>
                  <h4>Dermatologist</h4>
              </div>
          </div>
    </>
  )
}

export default Speciality
