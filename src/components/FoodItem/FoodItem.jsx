import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useGlobalContext } from '../../context/StoreContext'

const FoodItem = ({_id,name,description,price,image}) => {
    
    const {cartItems,addToCart,removeFromCart}=useGlobalContext()
    return (
        <article title={`${name}`}
        className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt={name} className='food-item-image' />
                {
                        !cartItems[_id]?<img title={`Add 1 x ${name} to your Cart`}
                        className='add' onClick={()=>{addToCart(_id)}} src={assets.add_icon_white}/>:<div className='food-item-counter'><img 
                        title={`Remove 1 x ${name} from your Cart`}
                        onClick={()=>{removeFromCart(_id)}} src={assets.remove_icon_red} />
                        <p>{cartItems[_id]}</p>
                        <img src={assets.add_icon_green} 
                        title={`Add 1 x ${name} to your Cart`}
                        onClick={()=>{addToCart(_id)}}  alt="" />
                        </div>
                }
                
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />

                </div>
                <p className="food-item-desc">{description}
                </p>
                <p className="food-item-price">$ {price}</p>
            <hr />
            </div>
        </article>
    )
}

export default FoodItem