import React from 'react'
import Lists from '../Lists/Lists'
import "./User.scss"
import photo from "../../Assets/images/img.png"

function User(title , icon , img , texts , time  ) {
    return (
        <div className='user'>
            <ul>
                <Lists 
                    title={"only 212"} 
                    time={"12:29"}
                    texts={"Lorem ipsum dolor sit amet."}
                    img={photo}
                    url={"/person/only_212"}
                />
                <Lists 
                    title={"asadbek"} 
                    time={"12:29"}
                    texts={"Lorem ipsum dolor sit amet."}
                    img={photo}
                    url={"/person/asadbek"}
                />
                <Lists 
                    title={"sardor"} 
                    time={"12:29"}
                    texts={"Lorem ipsum dolor sit amet."}
                    img={photo}
                    url={"/person/sardor"}
                />
            </ul>
        </div>
    )
}

export default User
