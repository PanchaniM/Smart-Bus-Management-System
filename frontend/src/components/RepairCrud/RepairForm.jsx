import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../popup";
import AddRepair from "./RepairAdd";
import Sidebar from '../dashbord/sidebar/sidebar';
import Topbar from '../dashbord/topbar/tobbar';

export default function Repairmain() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [repair, setRepair] = useState([]);

  useEffect(() => {
    const getRepair = () => {
      axios
        .get("http://localhost:8000/busrepair/")
        .then((res) => {
          setRepair(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getRepair();
  }, []);


  function refreshpage() {
    window.location.reload();
  }


  const [sId, setBusNumber] = useState("");
  function sendBusNumber(e) {
    e.preventDefault();
    alert(sId);
    const BusNumber = {
      sId,
    };

    axios
      .post(`http://localhost:8000/busrepair/update/${sId}`, BusNumber)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/busrepair/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (repair) => {
    setRecordForEdit(repair);
    setOpenPopup(true);
    console.log(repair);
  };

  useState(() => {
    if (recordForEdit != null) {
      setRepair({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);
  return (
    <div className="usr_background">
      <Topbar />
      <Sidebar />
      <div className="table-name">
                <h1>Available Repair Buses</h1>
                <hr/>
            </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bus Number</th>
              <th scope="col">Repair Reason</th>
              <th scope="col">Repair Date</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {repair.map((repair, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{repair.BusNumber}</td>
                <td>{repair.RepairReason}</td>
                <td>{repair.RepairDate}</td>
                <td>{repair.Price}</td>

                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>&nbsp;View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(repair);
                    }}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Update
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    href="/add"
                    onClick={() => {
                      onDelete(repair._id);
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
          Add Buses to be Repaired
        </button>
        <Popup
          title="Repair Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <AddRepair recordForEdit={recordForEdit} />
        </Popup>
      </div>
    </div>
  );
}
