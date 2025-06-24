import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

const FounderMessage = () => {
   const containerRef = useRef();
    const headingRefWho = useRef();
  
    useGSAP(() => {
      const split = new SplitType(headingRefWho.current, {
        type: "chars, words",
      });
  
      gsap.from(split.words, {
        opacity: 0.2,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "top 10%",
          // scrub: true,
        },
      });
  
      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [containerRef.current, headingRefWho.current]);
  return (
    <section className="founder-message text-white text-center relative" ref={containerRef}>
      <div className="founder-bg w-full h-full absolute top-0 left-0 ">
        <img src="/founder-img-1.png" alt="" className="img-1 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] absolute top-0 left-0" />
        <img src="/founder-img-2.png" alt="" className="img-2 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] absolute top-0 right-0" />
        <img src="/founder-img-3.png" alt="" className="img-3 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] absolute bottom-0 left-0" />
        <img src="/founder-img-4.png" alt="" className="img-4 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] absolute bottom-0 right-0" />
        <img src="/founder-img-5.png" alt="" className="img-5 max-w-[200px] sm:max-w-[300px] md:max-w-[500px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div className="primary-bg-2 py-20 md:py-40">
        <div className="container-fixed">
          <div className=" mx-auto flex items-stretch">
            {/* Quote Text */}
            <h1 className="h1  mb-4" ref={headingRefWho}>
             
              <span className="font-calvino"> "I see your child’s spark; here, we celebrate, support, and love every step!"</span>{" "}
              {/* <span className="font-calvino-italic">
                dolor sit amet, consectetur
              </span>
              <span className="font-calvino">adipiscing elit.</span> In accumsan
              eros non fringilla faucibus. */}
            </h1>

          </div>
        </div>
      </div>

      {/* Circle Indicators */}
      {/* <div className="py-[50px] md:pb-[50px] md:pt-[0px]" >
        <div className="container-xxl">
          <div className="flex justify-evenly gap-10 flex-wrap relative md:translate-y-[-50%] ">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="w-40 h-40 bg-[#FFAAFF] rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default FounderMessage;
