import React, { useState } from "react";
import Heading from "../../components/Heading";

const insuranceData = {
  "Medicaid / Medicare": [
    "a-1.png",
    "a-2.png",
    "a-3.png",
    "a-4.png",
    "a-5.png",
    "a-1.png",
    "a-2.png",
    "a-3.png",
  ],
  "Workers Comp": [
    "a-1.png",
    "a-2.png",
    "a-3.png",
  ],
  "Insurance – PPO network": [
    "a-4.png",
    "a-5.png",
    "a-1.png",
  ],
  "Insurance ABA": [
    "a-3.png",
    "a-4.png",
    "a-5.png",
    "a-1.png",
  ],
};

const tabs = Object.keys(insuranceData);

const AcceptedInsurance = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [viewAll, setViewAll] = useState(false);

  const visibleLogos = viewAll
    ? insuranceData[activeTab]
    : insuranceData[activeTab].slice(0, 6);

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
    <section className="px-4 py-10 md:py-16">
      <div className="container-fixed">
        <div className="">
        <Heading data={data} />
      </div>
      {/* Tabs */}
      <div className=" mx-auto  rounded-t-xl px-4  pt-6 pb-4 flex flex-wrap  gap-4 text-white text-lg font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setViewAll(false); // reset on tab change
            }}
            className={`px-4 py-2 rounded-t-xl transition-all ${
              activeTab === tab
                ? "bg-purple-300 text-white font-semibold not-italic"
                : "text-pink-200 italic"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="max-w-6xl mx-auto bg-purple-400 rounded-b-xl px-6 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {visibleLogos.map((src, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm"
          >
            <img src={src} alt={`Logo ${idx}`} className="max-h-16 object-contain" />
          </div>
        ))}
        {insuranceData[activeTab].length > 6 && (
          <div className="col-span-full flex justify-end mt-4 pr-2">
            <button
              onClick={() => setViewAll(!viewAll)}
              className="text-white italic underline"
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
