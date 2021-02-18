import Reacr, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Planets from './components/Planet';
import Person from './components/';

function App() {
const [item, setItems] = useState('planets')

  return (
    <div className="App">
   <h1>Hello World!</h1>
   <Navbar setItems={setItems}/>
   <di className='content'>
  {item === 'planets' ? <Planets /> : <Person />}
   </di>
    </div>
  );
}

export default App;
