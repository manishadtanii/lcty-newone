import React from "react";
import Heading from "../../components/Heading";
import CardProvide from "../../components/CardProvide";

function WeProvide({data}) {
  const {slides} = data
  const title = {
    title: [
      { text: "We ", class: "font-calvino" },
      { text: " help", class: "font-calvino-italic" },
      { text: "with ", class: "font-calvino" },
    ],
    textAlign: "text-center",
    color: "secondary-text-1",
    fontSize: "h1",
  };
  // const slides = [
  //   {
  //     title: "Prematurity",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "100",
  //   },
  //   {
  //     title: "Muscular Dystrophy",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "200",
  //   },
  //   {
  //     title: "Down Syndrome",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "300",
  //   },
  //   {
  //     title: "Spina Bifida",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "400",
  //   },
  //   {
  //     title: "Cerebral Palsy",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "500",
  //   },
  //   {
  //     title: "Stroke",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "600",
  //   },
  //   {
  //     title: "Hypertonia",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "700",
  //   },
  //   {
  //     title: "Hypotonia",
  //     image: "yoga-therapy.png",
  //     bgColor: "primary-bg-2",
  //     animationDelay: "800",
  //   },
  // ];
  return (
    <div className="we-provide">
      <div className="container-fixed">
        <Heading data={title} />
        <div className="we-provide-cards py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {slides.map((data, index) => (
              <CardProvide data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeProvide;
