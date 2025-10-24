import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {  FaBars } from "react-icons/fa6";
import {  FaTimes } from "react-icons/fa";

const Nav = () => {

  const[Isopen, setIsOpen]= useState(false)

  // console.log(open);
  const navigate=useNavigate()
  


  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-sm bg-white">
      <div className="text-2xl font-bold text-black">Campus <span className="text-primary">Crib</span></div>

      {!Isopen ? <FaBars onClick={() => setIsOpen(!Isopen)} className="block cursor-pointer md:hidden" size={30} /> : <FaTimes size={30} onClick={() => setIsOpen(!Isopen)}  className="block cursor-pointer md:hidden"/>}

      <div className="hidden md:block">
        <div className="flex items-center gap-28">
          <ul className="hidden md:flex space-x-8 text-secondary">
            <Link>Home</Link>
            <Link>How it works</Link>
            <Link>Pricing</Link>
            <Link>Contact</Link>
          </ul>
          <button onClick={()=>navigate('/signup')} className="bg-[#241401] text-white px-5 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
