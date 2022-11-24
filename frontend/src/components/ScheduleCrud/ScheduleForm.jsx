import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import AddSchedule from "./ScheduleAdd";
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


export default function Schedulemain() {

  const dispatch = useDispatch(); 
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    //reset search
    dispatch(setsearch(""));

    const getSchedule = () => {
      axios
        .get("http://localhost:8000/busschedule/")
        .then((res) => {
          setSchedule(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getSchedule();
  }, []);


  function refreshpage() {
    window.location.reload();
  }


  const [sId, setcheduleId] = useState("");
  function sendscheduleId(e) {
    e.preventDefault();
    alert(sId);
    const scheduleId = {
      sId,
    };

    axios
      .post(`http://localhost:8000/busschedule/update/${sId}`, scheduleId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/busschedule/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (schedule) => {
    setRecordForEdit(schedule);
    setOpenPopup(true);
    console.log(schedule);
  };

  useState(() => {
    if (recordForEdit != null) {
      setSchedule({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);


  const search = useSelector((state)=>state.auth.search);

  const getHighlightedText=(text="", highlight)=> 
  {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text?.toString()?.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts?.map(part => part?.toLowerCase() === highlight?.toLowerCase() ? <span style={{backgroundColor: "yellow"}}>{part}</span>: part)}</span>;
  }
  
  return (
    <div className="usr_background">
      <Topbar />
      <Sidebar />
      <div className="table-name">
                <h1>SCHEDULES</h1>
                <hr/>
            </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">scheduleId</th>
              <th scope="col">Route Name</th>
              <th scope="col">Time</th>
              <th scope="col">Bus Number</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {schedule.map((schedule, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{getHighlightedText(schedule.scheduleId,search)}</td>
                <td>{getHighlightedText(schedule.Route,search)}</td>
                <td>{getHighlightedText(schedule.Time,search)}</td>
                <td>{getHighlightedText(schedule.BusNumber,search)}</td>

                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>&nbsp;View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(schedule);
                    }}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Update
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    href="/add"
                    onClick={() => {
                      onDelete(schedule._id);
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
          Add new Schedule
        </button>
        <Popup
          title="Schedule Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <AddSchedule recordForEdit={recordForEdit} />
        </Popup>
      </div>
    </div>
  );
}
