import React from 'react'
import HeroCard from '../../components/HeroCard'
import ButtonPrimary from '../../components/ButtonPrimary'

function ProspectiveHero() {
    const heroData = {
        title1: 'Apply in now',
        title2: 'for the best therapy',
        btn1: {
            text: 'Discover',
            link: '/'
        },
        btn2: {
            text: 'Start demo',
            link: '/'
        }
    }
  return (
    <div className="prospective-hero">
      <div className="container-fixed">
        <div className="content flex flex-col gap-4 justify-start lg:flex-row items-end lg:justify-between pb-4 ">
            <h1 className='h1 secondary-text-1'>
                <span className="font-calvino">Little Champs</span>
                <span className="font-calvino-italic"> therapy & yoga</span>
            </h1>
            <p>We believe every child deserves a safe and supportive space to move, calm down and build healthy habits for life.</p>
        <ButtonPrimary text={heroData.btn1.text} link={heroData.btn1.link} />

        </div>
        <HeroCard imgSrc="/herocard.jpg" title1={heroData.title1} title2={heroData.title2} btn1={heroData.btn1} btn2={heroData.btn2} />

      </div>
    </div>
  )
}

export default ProspectiveHero
