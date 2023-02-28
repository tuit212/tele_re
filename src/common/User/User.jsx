import React from 'react'
import axios from 'axios'
import { useEffect , useState} from 'react'
import Lists from '../Lists/Lists'
import "./User.scss"
import photo from "../../Assets/images/img.png"


function User(title , icon , img , texts , time  ) {

    const [data , setData] = useState({
        isFetched : false, 
        data : [],
    })

    useEffect(() => {
        axios.get("http://localhost:3500/posts")
        .then(res => {
            setData({
                isFetched:true, 
                data:res.data
            });
        })
        .catch(err => {
            setData({
                isFetched:false, 
                // data:res.data
            });
        });
        
    }, [])

    return (
        <div className='user'>
            <ul>
                {
                    data.isFetched && data.data.map((item) =>

                    <Lists 
                        title={item.name} 
                        time={"12:29"}
                        texts={item.email}
                        img={photo}
                        url={"/person/only_212"}
                /> )
                }
                {/* <Lists 
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
                /> */}
            </ul>
        </div>
    )
}

export default User
