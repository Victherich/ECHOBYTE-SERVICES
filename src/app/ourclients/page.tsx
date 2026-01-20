
import React from 'react'
import ClientsHeroSection from '../components/ClientsHeroSection'
import ClientTestimonialsSection from '../components/ClientTestimonialsSection'
import ProjectsSection from  '../components/ProjectsSection'
import ProjectsMilestoneBadge from '../components/ProjectsMilestoneBadge'

const OurClients = () => {
  return (
    <div>
        <ClientsHeroSection/>
        <ProjectsMilestoneBadge/>
        <ClientTestimonialsSection/>
        
        <ProjectsSection/>
        {/* <PartnersSection/> */}
        
    </div>
  )
}

export default OurClients
