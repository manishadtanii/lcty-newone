import React from 'react'
import SuccessStoriesHero from '../sections/success-stories/SuccessStoriesHero'
import VideoSection from '../sections/success-stories/VideoSection'

function SuccessStories() {
  return (
    <div className="mt-[102px] md:mt-[128px]">
      <SuccessStoriesHero/>
      <VideoSection/>
    </div>
  )
}

export default SuccessStories
