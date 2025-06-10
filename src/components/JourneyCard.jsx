import React from 'react'

function JourneyCard({data}) {
  console.log(data)
  return (
    <div className='journey-card primary-bg-2 p-5 md:p-10 w-full'>
        <div className='journey-card-content'>
            <div className='journey-card-title font-archivo h3 text-white'>
                <i>{data.year}</i>
            </div>
            {/* <div className='journey-card-sub-title h2 mb-4 text-white'>
                <span className='font-calvino'>Lorem  </span>
                <span className='font-calvino-italic'>  dolor sit   </span>
                <span className='font-calvino'>adipiscing </span>
            </div> */}
            <p className='journey-card-text body-t text-white font-archivo mt-5'>{data.text}</p>
        </div>
    </div>
  )
}

export default JourneyCard
