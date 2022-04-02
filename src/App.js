import './App.css';
import {useState} from "react"
import "./components/index.css"
import FruitList  from "./components/fruitList.jsx" 
function App() {
  const [fruits,setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ])

const totalPrice = fruits.map((fruits)=> fruits.price).reduce((total, price)=>total + price,0)

function filterRedFruits(){
    const fruitsFiltered = fruits.filter((fruit)=> fruit.color === "red")
    return setFruits(fruitsFiltered)
}

  return (
    <div className="App">
      <header className="App-header">
          <div className='card'>
              <h1>Lista de Frutas</h1>
              <p>Total: R$ {totalPrice}</p>

              <ul className='fruits'>
                  {fruits.map((fruit)=>( 
                      <FruitList key={fruit.name}>
                          <p className='fruits__name'>{fruit.name}</p>
                          <span className='fruits__preco'> Preço: R$ {fruit.price}</span>
                      </FruitList>
                  ))}
              </ul>

              <button onClick={filterRedFruits}>Filtrar Vermelhas</button>

          </div>
      </header>
    </div>
  );
}

export default App;
