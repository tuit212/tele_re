import React from 'react'
import "./Lists.scss"
import { NavLink } from 'react-router-dom'

function Lists({img , title , icon , texts , time  , url}) {
    return (
        <NavLink to={url} className='user_list'>
            <div className="img">
                <img src={img} alt="photot" width={"100%"} />
            </div>
            <div>
                <div className='box'>
                    <div>
                        <i class="fa-solid fa-user-group"></i>
                        <span>{title}</span>
                    </div>
                    <p>{time}</p>
                </div>
                <p>{texts}</p>
            </div>
        </NavLink>
    )
}

export default Lists
