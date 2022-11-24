import React, { useState, useEffect, useForms } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function Addpackage(props) {
  const { recordForEdit } = props;

  const [customer, setCustomer] = useState({});

  const [UserName, setUserName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function sendData() {
    const newCustomer = {
      id: "0",
      UserName,
      FirstName,
      LastName,
      Phone,
      Email,
      Password,
    };

    axios
      .post("http://localhost:8000/customer/add", newCustomer)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  console.log(customer);

  const updateCustomer = {
    UserName,
    FirstName,
    LastName,
    Phone,
    Email,
    Password,
  };

  function editCustomer(uId) {
    axios
      .put(`http://localhost:8000/customer/update/${uId}`, updateCustomer)
      .then((res) => {
        alert("Customer Updated");
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

      setUserName(recordForEdit.UserName);
      setFirstName(recordForEdit.FirstName);
      setLastName(recordForEdit.LastName);
      setPhone(recordForEdit.Phone);
      setEmail(recordForEdit.Email);
      setPassword(recordForEdit.Password);
    }
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    if (customer._id == null) sendData(customer);
    else {
      editCustomer(customer._id);
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
            Enter UserName:
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter User Name"
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="packageName" className="form-label">
            Enter First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter First Name"
            value={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Enter Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Last Name"
            value={LastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Enter Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter Last Name"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="timePeriod" className="form-label">
            Enter Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="timePeriod"
            placeholder="Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            //validations
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"

            required

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
