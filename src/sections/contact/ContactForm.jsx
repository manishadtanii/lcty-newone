import React from "react";
import Heading from "../../components/Heading";

const ContactForm = () => {
   const data = {
    title: [
      { text: "Get", class: "font-calvino" },
      { text: "in touch", class: "font-calvino-italic" },
    ],

    textAlign:"text-start",
    fontSize:"h1"
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <Heading data={data} />
          <p className=" mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            accumsan eros non fringilla faucibus.
          </p>
          <ul className="">
            <li>
              <span className=" font-semibold">Call</span> : (561) 494 4499
            </li>
            <li>
              <span className="text-pink-300 font-semibold">Fax</span> : (561) 705 7501
            </li>
            <li>
              <span className="text-pink-400 font-semibold">Email us</span> :
              <a href="mailto:info@littlechampstherapy.com" className="ml-2 underline text-blue-600">
                info@littlechampstherapy.com
              </a>
            </li>
            <li className="mt-4">
              <span className="text-pink-400 font-semibold">Visit us :</span>
              <ul className="mt-2 space-y-1 text-sm text-purple-700">
                <li>399 West Palmetto Park Rd, Ste 202 Boca Raton, FL 33432</li>
                <li>14565 Sims Rd, Delray Beach, FL 33484</li>
                <li>
                  8110 Royal Palm Blvd, Ste 110 Coral Springs, FL 33065
                </li>
                <li>
                  2711 Exchange Court, Ste B West Palm Beach, FL 33409
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-10 text-white relative overflow-hidden">
          <h2 className="text-5xl font-playfair italic mb-4">Get <span className="text-white">in touch</span></h2>
          <p className="mb-8 text-white text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            accumsan eros non fringilla faucibus.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md outline-none focus:ring-2 ring-pink-300"
            />
            <input
              type="email"
              placeholder="Your Email (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md outline-none focus:ring-2 ring-pink-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 text-gray-700 rounded-md outline-none focus:ring-2 ring-pink-300"
            />
            <input
              type="text"
              placeholder="Cell No. (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md outline-none focus:ring-2 ring-pink-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 text-gray-700 rounded-md outline-none focus:ring-2 ring-pink-300"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-300 hover:bg-pink-500 transition-colors px-8 py-3 text-white font-semibold rounded-md w-full flex justify-center items-center gap-2"
            >
              Send
              <span className="text-xl">&#8599;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
