import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Link, useHistory } from 'react-router-dom'
import Header from './header'
import { Description } from '@material-ui/icons';



export default function Booking() {


    const [routes, setroutes] = useState([]);
    const [routedata, setRouteData] = useState([]);
    const [route, setRoute] = useState([]);
    const [seats, setSeats] = useState(false);
    const [NewRouteId, setNewRouteId] = useState("");
    const [newRouteName, setNewRouteName] = useState("");
    const [newBusNumber, setNewBusNumber] = useState("");
    const [time, setTime] = useState("");






    const [routeId, setRId] = useState("")
    const [show, setShow] = useState(false);
    const [adult, setAdult] = useState("")
    const [child, setChild] = useState("")
    const [student, setStudent] = useState("")



    useEffect(() => {
        const getRoutes = () => {
            axios.get("http://localhost:8000/route/").then((res) => {
                setroutes(res.data);

            }).catch((err) => {
                alert(err.message)
            })
        }
        getRoutes();
    }, [])


    function sendTo(to) {
        axios.get(`http://localhost:8000/booking/get/${to}`).then((res) => {
            setRouteData(res.data.bookings);
            console.log(res.data.bookings)
        }).catch((err) => {
            alert(err)
        })
    }

    function sendRoute(routeN) {
        axios.get(`http://localhost:8000/busschedule/getbyname/${routeN}`).then((res) => {
            setRoute(res.data.route)
        }).catch((err) => {
            alert("set route err")
        })
    }




    const history = useHistory();

    // console.log(time)
    // console.log(NewRouteId)
    // console.log(newRouteName)
    // console.log(routeId)

    const goToseats = (BusNumber) => {

        if (adult == 0 && child == 0 && student == 0) {
            alert("please enter count of passengers")
        } else {
            getBookingdetails(BusNumber)

            if (seats != false) {

                history.push("/seats", {
                    BusNumber: BusNumber,
                    adult: adult,
                    child: child,
                    student: student,
                    routeId: NewRouteId,
                    routeName: newRouteName,
                    time: time

                })
            } else {
                createBus(BusNumber)
                history.push("/seats", {
                    BusNumber: BusNumber,
                    adult: adult,
                    child: child,
                    student: student,
                    routeId: NewRouteId,
                    routeName: newRouteName,
                    time: time

                })
            }


        }
    }

    const createBus = (busNumber) => {

        const busId = busNumber;
        const seat1 = false;
        const seat2 = false;
        const seat3 = false;
        const seat4 = false;
        const seat5 = false;
        const seat6 = false;
        const seat7 = false;
        const seat8 = false;
        const seat9 = false;
        const seat10 = false;
        const seat11 = false;
        const seat12 = false;
        const seat13 = false;
        const seat14 = false;
        const seat15 = false;
        const seat16 = false;
        const seat17 = false;
        const seat18 = false;
        const seat19 = false;
        const seat20 = false;
        const seat21 = false;
        const seat22 = false;
        const seat23 = false;
        const seat24 = false;
        const seat25 = false;
        const seat26 = false;
        const seat27 = false;
        const seat28 = false;
        const seat29 = false;
        const seat30 = false;
        const seat31 = false;
        const seat32 = false;
        const seat33 = false;
        const seat34 = false;
        const seat35 = false;
        const seat36 = false;
        const seat37 = false;
        const seat38 = false;
        const seat39 = false;
        const seat40 = false;
        const seat41 = false;
        const seat42 = false;
        const seat43 = false;
        const seat44 = false;
        const seat45 = false;
        const seat46 = false;
        const seat47 = false;
        const seat48 = false;
        const seat49 = false;
        const seat50 = false;

        const newSeats = {
            busId,
            seat1,
            seat2,
            seat3,
            seat4,
            seat5,
            seat6,
            seat7,
            seat8,
            seat9,
            seat10,
            seat11,
            seat12,
            seat13,
            seat14,
            seat15,
            seat16,
            seat17,
            seat18,
            seat19,
            seat20,
            seat21,
            seat22,
            seat23,
            seat24,
            seat25,
            seat26,
            seat27,
            seat28,
            seat29,
            seat30,
            seat31,
            seat32,
            seat33,
            seat34,
            seat35,
            seat36,
            seat37,
            seat38,
            seat39,
            seat40,
            seat41,
            seat42,
            seat43,
            seat44,
            seat45,
            seat46,
            seat47,
            seat48,
            seat49,
            seat50,
        }

        axios.post("http://localhost:8000/seats/add", newSeats).then(() => {

        }).catch((err) => {
            alert(err)
        })
    }

    const getBookingdetails = (BusNumber) => {
        const busId = BusNumber;

        axios.get(`http://localhost:8000/seats/getseats/${busId}`).then((res) => {
            setSeats(res.data.seats[0])




        }).catch((err) => {

            alert("not available")


        })
    }

    const onclick = (id) => {
        console.log(time)
        //goToseats(id)
    }




    return (
        <div className="usr_background">
            <Header />
            <div className="booking-container-1">

                <div className="booking-container-2">
                    <div className="booking-container-left">
                        <div className="img-1">
                        </div>
                    </div>
                    <div className="booking-container-right">
                        <h1>ticket reservation</h1>
                        <hr className="gold-hr" />
                        <form className="booking-form">
                            {/* <div className="form-row">
                                <input type="radio" name="way-selection" id="oneway" value="one way" className="radio" onChange={() => setShow(false)} /> <label for="one-way">One way</label>
                                <input type="radio" name="way-selection" id="roundtrip" value="round trip" className="radio" onChange={() => setShow(true)} /> <label for="round-trip">Round Trip</label>
                                <hr />
                            </div> */}
                            <div className="form-row">
                                <label for="depature">Select Route</label>
                                <select id="depatureTime" className="form-input-2"
                                    onChange={(e) => {
                                        setShow(true);
                                        sendRoute(e.target.value);
                                    }}>
                                    <option selected >From</option>
                                    {routes.map((routes, index) => (
                                        <option key={index}>{routes.routeName}</option>


                                    ))}

                                </select>

                                {/* <label for="destination">Destination</label>
                                <select id="depatureTime" class="form-input-2"
                                    onChange={handleDepature}
                                >

                                    <option selected>Going To</option>
                                    {bFrom.map((bFrom, index) => (
                                        <option key={index}>{bFrom.to}</option>
                                    ))}
                                </select> */}


                                <hr />
                            </div>
                            {/* 
                            <div className="form-row">
                                <label for="depature">Depature Time</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    {routes.map((routes, index) => (
                                        <option key={index}>{routes.time}</option>


                                    ))}
                                </select>
                                <hr />
                            </div> */}
                            {/* 
                            {
                                show ? <div className="form-row">
                                    <label for="arrivalTime">Return Time</label>
                                    <select id="arrivalTime" class="form-input-2">
                                        <option selected>00.00</option>
                                        <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                    </select>
                                    <hr />
                                </div> : null
                            } */}



                            <div className="form-row">
                                <label for="Adult">Adult</label>
                                <select id="Adult" class="form-input-3"
                                    onChange={(e) => {
                                        setAdult(e.target.value)
                                    }}
                                >
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label for="Student">Student</label>
                                <select id="Student" class="form-input-3"
                                    onChange={(e) => {
                                        setChild(e.target.value)
                                    }}
                                >
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label for="Child">Child</label>
                                <select id="Child" class="form-input-3"
                                    onChange={(e) => {
                                        setStudent(e.target.value)
                                    }}
                                >
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <hr />

                            </div>
                            <div className="table_container">
                                {
                                    show ? <div >
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Route Name</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Book</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {route.map((route, index) => (
                                                    <tr >
                                                        <td>{route.Route}</td>
                                                        <td>{route.Time}</td>
                                                        <td>




                                                            <button type="button" class="btn btn-primary"
                                                                onClick={() => {
                                                                    setNewRouteId(route._id)
                                                                    setNewRouteName(route.Route)
                                                                    setTime(route.Time)
                                                                    setNewBusNumber(route.BusNumber)


                                                                }}
                                                            >
                                                                Seletct
                                                            </button>



                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div> : <h1>please select a route</h1>
                                }
                            </div>


                            {/* <div className="form-raw">
                                <div className="search-button">
                                    <Link to="/avilablebus">
                                        <button type="button" class="btn btn-primary"><i class="fas fa-search"></i>&nbsp;Seatch</button>
                                    </Link>
                                </div>
                            </div> */}
                        </form>
                    </div>
                        
                    {
                    show ?<div className="details">
                        <p>{NewRouteId}</p>
                        <p>{newRouteName}</p>
                        <p>{time}</p>


                        <button type="button" class="btn btn-primary"
                            onClick={() => {
                                goToseats(newBusNumber)
                                


                            }}
                        >
                            Seletct
                        </button>

                    </div>:null
}
                </div>

            </div>
        </div>
    )

}