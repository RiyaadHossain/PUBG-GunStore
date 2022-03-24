import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';

function App() {
  const [guns, setGuns] = useState([])
  const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json()).then(data => setGuns(data))
    }, [])
  const addToCart = (gun) => {
    const newCart = [...cart, gun]
    setCart(newCart)
    }
   
  return (
    <div>
      <Nav cart={cart}/>
      <div className="card-container">
        {guns.map(gun => <Card addToCart={addToCart}  guns={gun}/>)}
      </div>
    </div>
  );
}

export default App;
