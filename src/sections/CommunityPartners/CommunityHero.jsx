import React from "react";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";

function CommunityHero() {
  const title = {
    title: [
      { text: "Help Us ", class: "font-calvino" },
      { text: "Make Kids Smile", class: "font-calvino-italic" },
    ],
    textAlign: "text-center",
    color: "text-white",
    fontSize: "h1",
  };
  return (
    <div className="community-hero bg-hero-gradient pt-[10vw] md:pt-[4vw]">
      <div className="container-xxl">
        <div className="mb-[4vw] md:mb-[2vw]" data-aos="fade-up" data-aos-duration="1000">
          <Heading data={title} />
        </div>
        <p className="text-center text-white mt-3 max-w-[800px] mx-auto mb-[4vw] md:mb-[2vw]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          We believe every child deserves a safe and supportive space to move,
          calm down and build healthy habits for life.
        </p>
        {/* <div className="flex flex-row justify-center  items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Link
            to={"/"}
            className="rounded-[30px]  font-archivo bg-white text-[#454545] transform duration-300 hover:bg-[#f0f0f0] p-5 lg:px-10 font-semibold md:text-[28px]"
          >
            Discover
          </Link>
          <Link
            to={"/"}
            className="rounded-[30px]  font-archivo bg-[#FFFFFF4D] text-white transform duration-300 hover:bg-[#ffffff67] ms-4 p-5 lg:px-10 font-semibold md:text-[28px]"
          >
            Start demo
          </Link>
        </div> */}

        <div className="communit-container grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 mt-[10vw] md:mt-[2vw] items-end ">
          <div className="communit-card hidden lg:block" data-aos="fade-up" data-aos-duration="1000">
            <img src="/community-1.png" alt="Community 1" />
          </div>
          <div className="communit-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img src="/community-2.png" alt="Community 2" />
          </div>
          <div className="communit-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <img src="/community-3.png" alt="Community 3" />
          </div>
          <div className="communit-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <img src="/community-4.png" alt="Community 4" />
          </div>
          <div className="communit-card hidden lg:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <img src="/community-5.png" alt="Community 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHero;
