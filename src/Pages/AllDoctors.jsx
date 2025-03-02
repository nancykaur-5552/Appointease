import React from 'react'
import { Link } from 'react-router-dom'
import Pic1 from '../assets/doctor/Pic1.png'
import Pic2 from '../assets/doctor/Pic2.png'
import Pic3 from '../assets/doctor/Pic3.png'
import Pic4 from '../assets/doctor/Pic4.png'
import Pic5 from '../assets/doctor/Pic5.png'
import Pic6 from '../assets/doctor/Pic6.png'
import Pic7 from '../assets/doctor/Pic7.png'
import Pic8 from '../assets/doctor/Pic8.png'
import Facebook from '../assets/doctor/facebook.png'
import Instagram from '../assets/doctor/instagram.png'
import LinkdIn from '../assets/doctor/linkdin.png'
const AllDoctors = () => {
    return (
        <>
            <div className="expert">
                <h3>Meet Our Team</h3>
                <h2>Our Expert Doctors</h2>
                <div className="cards">
                    <div className="doc1" onClick="John2()">
                        <div className="image-wrapper">
                            <img src={Pic1} alt="pic1" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. John Doe</h2>
                                <h3>General Physician</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc2" onClick="Richard()">
                        <div className="image-wrapper">
                            <img src={Pic2} alt="pic2" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Richard James</h2>
                                <h3>Pediatrician</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc3" onClick="John()">
                        <div className="image-wrapper">
                            <img src={Pic3} alt="pic3" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. John Millar</h2>
                                <h3>Gastroenterologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc4" onClick="Theresa()">
                        <div className="image-wrapper">
                            <img src={Pic4} alt="pic4" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Theresa Hamilton</h2>
                                <h3>Dermatologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc5" onClick="Brittany()">
                        <div className="image-wrapper">
                            <img src={Pic5} alt="pic5" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Brittany Robertson</h2>
                                <h3>Gynecologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc6" onClick="Henry()">
                        <div className="image-wrapper">
                            <img src={Pic6} alt="pic6" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Henry Andrews</h2>
                                <h3>Neurologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc7" onClick="Raymond()">
                        <div className="image-wrapper">
                            <img src={Pic7} alt="pic7" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Raymond Payne</h2>
                                <h3>Heart Specialist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="doc8" onClick="Mukti()">
                        <div className="image-wrapper">
                            <img src={Pic8} alt="pic8" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Mukti Sharma</h2>
                                <h3>Orthopedist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img src={Facebook} alt="facebook" />
                                <img src={Instagram} alt="instagram" />
                                <img src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDoctors
