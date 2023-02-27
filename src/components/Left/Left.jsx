import React from 'react'
import "./Left.scss"
import Navbar from './Navbar/Navbar'

function Left() {
    return (
        <div className='section-left'>
            {/* telegram btn*/}
            <div className="left__btn">
                <i class="fa-solid fa-bars"></i>
            </div>

            {/* left Navbar */}
            <Navbar/>
        </div>
    )
}

export default Left
