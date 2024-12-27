import React, { useState } from "react";

import { LOGO2 } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex justify-center items-center">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         
        </Link>
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {new Date().getFullYear()} &copy; Aayush Gupta
          
        </p>
      </div>
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl">
        <Typewriter
          text={[
            "Thank's for visiting!",
            "Download my resume!",
            "Data Science Portfolio",
          ]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
