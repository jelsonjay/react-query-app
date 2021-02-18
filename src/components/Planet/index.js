import React from 'react'
import {useQuery} from 'react-query'


  // fetch data
 const fetchData = async () => {
 const res = await fetch('http://swapi.dev/api/planets/');
  return res.json()
 }


 function Planent() {

  const {data, status} = useQuery('planets', fetchData)
  console.log(data)

  return (
   
     <div>
    {status}
     </div>
  )
}

export default Planent