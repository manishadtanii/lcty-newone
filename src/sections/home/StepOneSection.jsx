import React from "react";
// import LoginImage from "Step-1.png"; // adjust this path based on your project
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const StepOneSection = () => {
  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h2");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  });
  return (
    <section className="stepone-section w-[100vw] primary-bg-2 overflow-x-hidden">
      <div className="overflow-x-hidden">
        <div className="gallery flex flex-col-reverse lg:flex-row gap-10 overflow-x-hidden">
          {/* Left Column */}
          <div className="left pb-7 lg:pb-0 px-5 lg:px-[80px] lg:w-[50%]">
            <div className="desktopContent">
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img
                  src="ilus-1.jpg"
                  alt=""
                  className="w-full block lg:hidden"
                />

                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">01.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino mb-5 block">Registration</span>
                  <span className="font-calvino-italic mb-3 block">
                    Welcome to the world of Little Champs!
                  </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                 We'd love for you to register through our secure online portal. It helps us gather all the details we need to give your child the best care. Don't forget to upload all required info when you sign up!
                </p>

                {/* Link */}
                <div className="mt-5 md:mt-10">
                  <a
                   href="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" 
                    target="_blank"
                    className="inline-block  text-white font-calvino-italic hover:underline body-t"
                  >
                    → Take me to the form
                  </a>
                </div>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img
                  src="ilus-2.jpg"
                  alt=""
                  className="w-full block lg:hidden"
                />

                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">02.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">Insurance & Billing</span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  After setting up your account, the next step is to upload your insurance and referral documents on the same site. This helps us ensure a smooth process and verify your service coverage.
                </p>

                {/* Link */}
                <div className="mt-5 md:mt-10">
                  <a
                    href="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" 
                    target="_blank"
                    className="inline-block  text-white font-calvino-italic hover:underline body-t"
                  >
                    → Take me to the form
                  </a>
                </div>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img
                  src="ilus-3.jpg"
                  alt=""
                  className="w-full block lg:hidden"
                />

                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">03.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Registration for Evaluation
                  </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                 Once we have your referral, intake form and insurance information, our admin team will reach out to schedule your child's first evaluation. We can do this at our welcoming clinic or in your home.

                </p>

                {/* Link */}
                <div className="mt-5 md:mt-10">
                  <a
                   href="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" 
                    target="_blank"
                    className="inline-block  text-white font-calvino-italic hover:underline body-t"
                  >
                    → Take me to the form
                  </a>
                </div>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img
                  src="ilus-4.jpg"
                  alt=""
                  className="w-full block lg:hidden"
                />

                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">04.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">Scheduling of Treatment</span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                 After the assessment, our therapist will put together a detailed report and share it with your child's pediatrician. Once your insurance is accepted and approved, we'll make sure therapy sessions continue smoothly, whatever works best for your family.
                </p>

               {/* Link */}
                <div className="mt-5 md:mt-10">
                  <a
                    href="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" 
                    target="_blank"
                    className="inline-block  text-white font-calvino-italic hover:underline body-t"
                  >
                    → Take me to the form
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="right  flex-col justify-center items-center lg:h-screen bg-[#FFAFFF]  lg:w-[50%] hidden lg:flex overflow-hidden">
            <div className="desktopPhotos relative overflow-hidden  w-[40vw] h-[40vw]">
              <div className="desktopPhoto absolute">
                <img src="ilus-1.jpg" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="ilus-2.jpg" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="ilus-3.jpg" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="ilus-4.jpg" alt="" className="w-full" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOneSection;
