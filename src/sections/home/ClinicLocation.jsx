import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

function ClinicLocation() {
  const clinics = [
    {
      title: "Palmetto Park, FL",
      image: "clinic-1.jpg",
      redirectUrl: "/location",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Delray Beach, FL",
      image: "clinic-2.jpg",
      redirectUrl: "/location",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Coral Springs, FL",
      image: "clinic-3.jpg",
      redirectUrl: "/location",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "West Palm Beach, FL",
      image: "clinic-4.jpg",
      redirectUrl: "/location",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];
  const data = {
    title: [
      { text: "Find", class: "font-calvino" },
      { text: "us here ", class: "font-calvino-italic" },
    ],
    textAlign: "text-center md:text-start",
    spacing: "p-4",
    fontSize: "h1",
    fontColor: "secondary-text-1",
  };
  return (
    <section className="clinic-location w-full">
      <div className="container-fixed">
        <div className="" data-aos="fade-up">
          <Heading data={data} />
        </div>

        <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:max-w-[600px] mx-auto">
          <div className="xl:translate-y-[35%]">
            <Card data={clinics[0]} />
          </div>
          <div className="xl:translate-y-[-35%]">
            <Card data={clinics[1]} />
          </div>
          <div className="xl:translate-y-[35%]">
            <Card data={clinics[2]} />
          </div>
          <div className="xl:translate-y-[-35%]">
            <Card data={clinics[3]} />
          </div>
        </div>

        <div className="mt-10 xl:max-w-[600px] ms-auto text-center md:text-start px-2 md:p-auto">
          <p
            className="body-t-color btn-t mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Come explore the place for your Little Champs, which is easily accessible to provide services in a friendly setting for families. We're here for you to ensure that every visit brings new hope to the life of your child.
          </p>
          <div className="" data-aos="fade-up" data-aos-delay="300">
            <ButtonPrimary link="/hello" text="Register Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicLocation;
