import React from "react";
import Heading from "../../components/Heading";

const ContactForm = () => {
  const data = {
    title: [
      { text: "Get", class: "font-calvino" },
      { text: "in touch", class: "font-calvino-italic" },
    ],

    textAlign: "text-start",
    fontSize: "h1",
    color: "text-white",
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Left Side - Contact Info */}
        <div className="bg-[url('contact-bg.jpg')] bg-no-repeat bg-cover bg-top p-[2vw] rounded-[20px]">
          <Heading data={data} />
          <p className="text-white mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros non fringilla faucibus.
          </p>
          <ul className="">
            <li>
              <span className="text-white font-semibold body-t">
                Call :
              </span>
              <a href="tel:(561) 494 4499" className="text-white body-t">
                {" "}
                (561) 494 4499
              </a>
            </li>
            <li>
              <span className="text-white font-semibold body-t">
                Fax :
              </span>
              <a href="tel:(561) 705 7501" className="text-white body-t">
                {" "}
                (561) 705 7501
              </a>
            </li>
            <li>
              <span className="text-white font-semibold body-t">
                Email us :
              </span>
              <a
                href="mailto:info@littlechampstherapy.com"
                className="text-white body-t"
              >
                info@littlechampstherapy.com
              </a>
            </li>
            <li className="mt-4">
              <span className="text-white font-semibold body-t">
                Visit us :
              </span>
              <ul className="mt-2 text-white body-t">
                <li>
                  <a href="" className="underline">
                    399 West Palmetto Park Rd, Ste 202 Boca Raton, FL 33432
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    14565 Sims Rd, Delray Beach, FL 33484
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    8110 Royal Palm Blvd, Ste 110 Coral Springs, FL 33065
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    2711 Exchange Court, Ste B West Palm Beach, FL 33409
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" rounded-3xl  text-white relative ">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE93FF] focus:border-transparent text-xl"
            />
            <input
              type="email"
              placeholder="Your Email (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE93FF] focus:border-transparent text-xl"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE93FF] focus:border-transparent text-xl"
            />
            <input
              type="text"
              placeholder="Cell No. (required)"
              className="w-full px-4 py-3 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE93FF] focus:border-transparent text-xl"
            />
            <textarea
              placeholder="Your Message"
              rows="8"
              className="w-full px-4 py-3 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE93FF] focus:border-transparent text-xl"
            ></textarea>

            <button type="submit" className="flex items-center justify-between w-full bg-[#AE93FF]">
              <div className="card-title font-archivo text-white font-semibold p-3 w-[100%]">
              Send
              </div>
              <div
                className={`card-icon w-[60px] h-[60px]  leading-[60px] text-center secondary-text-1 font-semibold  bg-white btn-t`}
              >
                <i class="fal fa-arrow-up rotate-45 "></i>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
