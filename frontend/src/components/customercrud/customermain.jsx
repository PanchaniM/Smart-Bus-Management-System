import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import Addcustomer from "./customeradd";
import Header from "../header";
import Sidebar from "../dashbord/sidebar/sidebar";
import Topbar from "../dashbord/topbar/tobbar";
import { useDispatch, useSelector } from "react-redux";
import { setsearch } from "../../actions/authAction";

import {
  MatchText,
  SearchProvider,
  SearchContext,
  SearchEventContext,
} from "react-ctrl-f";

export default function Allpackages() {
  const dispatch = useDispatch();

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [customer, setCustomer] = useState([]);

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/customer/add", customer)
      .then(() => {
        // alert("Customer added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    //reset search
    dispatch(setsearch(""));

    const getCustomer = () => {
      axios
        .get("http://localhost:8000/customer/")
        .then((res) => {
          setCustomer(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getCustomer();
  }, []);

  // const [pId, setId] = useState("")
  // function sendId(pId) {

  function refreshpage() {
    window.location.reload();
  }

  // }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/customer/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (customer) => {
    setRecordForEdit(customer);
    setOpenPopup(true);
    console.log(customer);
  };

  const addOrEdit = (customer) => {
    const pid = customer._id;

    axios
      .put(`http://localhost:8000/customer/update/${pid}`, customer)
      .then(() => {
        alert("Updated");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  function refreshpage() {
    window.location.reload();
  }

  // update error fixed ---------------------

  const [updateBtn, setUpdatebtn] = useState(false);
  console.log(updateBtn);

  // const updateBtnactive = () =>{

  //      updateBtn? setUpdatebtn(true):setUpdatebtn(false);
  //     }

  const search = useSelector((state) => state.auth.search);

  const getHighlightedText = (text = "", highlight) => {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text?.toString()?.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts?.map((part) =>
          part?.toLowerCase() === highlight?.toLowerCase() ? (
            <span style={{ backgroundColor: "yellow" }}>{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  //------------------------------------------
  return (
    <div className="usr_background">
      <Topbar />
      <Sidebar />
      <div className="table-name">
        <h1>USERS</h1>
        <hr />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{getHighlightedText(customer.UserName, search)}</td>
                <td>{getHighlightedText(customer.FirstName, search)}</td>
                <td>{getHighlightedText(customer.LastName, search)}</td>
                <td>{getHighlightedText(customer.Phone, search)}</td>
                <td>{getHighlightedText(customer.Email, search)}</td>
                <td>{getHighlightedText(customer.Password, search)}</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>&nbsp;View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(customer);
                      setUpdatebtn(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Update
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    href="/add"
                    onClick={() => {
                      onDelete(customer._id);
                    }}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-success"
          onClick={() => {
            setOpenPopup(true);
            setUpdatebtn(false);
          }}
        >
          Add new Customer
        </button>
        <Popup
          title={updateBtn ? "Update Customer form" : "Add new Customer form"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <Addcustomer recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </div>
    </div>
  );
}
