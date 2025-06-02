import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import Heading from "./Heading";

const Error404 = () => {
    const data = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
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
    <div className="flex flex-col items-center justify-center  pb-40 pt-20 text-center px-4">
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
