import React from 'react'
import './cart.css'
import { useGlobalContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useGlobalContext()

    const total = getTotalCartAmount()
    const delivery_fee = total?Math.max(3,Math.floor(total/10)):0
    const promocode = 'FLAT_10'

    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <>
                                    <div className="cart-items-title cart-items-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p onClick={()=>{
                                            removeFromCart(item._id)
                                        }} className='cross'>x</p>
                                    </div>
                                    <hr />
                                </>

                            )
                        }
                    })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Sub Total</p>
                        <p>${total}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${delivery_fee}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        
                        <p>${total+delivery_fee}</p>
                    </div>
                <button onClick={()=>{
                    if(total===0){
                        navigate('/')
                    }
                    else{
                        navigate('/order')
                    }
                        
                    }} >{total===0?' ADD ITEMS TO PROCEED ':' PROCEED TO CHECKOUT '}</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promo code' />
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart