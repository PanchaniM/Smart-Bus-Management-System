import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../CSS/conLogin.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header"
import {logout} from '../actions/authAction'

export default function UserLogin() {

  const [employee, setEmployee] = useState([]);
  const [bus, setBus] = useState([]);

  const conid = useSelector(state => state.auth.conid);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutconducter=()=>{
    dispatch(logout());
    history.push('/conLogin');
  }

  useEffect(() => {
    const getEmployee = () => {
      axios.get("http://localhost:8000/employee/").then((res) => {
          setEmployee(res.data);
          
        }).catch((err) => {
          alert(err.message);
        });
    };
    getEmployee();
  }, []);

  useEffect(() => {
    const getBus = () => {
      const id = "NB-2569";
      axios.get("http://localhost:8000/seats/getseats/"+id).then((res) => {
        setBus(res.data);
        console.log(res.data);
        }).catch((err) => {
          alert(err.message);
        });
    };
    getBus();
  }, []);


  function onDelete(eId) {
    axios
      .delete(`http://localhost:8000/employee/delete/${eId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }


  return (
    <div>
      <div className="usr_background">
      <div className="table-name">
                <h1>Conductor</h1>
                <hr/>
            </div>

    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Bus Number</th>
            <th scope="col">EmpName</th>
            <th scope="col">Phone</th>
            <th scope="col">NIC</th>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr>
              <th>NB-4596</th>
              <td>{employee.EmpName}</td>              
              <td>{employee.Phone}</td>
              <td>{employee.NIC}</td>
              <td>{employee.Email}</td>
              <td>{employee.Password}</td>
              <td>{employee.Type}</td>
              
              
              
              <td>
               
                <button
                  className="btn btn-danger"
                  href="/add"
                  onClick={() => {
                    onDelete(employee._id);
                  }}
                >
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
    </div>






        <a href="#"><p onClick={logoutconducter}>Logout &nbsp;</p></a>
    </div>
   
  );
}

