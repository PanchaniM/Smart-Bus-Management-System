import "./sidebar.css"
import home from "../../../img/dashbord/dashhome.jpg";
import manageemployee from "../../../img/dashbord/manageemployee.jpg";
import ownermanage from "../../../img/dashbord/ownermanage.jpg";
import shedulemanage from "../../../img/dashbord/shedulemanage.png";
import busmanagement from "../../../img/dashbord/busmanagement.jpg";
import empmanage from "../../../img/dashbord/calendar.png";
import packagemanage from "../../../img/dashbord/packagemanage.jpg";
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Sidebar() {

    const [sidebarToggeled, setSidebarToggeled] = useState(false);

    const togglesidebar = () =>{

        sidebarToggeled ? setSidebarToggeled(false):setSidebarToggeled(true);
        console.log(sidebarToggeled)
    }
  

    return (
        <div className={sidebarToggeled? "active sidebar effect8" : "sidebar effect8"}>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="toptag">
                        <MenuIcon/>
                        <h3 className="sidebarTitle">    
                        <p className={sidebarToggeled? "active p" : "p"}>BUZZY BUS</p>
                                <i class="fas fa-bars ham" onClick={togglesidebar}></i>
                        </h3>
                    </div>
                    <ul className="sidebarList">
                        <Link className="Link" to="/dashbord">
                        <li className="sidebarListItem active">
                            <span className="tooltip">DASHBORdfgfdgdfdjhgjgjgkjkkhkhkhkjhkD</span>
                        <i class="fas fa-home"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>DASHBORD</p>
                        </li>
                        </Link>
                        <Link className="Link" to="./customermain">
                        <li className="sidebarListItem">
                        <i class="fas fa-users"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>USERS</p>
                            <span className="tooltip">DASHBORD</span>
                        </li>
                        </Link>

                        <Link to="/BusOwner">
                        <li className="sidebarListItem">
                        <i class="fas fa-walking"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>OWNERS</p>
                            <span className="tooltip">DASHBORD</span>
                        </li>
                        </Link>

                        <Link to="/schedule">
                        <li className="sidebarListItem">
                        <i class="fas fa-clock"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>SCHEDULES</p>
                            <span className="tooltip">DASHBORD</span>
                        </li>
                        </Link>
                    


                        <Link className="Link" to="/bus">
                        <li className="sidebarListItem">
                        <i class="fas fa-bus"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>BUSSES</p>
                            <span className="tooltip">DASHBORD</span>
                        </li>
                        </Link>
                        <Link className="Link" to="./employeemain">
                        <li className="sidebarListItem">
                        <i class="fas fa-briefcase"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>EMPLOYEE</p>
                            <span className="tooltip">DASHBORD</span>
                        </li>
                        </Link>

                        <Link to="/packages">
                        <li className="sidebarListItem">
                        <i class="fas fa-file-powerpoint"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>PACKAGES</p>
                           <div className="tooltip">DASHBORD</div> 
                        </li>
                        </Link>

                        <Link to="./routes">
                        <li className="sidebarListItem">
                        <i class="fas fa-route"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>ROUTE</p>
                           <div className="tooltip">DASHBORD</div> 
                        </li>
                        </Link>

                        <Link to="./admin">
                        <li className="sidebarListItem">
                        <i class="fas fa-user-tie"></i>
                            <p className={sidebarToggeled? "active p" : "p"}>ADMINS</p>
                           <div className="tooltip">ADMINS</div> 
                        </li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
