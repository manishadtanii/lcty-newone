import React from 'react'
import AcceptedInsurance from '../sections/prospective-clients/AcceptedInsurance'
import ClinicLocation from '../sections/prospective-clients/ClinicLocation'
import ProspectiveHero from '../sections/prospective-clients/ProspectiveHero'

function ProspectiveClients() {
  return (
    <div className='mt-[102px] md:mt-[128px]'>
      <ProspectiveHero />
     <AcceptedInsurance /> 
     <ClinicLocation />
    </div>
  )
}

export default ProspectiveClients
