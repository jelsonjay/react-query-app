import React from 'react'

function PlanetCard({items}) {
  return (
    <div className='planet-card'>
    <h3>{items.name}</h3>
    <p>Population - {items.population}</p>
    <p>Terrain - {items.terrain}</p>
    <p>Diameter - {items.diameter}</p>
    </div>
  )
}

export default PlanetCard
