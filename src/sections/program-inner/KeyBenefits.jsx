import React from "react";
import { FaAssistiveListeningSystems, FaChild, FaUserNurse } from "react-icons/fa";

/* const benefits = [
  {
    icon: "testmonial-1.png",
    title: "Enhancement of",
    subtitle: "Motor Skills",
    description: `We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.`,
  },
  {
    icon: 'testmonial-2.png',
    title: "Increased Muscle",
    subtitle: "Strength and Flexibility",
    description: `Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.`,
  },
  {
    icon: 'testmonial-3.png',
    title: "Reduction in",
    subtitle: "Pain and Discomfort",
    description: `For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improving posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.`,
  },
]; */

const KeyBenefits = ({data}) => {
  return (
    <section className="key-benefits bg-hero-gradient">
     <div className="container-fixed">
         <h2 className="h1 text-white text-center">
         <span className="font-calvino">Key</span>
         <span className="font-calvino-italic">Benefits</span>
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] shadow-lg p-6 md:p-8 border-4 border-[#FF96FF] flex flex-col items-center text-center"
          >
            <div className=" mb-4">
              <img src={`/${benefit.img}`} className="max-w-32 m-auto" alt="" />
            </div>
            <h3 className="h2 secondary-text-1">
               {benefit.title.map((part, i) => (
                <span key={i} className={part.class}>
                  {" "}
                  {part.text}{" "}
                </span>
              ))}
            </h3>
            <p className="">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default KeyBenefits;
