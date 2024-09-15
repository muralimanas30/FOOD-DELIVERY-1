import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
            <footer className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt='tomato' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas odit sit dicta ipsa quae id sequi modi distinctio provident?</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 9669966918</li>
                            <li>ccontact@tomato.com</li>
                        </ul>
                    </div>
                </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 ©️ Tomato.com - All Rights Reserved.
            </p>
            </footer>
    )
}

export default Footer