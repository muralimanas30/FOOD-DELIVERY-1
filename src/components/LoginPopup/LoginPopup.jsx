import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState('Sign Up')
    return (
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" 
                    onClick={()=>{setShowLogin(false)}}/>
                </div>
                <div className="login-popup-inputs">
                    {currentState==='Login'?null:<input type="text" placeholder='Your name' required/>}
                    
                    <input type="email" name="email" required placeholder='Your Email' />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currentState=='Sign Up'?'Create account':'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p> By continuing, I agree to the terms of use & privacy policy </p>
                </div>
                {currentState==='Login'?    
                <p>Create a new account ? <span onClick={()=>{
                    setCurrentState('Sign Up')
                }}>Click Here</span></p>:
                <p>Already have an account ?/ <span onClick={()=>{
                    setCurrentState('Login')
                }}>Login here</span></p>
                }
            </form>

        </div>
    )
}

export default LoginPopup