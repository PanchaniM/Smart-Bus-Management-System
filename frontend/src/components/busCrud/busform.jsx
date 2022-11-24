import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Popup from "../../components/popup";
import Addbus from './busadd';
import Header from '../header'
import Sidebar from '../dashbord/sidebar/sidebar';
import Topbar from '../dashbord/topbar/tobbar';
import { useDispatch, useSelector} from 'react-redux';
import {setsearch} from '../../actions/authAction'

import { useLocation, useHistory, Link } from 'react-router-dom';

import {
    MatchText,
    SearchProvider,
    SearchContext,
    SearchEventContext,
  } from 'react-ctrl-f';


export default function Allbus() {

    const history = useHistory();
    const location = useLocation();
    
    const push = () =>{
        history.push('/repair')
    }
    
    const dispatch = useDispatch();

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [bus, setBus] = useState([]);

    function sendData(e) {


        e.preventDefault();

        axios.post("http://localhost:8000/bus/add", bus).then(() => {
            // alert("Bus added!")
            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    useEffect(() => {

            //reset search
    dispatch(setsearch(""));


        const getBus = () => {
            axios.get("http://localhost:8000/bus/").then((res) => {
                setBus(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getBus();
    }, [])


    function onDelete(kId) {
      
      axios.delete(`http://localhost:8000/bus/delete/${kId}`).then((req, res) => {
           window.location.reload(false);
       }).catch((err) => {
           alert(err);
        })
    }


    const openInPopup = bus => {
        setRecordForEdit(bus);
        setOpenPopup(true);
        console.log(bus)
    }


    function refreshpage(){
        window.location.reload();
    }


    const addOrEdit = (bus) => {

        const bid = bus._id


        axios.put(`http://localhost:8000/bus/update/${bid}`, bus).then(() => {
            alert("Updated")
            window.location.reload(false);
        }).catch((err) => {
            alert(err)
        })

    }

    const search = useSelector((state)=>state.auth.search);

    const getHighlightedText=(text="", highlight)=> 
    {
      // Split text on highlight term, include term itself into parts, ignore case
      const parts = text?.toString()?.split(new RegExp(`(${highlight})`, 'gi'));
      return <span>{parts?.map(part => part?.toLowerCase() === highlight?.toLowerCase() ? <span style={{backgroundColor: "yellow"}}>{part}</span>: part)}</span>;
    }

    const[down,Setdown] = useState(false);

    const [updateBtn, setUpdatebtn] = useState(false);
    console.log(updateBtn);

    return (
        <div className="usr_background">
            <Sidebar/>
            <Topbar/>
            <div className="table-name">
                <h1>BUSES</h1>
                <hr/>
                <button 
                onClick={()=>{
                    push()
                }}
                type="button" class="btn btn-primary">Repairing busses</button>
            </div>
            

            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Bus Number</th>
                            <th scope="col">Number of seats</th>
                            <th scope="col">Registration Number</th>
                            <th scope="col">Bus Type</th>
                            <th scope="col">Bus Status</th>
                            <th scope="col">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {bus.map((bus, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{getHighlightedText(bus.busNo,search)}</td>
                                <td>{getHighlightedText(bus.NoOfSeats,search)}</td>
                                <td>{getHighlightedText(bus.regNo,search)}</td>
                                <td>{getHighlightedText(bus.Type,search)}</td>
                                <td>{getHighlightedText(bus.permitID,search)}</td>

                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="far fa-eye"></i>&nbsp;View
                                    </button>
                                    &nbsp;
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            openInPopup(bus);
                                            setUpdatebtn(true);
                                        }}


                                    >
                                        <i className="fas fa-edit"></i>&nbsp;Update
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" href="/add" onClick={() => {onDelete(bus._id) }} >
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-success"
                    onClick={() => {
                        setOpenPopup(true);
                        setUpdatebtn(false);
                    }}>
                    Add new Bus</button>
                <Popup
                    title={updateBtn ? "Update Bus form" : "Add new Bus form"}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    refreshpage = {refreshpage}
                >
                    <Addbus
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
                    />

                </Popup>


            </div>
        </div>
    )
}

