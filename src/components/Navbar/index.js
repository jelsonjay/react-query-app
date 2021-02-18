import React from 'react'

 const Navbar = ({setItems}) => {

  return (
    <div>
      <button onClick={() => setItems('person')}>Persons</button>
      <button onClick={() => setItems('planets')}>Planets</button>
    </div>
  )
}

export default Navbar