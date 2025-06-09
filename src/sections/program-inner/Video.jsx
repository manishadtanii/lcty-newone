import React from 'react'

function Video({data}) {
  const {title, youtubeId, } = data
  return (
    <div className='video-section'>
      <div className="container-fixed">
        <div className="max-w-5xl m-auto">
             <h1 className="h1 text-white text-center">
            {title.map((part, i) => (
                <span key={i} className={part.class}>
                  {" "}
                  {part.text}{" "}
                </span>
              ))}
            </h1>
        </div>

        <div className="mt-10">
            <iframe width="100%" height="724" src={youtubeId} title="YouTube video player" className='rounded-[30px]'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
