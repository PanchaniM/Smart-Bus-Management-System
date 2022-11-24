import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';
import { FindReplaceOutlined, MessageSharp, NearMeRounded } from '@material-ui/icons';


export default function Addrepair(props) {

    const { recordForEdit } = props;

    const [repair, setRepair] = useState({});


    const [bus, setBus] = useState([]);
    const [routeByName, setRouteByName] = useState([0]);

    const [BusNumber, setBusNumber] = useState("");
    const [RepairReason, setRepairReason] = useState("");
    const [RepairDate, setRepairDate] = useState("");
    const [Price, setPrice] = useState("");
   

    const [fetchedId, setfetchedId] = useState("");


    function sendData() {



        const newRepair = {
            id: '0',
            BusNumber,
            RepairReason,
            RepairDate,
            Price,
            
        }


        axios.post("http://localhost:8000/busrepair/add", newRepair).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(repair)

    const updateRepair = {
        BusNumber,
        RepairReason,
        RepairDate,
        Price,

    };

    useEffect(() => {
        const getBus = () => {
            axios.get("http://localhost:8000/bus/").then((res) => {
                setBus(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getBus();
    }, [])


    function editRepair(uId) {

        axios
            .put(
                `http://localhost:8000/busrepair/update/${uId}`,
                updateRepair
            )
            .then((res) => {
                alert("Bus Repair has been Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }


    useEffect(() => {
        if (recordForEdit != null) {
            setRepair({
                ...recordForEdit
            })

            setBusNumber(recordForEdit.BusNumber)
            setRepairReason(recordForEdit.RepairReason)
            setRepairDate(recordForEdit.setRepairDate)
            setPrice(recordForEdit.Price)

        }
    }, [recordForEdit]);


    const handleSubmit = (e) => {
        if (repair._id == null)

            sendData(repair)
        else {


            editRepair(repair._id)
        }

    }

    return (
        <div className="popup_container">
            <form className="row g-4" onSubmit={(e) => { handleSubmit(e) }}>
                
                <div className="col-md-6">
                    <label htmlFor="busnumber" className="form-label">Select Bus Number :</label>

                    <select id="busnumber" className="form-input-2"
                        onChange={(e) => {
                            // setShow(true);
                            setBusNumber(e.target.value);
                        }}>
                        <option selected >...</option>
                        {bus.map((bus, index) => (
                            <option key={index}>{bus.busNo}</option>
                        ))}
                    </select>
                </div>
                

                <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Enter Repair Reason:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Repair Reason"
                        value={RepairReason}
                        onChange={(e) => {
                            setRepairReason(e.target.value);

                        }}
  
                        required
                    />
                </div>

                
                <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Enter Repair Date:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Repair Date"
                        value={RepairDate}
                        onChange={(e) => {
                            setRepairDate(e.target.value);

                        }}
                
                        required
                    />
                </div>

                
                <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Enter Price:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Price"
                        value={Price}
                        onChange={(e) => {
                            setPrice(e.target.value);

                        }}
                
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
