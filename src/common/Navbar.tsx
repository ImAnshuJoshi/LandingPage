import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const navigate = useNavigate();
  const homeandclose = () => {
    navigate("/");
    settogglemenu(false);
  };
  const aboutandclose = () => {
    navigate("/about");
    settogglemenu(false);
  };

  return (
    <div className="flex justify-between items-center sticky w-full px-[6rem] py-[.1rem] bg-foreground z-[100] shadow-xl s:p-8 l:px-16 l:py-4">
      <div className=" flex-1 flex justify-start items-center ">
        <div className="mr-16 cursor-pointer">
          <h3 className="font-manrope text-black font-extrabold text-2xl s:text-xl">Edu-freelancer</h3>
        </div>
        <div className="flex flex-row l:hidden">
          <p className="p-style"><a onClick={() => navigate("/")}>Home</a></p>
          <p className="p-style"><a onClick={() => navigate("/about")}>About</a></p>
          <p className="p-style"><a href="#contact">Contact</a></p>
          <p className="p-style"><a href="#help&support">Help&Support</a></p>
        </div>
      </div>
      <div className="flex justify-end items-center  s:hidden">
        <button onClick={() => navigate("/auth")} className="btn-1" type="button">Sign In / Sign Up</button>
      </div>
      <div className="ml-4 hidden relative l:flex">
        <RiMenu3Line className='cursor-pointer' color="#060606" size={27} onClick={() => settogglemenu(true)}/>
        {togglemenu && (
          <div className=" transition duration-500 ease-linear flex w-full h-[60vh] justify-center items-center flex-col text-center bg-white p-8 fixed top-0 right-0 shadow-xl slide-bottom">
            <RiCloseLine color="#060606" className="cursor-pointer absolute top-9 right-8" size={27} onClick={() => settogglemenu(false)}/>
            <div>
              <p className="p-style"><a onClick={homeandclose}>Home</a></p>
              <p className="p-style"><a onClick={aboutandclose}>About</a></p>
              <p className="p-style"><a href="#contact">Contact</a></p>
              <p className="p-style"><a href="#help&support">Help&Support</a></p>
            </div>
            <div className="hidden s:block">
              <button onClick={() => navigate("/auth")} className="btn-1 s:m-[.4rem]" type="button" > Sign In / Sign up </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
