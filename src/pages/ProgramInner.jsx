import React from 'react'
import HeroProgram from '../sections/program-inner/HeroProgram'
import Video from '../sections/program-inner/Video'
import CultureProgram from '../sections/program-inner/CultureProgram'
import KeyBenefits from '../sections/program-inner/KeyBenefits'
import WeProvide from '../sections/program-inner/WeProvide'
import MoreTherapies from '../sections/program-inner/MoreTherapies'

function ProgramInner({data}) {
  const {hero, video, breif, benefits, provide, therapies} = data;
  return (
    <div>
      {/* {console.log(data["hero"])} */}
     {hero && <HeroProgram data={hero} />}
      {video && <Video data={video}/>}
      {breif && <CultureProgram data={breif}/>}
      {benefits && <KeyBenefits data={benefits}/>}
      {provide && <WeProvide data={provide}/>}
      {therapies && <MoreTherapies data={therapies}/>}
    </div>
  )
}

export default ProgramInner
