import React, { useState } from "react";
import Heading from "../../components/Heading";

const insuranceData = {
  "Medicaid / Medicare": {
    title: [
      { text: "Medicaid", class: "font-calvino" },
      { text: "/ Medicare", class: "font-calvino-italic" },
    ],
    img: [
      "a-1.png",
      "a-2.png",
      "a-3.png",
      "a-4.png",
      "a-5.png",
      "a-1.png",
      "a-2.png",
      "a-3.png",
    ],
  },
  "Workers Comp": {
    title: [
       { text: "Workers ", class: "font-calvino" },
      { text: "Comp", class: "font-calvino-italic" },
    ],
    img: [
      "a-3.png",
      "a-4.png",
      "a-5.png",
    ],
  },
  "Insurance – PPO network": {
    title: [
      { text: "Insurance – ", class: "font-calvino" },
      { text: "PPO network", class: "font-calvino-italic" },
    ],
    img: [
      "a-1.png",
      "a-2.png",
      
    ],
  },
  "Insurance ABA": {
    title: [
      { text: "Insurance", class: "font-calvino" },
      { text: " ABA", class: "font-calvino-italic" },
    ],
    img: [
      "a-3.png",
      "a-4.png",
      "a-5.png",
      "a-1.png",
      "a-3.png",
      "a-4.png",
      "a-5.png",
      "a-1.png",
    ],
  },
};

const tabs = Object.keys(insuranceData);

const AcceptedInsurance = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [viewAll, setViewAll] = useState(false);

  const allLogos = insuranceData[activeTab].img;
  const visibleLogos = viewAll ? allLogos : allLogos.slice(0, 10);

  const data = {
    title: [
      { text: "Accepted", class: "font-calvino" },
      { text: "insurance", class: "font-calvino-italic" },
    ],
    textAlign: "text-center",
    spacing: "mb-6",
    fontSize: "h1",
  };
  return (
    <section className="">
      <div className="container-fixed" style={{paddingTop:"0"}}>
        <div className="mb-10">
          <Heading data={data} />
        </div>
        {/* Tabs */}
        <div className=" mx-auto  rounded-t-xl  flex flex-wrap justify-center lg:justify-start body-t gap-4 py-4 lg:p-0 text-white" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setViewAll(false); // reset on tab change
              }}
              className={`px-2 lg:px-4 py-2 rounded-xl lg:rounded-t-xl lg:rounded-b-none  transition-all ${
                activeTab === tab
                  ? "primary-bg-2 text-white border-[#8A63FF] border-[5px] lg:border-b-0"
                  : "secondary-text-1 border-[5px] border-b-0 border-[#8a63ff00]"
              }`}
            >
              {insuranceData[tab].title.map((part, i) => (
                <span key={i} className={part.class}>
                  {part.text}
                </span>
              ))}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className=" primary-bg-2 border-[#8A63FF] border-[5px]  rounded-[30px] lg:rounded-b-[30px] lg:rounded-t-none px-6 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6" style={{borderTopRightRadius:"30px"}} data-aos="fade-up">
          {visibleLogos.map((src, idx) => (
            <div key={idx} className="flex items-center justify-center ">
              <img src={src} alt={`Logo ${idx}`} className="w-full " />
            </div>
          ))}
          {allLogos.length > 10 && (
            <div className="col-span-full flex justify-end mt-4 pr-2">
              <button
                onClick={() => setViewAll(!viewAll)}
                className="font-archivo text-white"
              >
                {viewAll ? "View less" : "View more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AcceptedInsurance;
