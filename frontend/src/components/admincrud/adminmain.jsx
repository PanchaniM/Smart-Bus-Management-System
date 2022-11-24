import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import Addadmin from "./adminadd";
import Header from "../header";
import Sidebar from "../dashbord/sidebar/sidebar"
import Topbar from "../dashbord/topbar/tobbar";
import { useDispatch, useSelector} from 'react-redux';
import {setsearch} from '../../actions/authAction'

import {
  MatchText,
  SearchProvider,
  SearchContext,
  SearchEventContext,
} from 'react-ctrl-f';

export default function Allpackages() {

  const { searchValue, activeCount, totalCount } = useContext(SearchContext);
  const { onSearchChange, onPrev, onNext } = useContext(SearchEventContext);

  const dispatch = useDispatch();
  
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [admin, setAdmin] = useState([]);

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/admin/add", admin)
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

    const getAdmin = () => {
      axios
        .get("http://localhost:8000/admin/")
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getAdmin();
  }, []);

  // const [pId, setId] = useState("")
  // function sendId(pId) {

  // }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/admin/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (admin) => {
    setRecordForEdit(admin);
    setOpenPopup(true);
    console.log(admin);
  };

  const addOrEdit = (admin) => {
    const pid = admin._id;

    axios
      .put(`http://localhost:8000/admin/update/${pid}`, admin)
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

  //------------------------------------------

  //----------------------------------search ekaaa----------------------------------
  const search = useSelector((state)=>state.auth.search);

  const getHighlightedText=(text="", highlight)=> 
  {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text?.toString()?.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts?.map(part => part?.toLowerCase() === highlight?.toLowerCase() ? <span style={{backgroundColor: "yellow"}}>{part}</span>: part)}</span>;
  }
  
//--------report generation--------------
  const[down,Setdown] = useState(false);

  

  const reportGen=()=>{
    axios
    .get(`http://localhost:8000/Report`)
    .then((response) => {
      Setdown(true);
      
    })
    .catch((err) => {});
  }


  
  return (
    
    <div className="usr_background">
      <Topbar />
      <Sidebar />
        
      <div className="table-name">
        <h1>Admin</h1>
        <hr />
      </div>

      <div className="container">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NIC</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Type</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((admin, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{getHighlightedText(admin.NIC,search)}</td>
                <td>{getHighlightedText(admin.Name,search)}</td>
                <td>{getHighlightedText(admin.Phone,search)}</td>
                <td>{getHighlightedText(admin.Type,search)}</td>
                <td>{getHighlightedText(admin.Email,search)}</td>
                <td>{getHighlightedText(admin.Password,search)}</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>&nbsp;View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(admin);
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
                      onDelete(admin._id);
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
          Add new Admin
        </button>

        <button
         style={{marginLeft:"20px", marginRight:"20px"}}
          className="btn btn-success"
          onClick={reportGen}
        >
          Generate Report
        </button>

        {down&&< a href="http://localhost:8000/pdf/output.pdf" download> 
        <button
          className="btn btn-success">
            DOWNLOAD PDF
        </button>
        </a>}

        <Popup
          title={updateBtn ? "Update Admin form" : "Add new Admin form"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <Addadmin recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </div>
      </div>
  );
}








