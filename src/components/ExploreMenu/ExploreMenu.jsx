import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h2>Explore our menu</h2>
            <p className='explore-menu-text'>Chose from a diverse menu, add your favourite elements to the cart , place the order and have a feast ! Click on any one of below to classify accordingly .</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item,index)=>{
                        return (<div title='Click here to show this category of Foods'
                        onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?'active':null} src={item.menu_image} alt='image' />
                        <p>{item.menu_name}</p>
                        </div>

                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu