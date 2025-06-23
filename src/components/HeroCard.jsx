import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

function HeroCard({ imgSrc, title1, title2, btn1, btn2, p }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[30px] overflow-hidden mt-10 mx-auto flex items-end justify-start bg-[url('/herocard.jpg')] bg-cover bg-center p-8 md:p-14">
      {/* <div className="absolute inset-0 w-full h-full bg-black opacity-50">
          <img src={imgSrc} alt="Hero Background" className="w-full h-full object-cover" />
        </div> */}
      <div className="flex flex-col justify w-full lg:max-w-[80%]">
        <h3 className="h3 text-white text-center lg:text-start">
          <span className="font-calvino">{title1}</span> 
          <span className="font-calvino-italic"> {title2}</span>
        </h3>
        {p && (<p className="text-white mt-3">{p}</p>)}

        <div className="flex flex-row justify-center lg:justify-start items-center mt-4">
          {btn1 && (
            <Link
              to={btn1.link}
              className="rounded-[30px]  font-archivo bg-white text-[#454545] transform duration-300 hover:bg-[#f0f0f0] p-5 font-semibold md:text-[28px]"
              target="_blank"
            >
              {btn1.text}
            </Link>
          )}

          {btn2 && (
            <Link
              to={btn2.link}
              className="rounded-[30px]  font-archivo bg-[#FFFFFF4D] text-white transform duration-300 hover:bg-[#ffffff67] ms-4 p-5 font-semibold md:text-[28px]"
            >
              {btn2.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
