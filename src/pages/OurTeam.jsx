import React from 'react'
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Culture from '../sections/our-team/Culture';
import Careers from '../sections/our-team/Careers';
import StudentForm from '../sections/our-team/StudentForm';
import VolunteerForm from '../sections/our-team/VolunteerForm';
import OurHero from '../sections/our-team/OurHero';
function OurTeam() {
  return (
    <div className='mt-[102px] md:mt-[128px]'>
      <OurHero/>
      {/* <Mission/> */}
      <Culture/>
      <Careers/>
      <StudentForm/>
      <VolunteerForm/>
    </div>
  )
}

export default OurTeam
