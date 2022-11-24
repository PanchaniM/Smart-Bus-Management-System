import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import EmployeeAdd from "./employeeadd";
import Sidebar from '../dashbord/sidebar/sidebar';
import Topbar from '../dashbord/topbar/tobbar';
import { useDispatch, useSelector} from 'react-redux';
import {setsearch} from '../../actions/authAction'

import {
  MatchText,
  SearchProvider,
  SearchContext,
  SearchEventContext,
} from 'react-ctrl-f';

export default function Employeemain() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [employee, setEmployee] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
   //reset search
   dispatch(setsearch(""));

    const getEmployee = () => {
      axios
        .get("http://localhost:8000/employee/")
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getEmployee();
  }, []);

  function refreshpage(){
    window.location.reload();
  }

  const [eId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(eId);
    const employeeId = {
      eId,
    };

    axios
      .post(`http://localhost:8000/employee/update/${eId}`, employeeId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

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

  const openInPopup = (employee) => {
    setRecordForEdit(employee);
    setOpenPopup(true);
    console.log(employee);
  };

  useState(() => {
    if (recordForEdit != null) {
      setEmployee({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);
  
//search eke parts
const search = useSelector((state)=>state.auth.search);

  const getHighlightedText=(text="", highlight)=> 
  {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text?.toString()?.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts?.map(part => part?.toLowerCase() === highlight?.toLowerCase() ? <span style={{backgroundColor: "yellow"}}>{part}</span>: part)}</span>;
  }


  return (
    <div className="usr_background">
      <Topbar/>
      <Sidebar/>
      <div className="table-name">
                <h1>EMPLOYEES</h1>
                <hr/>
            </div>

    <div className="container">
      <table className="table">
        <thead>
          <tr>  
            <th scope="col">#</th>
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
          {employee.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{getHighlightedText(employee.EmpName,search)}</td>
              <td>{getHighlightedText(employee.Phone,search)}</td>
              <td>{getHighlightedText(employee.NIC,search)}</td>
              <td>{getHighlightedText(employee.Email,search)}</td>
              <td>{getHighlightedText(employee.Password,search)}</td>
              <td>{getHighlightedText(employee.Type,search)}</td>
              
              
              
              <td>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-eye"></i>&nbsp;View
                </button>
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    openInPopup(employee);
                  }}
                >
                  <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
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
      <button className="btn btn-success" onClick={() => setOpenPopup(true)}>
        Add new employee
      </button>
      <Popup
        title="Add new employee form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        refreshpage={refreshpage}
      >
        <EmployeeAdd recordForEdit={recordForEdit} />
      </Popup>
    </div>
    </div>
  );
}
