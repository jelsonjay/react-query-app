import React from 'react'

function PersonCard({items}) {
  return (
    <div className='planet-card'>
    <h3>{items.name}</h3>
    <p>Gender - {items.gender}</p>
    <p>Date of Birth - {items.birth_year}</p>
    <p>Diameter - {items.name}</p>
    </div>
  )
}

export default PersonCard