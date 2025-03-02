import React from 'react'
import Pic1 from '../assets/doctor/Pic1.png'
import Pic2 from '../assets/doctor/Pic2.png'
import Pic3 from '../assets/doctor/Pic3.png'
import Pic4 from '../assets/doctor/Pic4.png'
import Pic5 from '../assets/doctor/Pic5.png'
import Pic6 from '../assets/doctor/Pic6.png'
import Pic7 from '../assets/doctor/Pic7.png'
import Pic8 from '../assets/doctor/Pic8.png'
const Expert = () => {
  return (
    <>
      <div className="expert-section">
              <div className="content">
                  <h1>Our Expert Doctors</h1>
              </div>
              <div className="doc">
                  <div className="cards" onClick="John()">
                      <img src={Pic1} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. John Doe</b></h3>
                          <p>General Physician</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Richard()">
                      <img src={Pic2} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Richard James</b></h3>
                          <p>Pediatricians</p>
                          <p>M.D., Doctor of Osteopathic</p>
                      </div>
                  </div>
                  <div className="cards" onClick="John2()">
                      <img src={Pic3} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. John Millar</b></h3>
                          <p>Gastroenterologist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Thersa()">
                      <img src={Pic4} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Theresa Hamilton</b></h3>
                          <p>Dermatologist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Brittany()">
                      <img src={Pic5} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Brittany Robertson</b></h3>
                          <p>Gynecologist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Henry()">
                      <img src={Pic6} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Henry Andrews</b></h3>
                          <p>Neurologist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Raymond()">
                      <img src={Pic7} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Raymond Payne</b></h3>
                          <p>Heart Specialist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="cards" onClick="Mukti()">
                      <img src={Pic8} alt="" height="250px" width="255px"/>
                      <div className="container">
                          <h3><b>Dr. Mukti Sharma</b></h3>
                          <p>Orthopedist</p>
                          <p>M.D., MBBS</p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
export default Expert
