import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CardProvide({ data }) {
  const { title, image, bgColor, animationDelay} = data;
  
  return (
    <div className="card p-3 md:p-5 text-center"
       data-aos="fade-up"
       data-aos-duration="1000"
       data-aos-delay={animationDelay}
    >
      <div className="card-img">
        <img src={`/${image}`} className="w-full" alt="" />
      </div>
      <div className={`card-text ${bgColor? `${bgColor} body-t-color`:"bg-[#ff96ff] text-white"}`}>
        <div className="card-title font-archivo text-white font-semibold p-3">{title}</div>
      </div>
    </div>
  );
}

export default CardProvide;
