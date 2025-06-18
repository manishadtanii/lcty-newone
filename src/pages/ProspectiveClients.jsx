import React from 'react'
import AcceptedInsurance from '../sections/prospective-clients/AcceptedInsurance'
import ClinicLocation from '../sections/prospective-clients/ClinicLocation'
import ProspectiveHero from '../sections/prospective-clients/ProspectiveHero'
import StepOneSection from '../sections/home/StepOneSection'
import AllForm from '../sections/prospective-clients/AllForm'

function ProspectiveClients() {
  return (
    <div className='mt-[102px] md:mt-[128px]'>
      <ProspectiveHero />
     <AcceptedInsurance /> 
     <ClinicLocation />
     <StepOneSection />
     <AllForm />
    </div>
  )
}

export default ProspectiveClients
