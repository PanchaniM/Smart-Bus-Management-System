import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';
import { FindReplaceOutlined, MessageSharp, NearMeRounded } from '@material-ui/icons';


export default function Addschedule(props) {

    const { recordForEdit } = props;

    const [schedule, setSchedule] = useState({});
    const [routes, setRoutes] = useState([]);
    const [bus, setBus] = useState([]);
    const [routeByName, setRouteByName] = useState([0]);

    const [scheduleId, setscheduleId] = useState("");
    const [RouteId, setRouteId] = useState("");
    const [Route, setRoute] = useState("");
    const [Time, setTime] = useState("");
    const [BusNumber, setBusNumber] = useState("");

    const [fetchedId, setfetchedId] = useState("");




    


    function sendData() {



        const newSchedule = {
            id: '0',
            scheduleId,
            RouteId,
            Route,
            Time,
            BusNumber,
        }


        axios.post("http://localhost:8000/busschedule/add", newSchedule).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(schedule)

    const updateSchedule = {
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber,

    };

    useEffect(() => {
        const getRoutes = () => {
            axios.get("http://localhost:8000/route/").then((res) => {
                setRoutes(res.data);

            }).catch((err) => {
                alert(err.message)
            })
        }
        getRoutes();
    }, [])

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


    function editSchedule(uId) {

        axios
            .put(
                `http://localhost:8000/busschedule/update/${uId}`,
                updateSchedule
            )
            .then((res) => {
                alert("Schedule has been Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }


    function findRouteId(name) {
        axios.get(`http://localhost:8000/route/routeidbyname/${name}`).then((res) => {
            setRouteByName(res.data.routesbyname)


        }).catch((err) => {
            alert(err)
        })
    }





    useEffect(() => {
        if (recordForEdit != null) {
            setSchedule({
                ...recordForEdit
            })

            setscheduleId(recordForEdit.scheduleId)
            setRouteId(recordForEdit.RouteId)
            setRoute(recordForEdit.Route)
            setTime(recordForEdit.Time)
            setBusNumber(recordForEdit.BusNumber)


        }
    }, [recordForEdit]);

    useEffect(() => {
      

            setfetchedId(routeByName.routeId)
            

      

    

    }, []);





    const handleSubmit = (e) => {
        if (schedule._id == null)

            sendData(schedule)
        else {


            editSchedule(schedule._id)
        }

    }





    return (
        <div className="popup_container">
            <form className="row g-4" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Enter Schedule ID:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Schedule ID"
                        value={scheduleId}
                        onChange={(e) => {
                            setscheduleId(e.target.value);

                        }}
                
                        pattern = "S.[0-3]{1,5}$"
                        required
                    />
                </div>




                <div className="col-md-6">
                    <label htmlFor="Route" className="form-label">Select Route :</label>
                    {/* <input type="text" className="form-control" id="Route" placeholder="Enter Route"
                        value={Route}
                        onChange={(e) => {
                            setRoute(e.target.value);
                        }}
                    /> */}
                    <select id="depatureTime" className="form-input-2"
                        onChange={(e) => {
                            // setShow(true);
                            setRoute(e.target.value);
                            findRouteId(e.target.value);
                        }}
                        required>
                        <option selected >...</option>
                        {routes.map((routes, index) => (
                            <option key={index}>{routes.routeName}</option>


                        ))}

                    </select>
                </div>





                <div className="col-md-6">
                    <label htmlFor="Route" className="form-label">Select Time :</label>

                    <select id="depatureTime" className="form-input-2"
                        onChange={(e) => {
                            // setShow(true);
                            setTime(e.target.value);
                        }}>
                        <option selected >...</option>
                        <option >03:30 A.M</option>
                        <option >03.45 A.M</option>
                        <option >04:00 A.M</option>
                        <option >04:10 A.M</option>
                        <option >04:25 A.M</option>
                        <option >04:30 A.M</option>
                        <option >04:45 A.M</option>
                        <option >05:00 A.M</option>
                        <option >05:10 A.M</option>
                        <option >05:25 A.M</option>
                        <option >05:30 A.M</option>
                        <option >05:45 A.M</option>
                        <option >06:00 A.M</option>
                        <option >06:10 A.M</option>
                        <option >06:25 A.M</option>
                        <option >06:30 A.M</option>
                        <option >06:45 A.M</option>
                        <option >07:00 A.M</option>
                        <option >07:10 A.M</option>
                        <option >07:25 A.M</option>
                        <option >07:30 A.M</option>
                        <option >07:45 A.M</option>
                        <option >08:00 A.M</option>
                        <option >08:10 A.M</option>
                        <option >08:25 A.M</option>
                        <option >08:30 A.M</option>
                        <option >08:45 A.M</option>
                        <option >09:00 A.M</option>
                        <option >09:10 A.M</option>
                        <option >09:25 A.M</option>
                        <option >09:30 A.M</option>
                        <option >09:45 A.M</option>
                        <option >10:00 A.M</option>
                        <option >10:10 A.M</option>
                        <option >10:25 A.M</option>
                        <option >10:30 A.M</option>
                        <option >10:45 A.M</option>
                        <option >11:00 A.M</option>
                        <option >11:10 A.M</option>
                        <option >11:25 A.M</option>
                        <option >11:30 A.M</option>
                        <option >11:45 A.M</option>
                        <option >12:00 P.M</option>
                        <option >12:00 P.M</option>
                        <option >12:10 P.M</option>
                        <option >12:25 P.M</option>
                        <option >12:30 P.M</option>
                        <option >12:45 P.M</option>
                        <option >01:00 P.M</option>
                        <option >01:10 P.M</option>
                        <option >01:25 P.M</option>
                        <option >01:30 P.M</option>
                        <option >01:45 P.M</option>
                        <option >02:00 P.M</option>
                        <option >02:10 P.M</option>
                        <option >02:25 P.M</option>
                        <option >02:30 P.M</option>
                        <option >02:45 P.M</option>
                        <option >03:00 P.M</option>
                        <option >03:10 P.M</option>
                        <option >03:25 P.M</option>
                        <option >03:30 P.M</option>
                        <option >03:45 P.M</option>
                        <option >04:00 P.M</option>
                        <option >04:10 P.M</option>
                        <option >04:25 P.M</option>
                        <option >04:30 P.M</option>
                        <option >04:45 P.M</option>
                        <option >05:00 P.M</option>
                        <option >05:10 P.M</option>
                        <option >05:25 P.M</option>
                        <option >05:30 P.M</option>
                        <option >05:45 P.M</option>
                        <option >06:00 P.M</option>
                        <option >06:10 P.M</option>
                        <option >06:25 P.M</option>
                        <option >06:30 P.M</option>
                        <option >06:45 P.M</option>
                        <option >07:00 P.M</option>
                        <option >07:10 P.M</option>
                        <option >07:25 P.M</option>
                        <option >07:30 P.M</option>
                        <option >07:45 P.M</option>
                        <option >08:00 P.M</option>
                        <option >08:10 P.M</option>
                        <option >08:25 P.M</option>
                        <option >08:30 P.M</option>
                        <option >08:45 P.M</option>
                        <option >09:00 P.M</option>
                        <option >09:10 P.M</option>
                        <option >09:25 P.M</option>
                        <option >09:30 P.M</option>
                        <option >09:45 P.M</option>
                        <option >10:00 P.M</option>
                        <option >10:10 A.M</option>
                        <option >10:25 P.M</option>
                        <option >10:30 P.M</option>
                        <option >10:45 P.M</option>
                        <option >11:00 P.M</option>
                        <option >11:10 P.M</option>
                        <option >11:25 P.M</option>
                        <option >11:30 P.M</option>
                        <option >11:45 P.M</option>
                        <option >12:00 A.M</option>
                        


                    </select>
                </div>

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

                {/* <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Route ID:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Schedule ID"
                        value={fetchedId}
                        onChange={(e) => {
                            setscheduleId(e.target.value);
                        }}
                    />
                </div> */}



                {/* <label htmlFor="">Select tieme</label>
                <div className="time_container">

                </div> */}

                <div>
                    <input type="submit" className="btn btn-primary" href="/home" value="Submit" />
                </div>
            </form>

        </div>
    )
}