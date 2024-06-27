

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    useEffect(() => {
        const toggleButton = document.getElementById('menu-toggle');
        const menu = document.querySelector('nav ul');

        const toggleMenu = () => {
            if (menu) {
                menu.classList.toggle('active');
            }
        };

        if (toggleButton) {
            toggleButton.addEventListener('click', toggleMenu);
        }


        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    return (
        <>
        <nav>
            <div className="logo">
                <div style={{ color: 'white', fontWeight: 'bold' }}><img width="35px" src="logo-zcr-footer.png" alt="" /></div>
            </div>
            <ul className="menu">
                
                <li><NavLink className={(e)=>{return e.isActive?"red": "" }} exact to="/">Home</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/services">Services</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/faq">FAQS</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contact">Contact Us</NavLink></li>
            
            <li className="auth-buttons">
                <button className="login"><NavLink activeClassName="red" to="/login">Login</NavLink></button>
                <button className="register"><NavLink activeClassName="red" to="/signup">Sign Up</NavLink></button>
            </li>
            </ul>
            <button className="menu-toggle" id="menu-toggle">☰</button>
        </nav>
        
        </>
    );
};

export default Navbar;




