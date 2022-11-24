import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../popup";
import Addbusowner from "./busowneradd";
import Header from "../header";
import Sidebar from "../dashbord/sidebar/sidebar"
import Topbar from "../dashbord/topbar/tobbar";
import busownerimg from "./../../img/busowner/busowner1.jpg";
import "./../../CSS/busowner.css";
import { useDispatch, useSelector} from 'react-redux';
import {setsearch} from '../../actions/authAction';

import {
  MatchText,
  SearchProvider,
  SearchContext,
  SearchEventContext,
} from 'react-ctrl-f';

export default function Allpackages() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [busowner, setBusOwner] = useState([]);

  const dispatch = useDispatch();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/busowner/add", busowner)
      .then(() => {
        alert("Owner added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {

    //reset search
    dispatch(setsearch(""));

    const getBusOwner = () => {
      axios
        .get("http://localhost:8000/busowner/")
        .then((res) => {
          setBusOwner(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getBusOwner();
  }, []);

  // const [pId, setId] = useState("")
  // function sendId(pId) {

  // }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/busowner/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (busowner) => {
    setRecordForEdit(busowner);
    setOpenPopup(true);
    console.log(busowner);
  };

  const addOrEdit = (busowner) => {
    const pid = busowner._id;

    axios
      .put(`http://localhost:8000/busowner/update/${pid}`, busowner)
      .then(() => {
        alert("Bus Owner Added Successfully")
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

//search parts
  const search = useSelector((state)=>state.auth.search);

  const getHighlightedText=(text="", highlight)=> 
  {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text?.toString()?.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts?.map(part => part?.toLowerCase() === highlight?.toLowerCase() ? <span style={{backgroundColor: "yellow"}}>{part}</span>: part)}</span>;
  }


  const[down,Setdown] = useState(false);

  

  const reportGen=()=>{
    axios
    .get(`http://localhost:8000/Report`)
    .then((response) => {
      Setdown(true);
      
    })
    .catch((err) => {});
  }
  // const updateBtnactive = () =>{

  //      updateBtn? setUpdatebtn(true):setUpdatebtn(false);
  //     }

  //------------------------------------------style={{backgroundImage:`url(${busownerimg})`}}
  return (
    <div className="usr_background" id="busBackImg" >
      <Topbar />
      <Sidebar />
      <div className="table-name">
        <h1>Bus Owners</h1>
        <hr />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bid</th>
              <th scope="col">Bname</th>
              <th scope="col">Sname</th>
              <th scope="col">Nic</th>
              <th scope="col">Pnum</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {busowner.map((busowner, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{getHighlightedText(busowner.Bid,search)}</td>
                <td>{getHighlightedText(busowner.Bname,search)}</td>
                <td>{getHighlightedText(busowner.Sname,search)}</td>
                <td>{getHighlightedText(busowner.Nic,search)}</td>
                <td>{getHighlightedText(busowner.Pnum,search)}</td>
                <td>{getHighlightedText(busowner.Email,search)}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(busowner);
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
                      onDelete(busowner._id);
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
          Add new Owner
        </button>
        <button
         style={{marginLeft:"20px", marginRight:"20px"}}
          className="btn btn-success"
          onClick={reportGen}
        >
          Generate Report
        </button>

        {down&&< a href="http://localhost:8000/pdf/busoutput.pdf" download> 
        <button
          className="btn btn-success">
            DOWNLOAD PDF
        </button>
        </a>}

        <Popup
          title={updateBtn ? "Update Bus Owner Form" : "Add new Bus Owner form"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <Addbusowner recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </div>
    </div>
  );
}
