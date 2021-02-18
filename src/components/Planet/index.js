import React from 'react'
import {useQuery} from 'react-query'
import PlanentCard from './PlanetCard'


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
    <h2>Planet</h2>
    {status === 'loading' &&(
    <span>Loading data....</span>
    )}
    {status === 'error' &&(
    <span>Error fetching data!</span>
    )}
    {status === 'success' &&(
    <div>
    {data.results.map(items => <PlanentCard key={items.name} items={items} />)}
    </div>
    )}
     </div>
  )
}

export default Planent