import React, { useEffect, useState } from 'react'
import { useContext, createContext } from 'react'
export const StoreContext = createContext(null)
import { food_list } from '../assets/assets'


const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    return list ? JSON.parse(list) : {};
}



const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getLocalStorage())

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => {
                return { ...prev, [itemId]: 1 }
            })
        }
        else {
            setCartItems((prev) => {
                return {
                    ...prev, [itemId]: prev[itemId] + 1
                }
            })
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            return {
                ...prev, [itemId]: prev[itemId] - 1
            }
        })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(StoreContext)
}
export default StoreContextProvider