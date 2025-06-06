import React from 'react'
import HeroProgram from '../sections/program-inner/HeroProgram'
import Video from '../sections/program-inner/Video'
import CultureProgram from '../sections/program-inner/CultureProgram'
import KeyBenefits from '../sections/program-inner/KeyBenefits'
import WeProvide from '../sections/program-inner/WeProvide'
import MoreTherapies from '../sections/program-inner/MoreTherapies'

function ProgramInner({program}) {
  return (
    <div>
      <HeroProgram data={program["hero"]}/>
      <Video data={program["video"]}/>
      <CultureProgram data={program["breif"]}/>
      <KeyBenefits data={program["benefits"]}/>
      <WeProvide data={program["provide"]}/>
      <MoreTherapies data={program["therapies"]}/>
    </div>
  )
}

export default ProgramInner
