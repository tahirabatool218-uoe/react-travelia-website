import React from 'react'
import "./Destination.css"
import DestinationCard from './DestinationCard'
import destinations from '../../data/destinations'

function DestinationSection() {
  return (
   <section id="destination" className='destination-section'>
<div className="destination-heading">
    <h5>Popular destination</h5>
    <h2>Explore Top Destination</h2>
    <p>
        Choose from our most lovd destination around the world and start palnning
        your next unforgettable journey.
    </p>
</div>
<div className='destination-cards'>
{
    destinations.map((item) => (
        <DestinationCard
        key={item.id}
        image={item.image}
        name={item.name}
        country={item.country}
        descripton={item.description}
        />
    ))
    }


</div>
   </section>
  )
}

export default DestinationSection