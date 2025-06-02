// src/components/ThankYou.jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import ButtonPrimary from "../components/ButtonPrimary";
import Heading from "../components/Heading";

const ThankYou = () => {
     const data = {
    title: [
      { text: "Thank ", class: "font-calvino" },
      { text: "You", class: "font-calvino-italic" },
    ],

    textAlign:"text-center",
    spacing:"p-4",
    fontSize:"h2",
    color:"text-white"
  }
  return (
    <div className="pt-20 pb-40 flex items-center justify-center bg-white px-4 py-12">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#AE93FF] to-[#FF96FF] text-white rounded-3xl text-center p-10 shadow-lg">
        {/* Checkmark Icon */}
        <div className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2">
          <div className="w-20 md:w-28 h-20 md:h-28 bg-white bg-opacity-10 rounded-full flex items-center justify-center ">
            <img src="thank-you.png" alt="" />
          </div>
        </div>

        {/* Thank You Text */}
        <Heading data={data} />

        <p className="my-4 text-white/90 body-t">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
          eros non fringilla faucibus. Sed scelerisque ultrices dui,
        </p>

        {/* Back Button */}
        <div className="">
          <ButtonPrimary link={"/"} text={"Back to Home Page"} />
        </div>

        {/* Social Links */}
        <div className="mt-6 text-white flex  items-center gap-3 justify-center">
          <span className="font-calvino-italic text-2xl ">Our socials :</span>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-pink-200 cursor-pointer" />
            <FaFacebook className="hover:text-pink-200 cursor-pointer" />
            <FaYoutube className="hover:text-pink-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
