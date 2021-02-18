import React from 'react'
import {useQuery} from 'react-query'
import PersonCard from './PersonCard'


  // fetch data
 const fetchData = async () => {
 const res = await fetch('http://swapi.dev/api/people/');
  return res.json()
 }


 function Person() {

  const {data, status} = useQuery('persons', fetchData)
  console.log(data)

  return (
   
    <div>
    <h2>Persons</h2>
    {/* {status} */}
    {status === 'loading' &&(
    <span>Loading data....</span>
    )}
    {status === 'error' &&(
    <span>Error fetching data!</span>
    )}
    {status === 'success' &&(
    <div>
    {data.results.map(items => <PersonCard key={items.name} items={items} />)}
    </div>
    )}
     </div>
  )
}

export default Person