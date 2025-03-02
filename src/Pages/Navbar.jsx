import React from 'react'
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  function create() {
    window.open('/createAcc', '_self');
}
  return (
    <>
      <nav className="flex items-center justify-between px-[12px] py-px sticky bg-[white] top-[0] w-full">
        <div className="logo">
            <img class="h-[100px]"src={Logo1} alt="Appointease Logo"/>
        </div>
        <div className="flex gap-[30px]">
            <Link className="hover:text-[#1d548e] no-underline text-[rgb(5,_5,_5)] text-[18px] font-medium font-['Lucida_Sans',_'Lucida_Sans_Regular',_'Lucida_Grande',_'Lucida_Sans_Unicode',_Geneva,_Verdana,_sans-serif]" to="/">Home</Link>
            <Link className="hover:text-[#1d548e] no-underline text-[rgb(5,_5,_5)] text-[18px] font-medium font-['Lucida_Sans',_'Lucida_Sans_Regular',_'Lucida_Grande',_'Lucida_Sans_Unicode',_Geneva,_Verdana,_sans-serif]" to="/About">About Us</Link>
            <Link className="hover:text-[#1d548e] no-underline text-[rgb(5,_5,_5)] text-[18px] font-medium font-['Lucida_Sans',_'Lucida_Sans_Regular',_'Lucida_Grande',_'Lucida_Sans_Unicode',_Geneva,_Verdana,_sans-serif]" to="/doctor">All Doctors</Link>
            <Link className="hover:text-[#1d548e] no-underline text-[rgb(5,_5,_5)] text-[18px] font-medium font-['Lucida_Sans',_'Lucida_Sans_Regular',_'Lucida_Grande',_'Lucida_Sans_Unicode',_Geneva,_Verdana,_sans-serif]" to="/contact">Contact Us</Link>
        </div>
        <button className="hover:rounded-none hover:bg-[rgb(34,_159,_34)] hover:text-[white] bg-[#3573b5] text-[white] rounded-[9px] px-[20px] py-[10px] cursor-pointer border-none text-[16px]" onClick={create}>Create Account</button>
    </nav>
    </>
  )
}

export default Navbar
