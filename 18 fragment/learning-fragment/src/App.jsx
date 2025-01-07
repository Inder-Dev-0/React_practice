import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import FoodItem from './components/FoodItem'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {  
  let [foodItem, setFoodItem] = useState([])

  const onkeydown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItem = [...foodItem, newFoodItem]
      setFoodItem(newItem)
      console.log('Food value entered is ' + newFoodItem);
    }
  }

  // ternary opreator
  // let emptyMessage = foodItem.length === 0 ? <h3>I am Still hungry.</h3>: null

  return <>
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <FoodInput handleKeyDown={onkeydown}></FoodInput>
      {/* {emptyMessage} */}

      {/* logical opreator */}
      {/* {foodItem.length === 0 && <h3>I am Still hungry.</h3>} */}
      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItem items={foodItem}></FoodItem>
    </Container>

    <Container>
      <p>Above is the list of healthy foods that are good for your health and well being</p>
    </Container>
  </>
}

export default App
