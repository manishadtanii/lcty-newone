import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import Heading from "../components/Heading";

const Error404 = () => {
    const data = {
    title: [
      { text: "Something", class: "font-calvino" },
      { text: "went", class: "font-calvino-italic" },
      { text: "wrong", class: "font-calvino" },
    ],

    textAlign:"text-center",
    spacing:"p-4",
    fontSize:"h2"
  };
    const data2 = {
    title: [
      { text: "ERROR", class: "font-calvino" },
    ],

    textAlign:"text-center",
    spacing:"p-4",
    fontSize:"h2"
  };
  return (
    <div className="flex flex-col items-center justify-center  pb-40 pt-20 text-center px-4 mt-[102px] md:mt-[128px]">
      <Heading data={data2}/>
     

      <h1 className="text-[120px] sm:text-[260px] font-bold bg-gradient-to-b from-[#8A63FF] to-white text-transparent bg-clip-text leading-none font-archivo">
        404
      </h1>

      <Heading data={data}/>

     <ButtonPrimary link="/" text={"Back to Home Page"} / >
    </div>
  );
};

export default Error404;
