import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../CSS/UserPackages.css";
import Header from './header'
import { useSelector, useDispatch } from "react-redux";

export default function UserPackages() {

    const id = useSelector(state => state.auth.id);

    const [packages, setPackages] = useState();

    console.log(packages);

    useEffect(() => {
        const getPackages = () => {
            axios.get("http://localhost:8000/package/").then((res) => {
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getPackages();
    }, [])

    const addPackage = ( item)=>{

        const payload = {
            userId: id,
            packageId: item._id,
            packageDesc: item.description,
            packageName: item.name,
            packageCost:item.price,
            packageTime:item.time_period,
          };
      
          axios
            .post("http://localhost:8000/userpackage/add", payload)
            .then(() => {
                alert("sucess");
            })
            .catch((err) => {
              alert(err);
            });
    }
    
    const show = ()=>{
        return(packages?.map((item)=>{
            return (     
                 
                      <div className="grid-item">
                          <h1>{item.name}</h1>
                          <p>{item.description}</p>
                          <p>{item.price}</p>
                          <p>{item.time_period+" days"}</p>

                          <button className="btn btn-success" onClick={()=>addPackage(item)}> 
                               Subscribe
                          </button>
                      </div>   
                                                 
              );
        }))
    }


return(
    <div>
        <Header/>
    <div className="grid-container">
        {show()}
    </div>
    </div>
)
}
