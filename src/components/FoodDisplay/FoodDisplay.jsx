import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { useGlobalContext } from '../../context/StoreContext'
const FoodDisplay = ({category}) => {
    
    const {food_list } = useGlobalContext()
    return (
        <div className="food-display" id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {   
                    food_list.map((item,index)=>{
                        if(category==='All' || category===item.category)
                        return <FoodItem  key={index} {...item}/>
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay