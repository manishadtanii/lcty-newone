import React from "react";

function VideoSection() {
  const videos = [
    "https://www.youtube.com/embed/qaEiVeFDvMQ?si=btdM4tcpkBgclfA5",
    "https://www.youtube.com/embed/ur4zxEf0rsY?si=lR1uENPz2fFDIUcg",
    "https://www.youtube.com/embed/VBiYKtuUmfU?si=dEOjaK7GbxUB1KNT",
    "https://www.youtube.com/embed/3yA9CREW8G8?si=tgieSyy-7Lcdk_q6",
    "https://www.youtube.com/embed/Q7gwzylLXI0?si=LaUfc5eL0zOYpY8e",
    "https://www.youtube.com/embed/5q1e6iFFtU8?si=RaB229PrYSuF1gst",
    "https://www.youtube.com/embed/grxGpt6D0rM?si=s6Y8fNKowTXZbUON",
  ];
  return (
    <div className="video-section">
      <div className="container-fixed">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video, index) => (
            <div key={index}>
              <iframe
                width="100%"
                height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
