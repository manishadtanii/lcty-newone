import React from 'react'
import HeroProgram from '../sections/program-inner/HeroProgram'
import Video from '../sections/program-inner/Video'
import CultureProgram from '../sections/program-inner/CultureProgram'
import KeyBenefits from '../sections/program-inner/KeyBenefits'
import WeProvide from '../sections/program-inner/WeProvide'
import MoreTherapies from '../sections/program-inner/MoreTherapies'

function ProgramInner({data}) {
  return (
    <div>
      {/* {console.log(data["hero"])} */}
      <HeroProgram data={data["hero"]} />
      <Video data={data["video"]}/>
      <CultureProgram data={data['breif']}/>
      <KeyBenefits data={data['benefits']}/>
      <WeProvide data={data['provide']}/>
      <MoreTherapies data={data['therapies']}/>
    </div>
  )
}

export default ProgramInner
