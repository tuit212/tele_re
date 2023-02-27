import React from 'react'
import Lists from '../Lists/Lists'
import "./User.scss"

function User(title , icon , img , texts , time  ) {
    return (
        <div className='user'>
            <ul>
                <Lists/>
                <Lists/>
                <Lists/>
            </ul>
        </div>
    )
}

export default User
