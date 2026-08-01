import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'

import services from '../../data/services'
function ServicesSection() {
  return (
<section id='services' className='services-section'>
  <div className="container">
<p className='section-subtitle'>
    Our Services
</p>

<h2 className='section-title'>
  EveryThing You Need For Your Journey 
</h2>

<p className="section-description">
    We provide complete travel solutions to make your trips comfortable,safe, and unforgettable.
</p>
<div className="services-container">
    {
        services.map((service) => (
            <ServiceCard
         key={service.id}
         icon={service.icon}
         title={service.title}
         description={service.description}
         />
        ))}
</div>
</div>
</section>
  )
}

export default ServicesSection