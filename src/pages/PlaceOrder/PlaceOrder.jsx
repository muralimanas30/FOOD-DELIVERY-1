import React from 'react'
import './placeorder.css'
import { useGlobalContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const handleSubmit = ()=>{
    console.log('hello')
  }
  const {getTotalCartAmount}=useGlobalContext()
  const total = getTotalCartAmount()
  const delivery_fee = total?Math.max(3,Math.floor(total/10)):0
  return (
    <form onSubmit={handleSubmit} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" placeholder='First name'/>
          <input required type="text" placeholder='Last name'/>
        </div>
        <input required type="email" placeholder='Your email' id="" />
        <input required type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required type="text" placeholder='City'/>
          <input required type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder='Zip code'/>
          <input required type="text" placeholder='Country'/>
        </div>
        <input required type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
                <button>PROCEED TO PAYMENT </button>
                </div>
      </div>
    </form>
  )
}

export default PlaceOrder