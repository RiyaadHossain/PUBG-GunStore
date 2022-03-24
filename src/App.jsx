import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';

function App() {
  const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json()).then(data => setGuns(data))
    }, [])
    console.log(guns);
  return (
    <div>
      <Nav/>
      <div className="card-container">
        {guns.map(gun => <Card guns={gun}/>)}
      </div>
    </div>
  );
}

export default App;
