import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" section_padding flex rounded-br-[150px] bg-gradient-to-r from-[#4923B4] to-[#E878CF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] l:flex-col ">
      <div className="mr-[5rem] flex flex-1 flex-col items-start justify-center l:mb-[3rem] l:mr-0">
        <h1 className="font-manrope text-[62px] font-extrabold leading-[75px] tracking-[-0.04em] text-foreground m:text-[48px] m:leading-[60px] vs:text-[36px] vs:leading-[48px]">
          Unlock Your Freelance Potential!
        </h1>
        <p className="mt-6 text-xl font-normal  not-italic text-foreground m:text-base vs:text-sm ">
          Freelancing websites connect skilled professionals with clients,
          offering remote work opportunities, flexible schedules, and a global
          platform to showcase expertise and secure projects.
        </p>
        <div className="mb-4 mt-8 flex">
          <button
            onClick={() => navigate("/auth")}
            className="btn-4 ss:text-sm m:text-base"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img className="h-full w-full " src="/images/Saly-11.png" alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
