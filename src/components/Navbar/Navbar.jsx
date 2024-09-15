import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useGlobalContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState('home')
    const {getTotalCartAmount}=useGlobalContext()
    return (<>
        <nav className="navbar">
            <Link to='/'><img src={assets.logo} alt="" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu('home')} className={`${menu==='home'?'active':null}`} >Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={`${menu==='menu'?'active':null}`} >Menu</a>
                <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={`${menu==='#mobile-app'?'active':null}`} >Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu('contact')} className={`${menu==='contact'?'active':null}`} >Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="" />
                        <div className={getTotalCartAmount()?'dot':null}></div>
                    </Link>
                </div>
            <button onClick={()=>{setShowLogin(true)}} className='navbar-button'> SIGN IN </button>
            </div>
        </nav>
        <hr style={{outline:'none',height:'4px',backgroundColor:'white'}}/>
        </>
    )
}

export default Navbar