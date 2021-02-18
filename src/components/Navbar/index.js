import React from 'react'

 const Navbar = ({setItems}) => {

  return (
    <div>
      <button onClick={() => setItems('person')}>Person</button>
      <button onClick={() => setItems('planets')}>Planets</button>
    </div>
  )
}

export default Navbar