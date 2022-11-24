import React, { useState, useEffect, useForms } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function Addpack(props) {
  const { recordForEdit } = props;

  const [busowner, setOwner] = useState({});

  const [Bid, setBid] = useState("");
  const [Bname, setBname] = useState("");
  const [Sname, setSname] = useState("");
  const [Nic, setNic] = useState("");
  const [Pnum, setPnum] = useState("");
  const [Email, setEmail] = useState("");

  function sendData() {
    const newBusOwner = {
      Bid,
      Bname,
      Sname,
      Nic,
      Pnum,
      Email,
    };

    axios
      .post("http://localhost:8000/busowner/add", newBusOwner)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  console.log(busowner);

  const updateBusOwner = {
      Bid,
      Bname,
      Sname,
      Nic,
      Pnum,
      Email,
  };

  function editBusOwner(uId) {
    axios
      .put(`http://localhost:8000/busowner/update/${uId}`, updateBusOwner)
      .then((res) => {
        alert("Owner Updated");
        window.location.reload(false);
        //this.setState({ redirect: "/home" });
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null) {
      setOwner({
        ...recordForEdit,
      });

      setBid(recordForEdit.Bid);
      setBname(recordForEdit.Bname);
      setSname(recordForEdit.Sname);
      setNic(recordForEdit.Nic);
      setPnum(recordForEdit.Pnum);
      setEmail(recordForEdit.Email);
    }
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    if (busowner._id == null) sendData(busowner);
    else {
      editBusOwner(busowner._id);
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
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter ID"
            value={Bid}
            onChange={(e) => {
              setBid(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="packageName" className="form-label">
            Name   
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Enter Name"
            value={Bname}
            onChange={(e) => {
              setBname(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Service Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sName"
            placeholder="Service name"
            value={Sname}
            onChange={(e) => {
              setSname(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
           NIC
          </label>
          <input
            type="text"
            className="form-control"
            id="nic"
            placeholder="Enter NIC"
            value={Nic}
            onChange={(e) => {
              setNic(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="timePeriod" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="timePeriod"
            placeholder="Enter Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="price" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="price"
            placeholder="Phone"
            value={Pnum}
            onChange={(e) => {
              setPnum(e.target.value);
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
