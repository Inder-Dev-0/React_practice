import { useState } from "react"
import Item from "./Item"

const FoodItem = ({items}) => {
    let [activeItem, setActiveItem] = useState([])

    let onBuyButton = (item, event) => {
        let newItem = [...activeItem, item]
        setActiveItem(newItem)
    }

    return ( 
        <ul className='list-group'>
            {items.map( (item) => (
                <Item 
                    key={item} 
                    foodItem ={item} 
                    bought={activeItem.includes(item)} 
                    handleBuyButton={(event) => onBuyButton(item, event)}>
                </Item>
            ))}
        </ul> 
    )
}

export default FoodItem