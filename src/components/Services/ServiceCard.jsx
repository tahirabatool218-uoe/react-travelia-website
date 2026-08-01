import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
function ServiceCard({icon,title,description}) {
  return (
    <div  className='service-card'>
        <div className="icon-box">
            <div className="service-icon">
                {icon}
            </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-arrow">
         <span>Explore More</span> <FaArrowRight/>
        </div>
        
    </div>
  )
}

export default ServiceCard