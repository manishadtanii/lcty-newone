import React from 'react'

function Video() {
  return (
    <div className='video-section bg-[url("video-bg.png")] bg-no-repeat bg-cover bg-center'>
      <div className="container-fixed">
        <div className="max-w-5xl m-auto">
             <h1 className="h1 text-white text-center">
              <span className="font-calvino">See how  </span>
              <span className="font-calvino-italic"> physical therapy</span>
              <span className="font-calvino"> will  help your child? </span>
            </h1>
        </div>

        <div className="mt-10">
            <iframe width="100%" height="724" src="https://www.youtube.com/embed/JgDNFQ2RaLQ?si=yFkObR7dP1CmMRKz" title="YouTube video player" className='rounded-[30px]'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
