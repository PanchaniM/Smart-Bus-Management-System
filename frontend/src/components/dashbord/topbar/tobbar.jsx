import React, {useEffect, useState} from 'react';
import "./topbar.css";
import {AccountCircle, Search} from '@material-ui/icons';
import profile from "../../../img/profile.jpg"
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {logout, setsearch} from '../../../actions/authAction'

import axios from 'axios';

export default function Tobbar() {

    const id = useSelector(state => state.auth.adminid);
    const dispatch = useDispatch();

    const history = useHistory();

    const [profilepic, setProfilepic] = useState(null);

    const logoutadmin=()=>{
        dispatch(logout());
        history.push('/Admin-Login');
    }

    const searchfunc=(e)=>{
        dispatch(setsearch(e.target.value));
    }

    useEffect(() => {
        //IMAGE
        axios
          .get(`http://localhost:8000/customer/image/${id}`)
          .then((response) => {
            const data = response?.data?.image?.image?.split("/");
            setProfilepic(data[1]);
          })
          .catch((err) => {});
      }, []);

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    
                <span className="logo">Admin Portal</span> 
                </div>
                <div className="topleft">

                    <input 
                    className="searchbox" 
                    type="text"
                    placeholder="Search..."
                    onChange={searchfunc}/>

                </div>
                <div className="topright">
                      <div className="topbarIcons">
                        <a href="#"><p onClick={logoutadmin}>Logout &nbsp; <i class="fas fa-sign-out-alt"></i></p></a>
                    </div>
                        {profilepic && (
                        <img className="topAvatar" src={`http://localhost:8000/${profilepic}`} alt="img" />
                      )}
                    </div>
                </div>
            </div>
    )
}
