import React from 'react'
import { useSelector} from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export default function Card() {

    const id = useSelector((state)=>state?.auth?.imageid);
    const history = useHistory();
    
    const pageload=()=>{
        history.push("/Userprofile");
    }

    return (
        
        <div className="user-card" >
            <div >
            {id && <img className="profile-img" src={`http://localhost:8000/${id}`} alt="img" onClick={pageload}/>}
            </div>
        </div>
    )
}
