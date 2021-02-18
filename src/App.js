import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Planets from './components/Planet';
import Person from './components/Person';
import {ReactQueryDevtools} from 'react-query-devtools'

function App() {
const [item, setItems] = useState('planets')

  return (
  <>
  <div className="App">
   <h1>Star Wars API's Info</h1>
   <Navbar setItems={setItems}/>
   <div className='content'>
  {item === 'planets' ? <Planets /> : <Person />}
  </div>
  </div>
  <ReactQueryDevtools initialIsOpen={false} />
  </>
  );
}

export default App;
