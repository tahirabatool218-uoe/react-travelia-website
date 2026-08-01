import React from 'react'

function DestinationCard({image,name,country,descripton}) {
    return (
        <div className="destination-card">
            <img src={image} alt={name}  className='destination-image'/>
            <div className="card-content">
                <h3>{name}</h3>
                <p className='country'>{country}</p>
                <p className="description">{descripton}</p>
                <button className='card-btn'>
                    View Details
                </button>
            </div>
        </div>
    )
}

export default DestinationCard