import React, { useState, useEffect, useForms } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function Addpackage(props) {
  const { recordForEdit } = props;

  const [admin, setCustomer] = useState({});

  const [NIC, setNIC] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Type, setType] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function sendData() {
    const newAdmin = {
      NIC,
      Name,
      Phone,
      Type,
      Email,
      Password,
    };

    axios
      .post("http://localhost:8000/admin/add", newAdmin)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  console.log(admin);

  const updateAdmin = {
    NIC,
    Name,
    Phone,
    Type,
    Email,
    Password,
  };

  function editAdmin(uId) {
    axios
      .put(`http://localhost:8000/admin/update/${uId}`, updateAdmin)
      .then((res) => {
        alert("Admin Updated");
        window.location.reload(false);
        //this.setState({ redirect: "/home" });
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null) {
      setCustomer({
        ...recordForEdit,
      });

      setNIC(recordForEdit.NIC);
      setName(recordForEdit.Name);
      setPhone(recordForEdit.Phone);
      setType(recordForEdit.Type);
      setEmail(recordForEdit.Email);
      setPassword(recordForEdit.Password);
    }
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    if (admin._id == null) sendData(admin);
    else {
      editAdmin(admin._id);
    }
  };

  return (
    <div className="popup_container">
      <form
        className="row g-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-md-6">
          <label htmlFor="packageName" className="form-label">
            Enter NIC:
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter NIC"
            value={NIC}
            onChange={(e) => {
              setNIC(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="packageName" className="form-label">
            Enter Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Enter Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Phone"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Enter Type
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter Type"
            value={Type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="timePeriod" className="form-label">
            Enter Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="timePeriod"
            placeholder="Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="price" className="form-label">
            Enter Password:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primary"
            href="/home"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
