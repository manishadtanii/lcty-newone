import React, { useState } from "react";
import Heading from "../../components/Heading";

const insuranceData = {
  "Medicaid / Medicare": {
    title: [
      { text: "Medicaid", class: "font-calvino" },
      { text: "/ Medicare", class: "font-calvino-italic" },
    ],
    img: [
      "/medicaid/1.png", 
      "/medicaid/2.png",
      "/medicaid/3.png", 
      "/medicaid/4.png",
      "/medicaid/5.png", 
      "/medicaid/6.png",
      "/medicaid/7.png", 
      "/medicaid/8.png",
      "/medicaid/9.png", 
      "/medicaid/10.png",
      "/medicaid/11.png", 
      "/medicaid/12.png",
      "/medicaid/13.png", 
      "/medicaid/14.png",
      "/medicaid/15.png", 
      "/medicaid/16.png",
      "/medicaid/17.png", 
      "/medicaid/18.png",
      "/medicaid/19.png",
      "/medicaid/20.png",
      "/medicaid/21.png",
      "/medicaid/22.png",
      "/medicaid/23.png",
      "/medicaid/24.png",
    ],
  },
  "Workers Comp": {
    title: [
      { text: "Workers ", class: "font-calvino" },
      { text: "Comp", class: "font-calvino-italic" },
    ],
    img: ["/workers-comp/1.png", "/workers-comp/2.png"],
  },
  "Insurance – PPO network": {
    title: [
      { text: "Insurance – ", class: "font-calvino" },
      { text: "PPO network", class: "font-calvino-italic" },
    ],
    img: [
      "/insurance-ppo-network/1.png", 
      "/insurance-ppo-network/2.png",
      "/insurance-ppo-network/3.png",
      "/insurance-ppo-network/4.png",
      "/insurance-ppo-network/5.png",
      "/insurance-ppo-network/6.png",
    ],
  },
  "Insurance ABA": {
    title: [
      { text: "Insurance", class: "font-calvino" },
      { text: " ABA", class: "font-calvino-italic" },
    ],
    img: [
      "/ins-aba/1.png",
      "/ins-aba/2.png",
      "/ins-aba/3.png",
      "/ins-aba/4.png",
      "/ins-aba/5.png",
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
      <div className="container-fixed" style={{ paddingTop: "0" }}>
        <div className="mb-10">
          <Heading data={data} />
        </div>
        {/* Tabs */}
        <div
          className=" mx-auto  rounded-t-xl  flex flex-wrap justify-center lg:justify-start body-t gap-4 py-4 lg:p-0 text-white"
          data-aos="fade-up"
        >
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
        <div
          className=" primary-bg-2 border-[#8A63FF] border-[5px]  rounded-[30px] lg:rounded-b-[30px] lg:rounded-t-none px-6 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
          style={{ borderTopRightRadius: "30px" }}
          data-aos="fade-up"
        >
          {visibleLogos.map((src, idx) => (
            <div key={idx} className="flex items-center justify-center ">
              <img src={src} alt={`Logo ${idx}`} className="w-full rounded-[30px]" />
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
