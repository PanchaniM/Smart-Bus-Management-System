import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';


export default function Addpackage(props) {

    const { recordForEdit } = props;

    const [employee, setEmployee] = useState({});
    
    const [EmpName, setEmpName] = useState("");
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const [Type, setType] = useState("");
 


    function sendData() {



        const newEmployee = {
            
            EmpName,
            Password,
            Phone,
            NIC,
            Email,
            Type,
        }


        axios.post("http://localhost:8000/employee/add", newEmployee).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(employee)

    const updateEmployee = {
        EmpName,
        Password,
        Phone,
        NIC,
        Email,
        Type,
    };

    function editEmployee(uId) {

        axios
            .put(
                `http://localhost:8000/employee/update/${uId}`,
                updateEmployee
            )
            .then((res) => {
                alert("Employee Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null) {
            setEmployee({
                ...recordForEdit
            })

            setEmpName(recordForEdit.EmpName)
            setPassword(recordForEdit.Password)
            setPhone(recordForEdit.Phone)
            setNIC(recordForEdit.NIC)
            setEmail(recordForEdit.Email)
            setType(recordForEdit.Type)
         
        }
    }, [recordForEdit]);




    const handleSubmit = (e) => {
        if (employee._id == null)

            sendData(employee)
        else {


            editEmployee(employee._id)
        }

    }




    return (
      <div className="popup-container">
      <form className="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
          <div className="col-md-5">
              <label htmlFor="packageName" className="form-label">Enter Employee Name:</label>
              <input type="text" className="form-control" name="EmpName" placeholder="Enter Employee Name"
                  value={EmpName}
                  onChange={(e) => {
                      setEmpName(e.target.value);
                  }}
              />
          </div>

         
          <div className="col-md-5">
              <label htmlFor="tripsCount" className="form-label">Enter Phone Number</label>
              <input type="text" className="form-control" name="Phone" placeholder="Enter phone Number"
                  value={Phone}
                  onChange={(e) => {
                      setPhone(e.target.value);
                  }}
              />
          </div>
          <div className="col-md-5">
              <label htmlFor="tripsCount" className="form-label">NIC</label>
              <input type="text" className="form-control" name="NIC" placeholder="Enter NIC"
                  value={NIC}
                  onChange={(e) => {
                      setNIC(e.target.value);
                  }}

                  pattern="^[0-9+]{9}[vV|xX]$"
                  required
              />
          </div>

          <div className="col-md-5">
              <label htmlFor="timePeriod" className="form-label">Enter Employee Type</label>
              <input type="text" className="form-control" name="Type" placeholder="Enter Employee Type"
                  value={Type}
                  onChange={(e) => {
                      setType(e.target.value);
                  }}
              />
          </div>


          <div className="col-md-5">
              <label htmlFor="timePeriod" className="form-label">Enter Email :</label>
              <input type="text" className="form-control" name="Email" placeholder="Enter Email"
                  value={Email}
                  onChange={(e) => {
                      setEmail(e.target.value);
                  }}

                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
              />
          </div>

          <div className="col-md-5">
              <label htmlFor="timePeriod" className="form-label">Enter Password:</label>
              <input type="text" className="form-control" name="Password" placeholder="Enter Password"
                  value={Password}
                  onChange={(e) => {
                      setEmail(e.target.value);
                  }}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
              />
          </div>
        

          <div>
              <input type="submit" className="btn btn-primary" href="/home" value="Submit" />
          </div>
      </form>

  </div>
)
}
