import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
    return (
        <nav className='site-navbar'>
            <NavLink to={"/"} className='nav'>
                <i class="fa-solid fa-comments"></i>
                <p>Hamma chat</p>
            </NavLink>
            <NavLink to={"/shaxsiy"} className='nav'>
                <i class="fa-solid fa-user"></i>
                <p>Shaxsiy</p>
            </NavLink>
            <NavLink to={"/najotTa'lim"} className='nav'>
                <i class="fa-solid fa-user-graduate"></i>
                <p>Natoj <br /> Ta'lim</p>
            </NavLink>
            <NavLink to={"/kanalim"} className='nav'>
                <i class="fa-solid fa-book"></i>
                <p>kanalim</p>
            </NavLink>
            <NavLink to={"/bozor"} className='nav'>
                <i class="fa-solid fa-cart-shopping"></i>
                <p>bozor</p>
            </NavLink>
            <NavLink to={"/o'qilmaganlar"} className='nav'>
                <i class="fa-solid fa-comment"></i>
                <p>o'qilma <br /> ganlar</p>
            </NavLink>
            <NavLink to={"/settings"} className='nav'>
                <i class="fa-solid fa-sliders"></i>
                <p>parametr</p>
            </NavLink>
            
        </nav>
    )
}

export default Navbar
