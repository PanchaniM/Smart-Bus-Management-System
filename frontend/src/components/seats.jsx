
import { React, useEffect, useState } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import { useSelector, useDispatch } from "react-redux";
import { Backdrop, Container } from '@material-ui/core';


export default function Seats() {

    const id = useSelector((state) => state.auth.id);

    const [bus, setBus] = useState({});

    const [seats, setSeats] = useState({});
    const [seatsStatus, setSeatsStatus] = useState("");
    const [disabled, setDisabled] = useState(false);

    const [seat01, setSeat1] = useState(false);
    const [seat02, setSeat2] = useState();
    const [seat03, setSeat3] = useState();
    const [seat04, setSeat4] = useState();
    const [seat05, setSeat5] = useState();
    const [seat06, setSeat6] = useState();
    const [seat07, setSeat7] = useState();
    const [seat08, setSeat8] = useState();
    const [seat09, setSeat9] = useState();
    const [seat010, setSeat10] = useState();
    const [seat011, setSeat11] = useState();
    const [seat012, setSeat12] = useState();
    const [seat013, setSeat13] = useState();
    const [seat014, setSeat14] = useState();
    const [seat015, setSeat15] = useState();
    const [seat016, setSeat16] = useState();
    const [seat017, setSeat17] = useState();
    const [seat018, setSeat18] = useState();
    const [seat019, setSeat19] = useState();
    const [seat020, setSeat20] = useState();
    const [seat021, setSeat21] = useState();
    const [seat022, setSeat22] = useState();
    const [seat023, setSeat23] = useState();
    const [seat024, setSeat24] = useState();
    const [seat025, setSeat25] = useState();
    const [seat026, setSeat26] = useState();
    const [seat027, setSeat27] = useState();
    const [seat028, setSeat28] = useState();
    const [seat029, setSeat29] = useState();
    const [seat030, setSeat30] = useState();
    const [seat031, setSeat31] = useState();
    const [seat032, setSeat32] = useState();
    const [seat033, setSeat33] = useState();
    const [seat034, setSeat34] = useState();
    const [seat035, setSeat35] = useState();
    const [seat036, setSeat36] = useState();
    const [seat037, setSeat37] = useState();
    const [seat038, setSeat38] = useState();
    const [seat039, setSeat39] = useState();
    const [seat040, setSeat40] = useState();
    const [seat041, setSeat41] = useState();
    const [seat042, setSeat42] = useState();
    const [seat043, setSeat43] = useState();
    const [seat044, setSeat44] = useState();
    const [seat045, setSeat45] = useState();
    const [seat046, setSeat46] = useState();
    const [seat047, setSeat47] = useState();
    const [seat048, setSeat48] = useState();
    const [seat049, setSeat49] = useState();
    const [seat050, setSeat50] = useState();

    const [bookS1, setBookS1] = useState()
    const [bookS2, setBookS2] = useState()
    const [bookS3, setBookS3] = useState()
    const [bookS4, setBookS4] = useState()
    const [bookS5, setBookS5] = useState()
    const [bookS6, setBookS6] = useState()
    const [bookS7, setBookS7] = useState()
    const [bookS8, setBookS8] = useState()
    const [bookS9, setBookS9] = useState()
    const [bookS10, setBookS10] = useState()
    const [bookS11, setBookS11] = useState()
    const [bookS12, setBookS12] = useState()
    const [bookS13, setBookS13] = useState()
    const [bookS14, setBookS14] = useState()
    const [bookS15, setBookS15] = useState()
    const [bookS16, setBookS16] = useState()
    const [bookS17, setBookS17] = useState()
    const [bookS18, setBookS18] = useState()
    const [bookS19, setBookS19] = useState()
    const [bookS20, setBookS20] = useState()
    const [bookS21, setBookS21] = useState()
    const [bookS22, setBookS22] = useState()
    const [bookS23, setBookS23] = useState()
    const [bookS24, setBookS24] = useState()
    const [bookS25, setBookS25] = useState()
    const [bookS26, setBookS26] = useState()
    const [bookS27, setBookS27] = useState()
    const [bookS28, setBookS28] = useState()
    const [bookS29, setBookS29] = useState()
    const [bookS30, setBookS30] = useState()
    const [bookS31, setBookS31] = useState()
    const [bookS32, setBookS32] = useState()
    const [bookS33, setBookS33] = useState()
    const [bookS34, setBookS34] = useState()
    const [bookS35, setBookS35] = useState()
    const [bookS36, setBookS36] = useState()
    const [bookS37, setBookS37] = useState()
    const [bookS38, setBookS38] = useState()
    const [bookS39, setBookS39] = useState()
    const [bookS40, setBookS40] = useState()
    const [bookS41, setBookS41] = useState()
    const [bookS42, setBookS42] = useState()
    const [bookS43, setBookS43] = useState()
    const [bookS44, setBookS44] = useState()
    const [bookS45, setBookS45] = useState()
    const [bookS46, setBookS46] = useState()
    const [bookS47, setBookS47] = useState()
    const [bookS48, setBookS48] = useState()
    const [bookS49, setBookS49] = useState()
    const [bookS50, setBookS50] = useState()



    const history = useHistory();
    const location = useLocation();



    const busNumber = location.state.BusNumber
    let adult = Number(location.state.adult)
    let child = Number(location.state.child)
    let student = Number(location.state.student)
    let routeId = location.state.routeId
    let routeName = location.state.routeName
    let time = location.state.time



    const totalPassengers = adult + child + student


    useEffect(() => {


        axios.get(`http://localhost:8000/seats/getseats/${busNumber}`).then((res) => {
            setSeats(res.data.seats[0])
            console.log("done")

            setSeat1(res.data.seats[0].seat1)
            setSeat2(res.data.seats[0].seat2)
            setSeat3(res.data.seats[0].seat3)
            setSeat4(res.data.seats[0].seat4)
            setSeat5(res.data.seats[0].seat5)
            setSeat6(res.data.seats[0].seat6)
            setSeat7(res.data.seats[0].seat7)
            setSeat8(res.data.seats[0].seat8)
            setSeat9(res.data.seats[0].seat9)
            setSeat10(res.data.seats[0].seat10)
            setSeat11(res.data.seats[0].seat11)
            setSeat12(res.data.seats[0].seat12)
            setSeat13(res.data.seats[0].seat13)
            setSeat14(res.data.seats[0].seat14)
            setSeat15(res.data.seats[0].seat15)
            setSeat16(res.data.seats[0].seat16)
            setSeat17(res.data.seats[0].seat17)
            setSeat18(res.data.seats[0].seat18)
            setSeat19(res.data.seats[0].seat19)
            setSeat20(res.data.seats[0].seat20)
            setSeat21(res.data.seats[0].seat21)
            setSeat22(res.data.seats[0].seat22)
            setSeat23(res.data.seats[0].seat23)
            setSeat24(res.data.seats[0].seat24)
            setSeat25(res.data.seats[0].seat25)
            setSeat26(res.data.seats[0].seat26)
            setSeat27(res.data.seats[0].seat27)
            setSeat28(res.data.seats[0].seat28)
            setSeat29(res.data.seats[0].seat29)
            setSeat30(res.data.seats[0].seat30)
            setSeat31(res.data.seats[0].seat31)
            setSeat32(res.data.seats[0].seat32)
            setSeat33(res.data.seats[0].seat33)
            setSeat34(res.data.seats[0].seat34)
            setSeat35(res.data.seats[0].seat34)
            setSeat36(res.data.seats[0].seat36)
            setSeat37(res.data.seats[0].seat37)
            setSeat38(res.data.seats[0].seat38)
            setSeat39(res.data.seats[0].seat39)
            setSeat40(res.data.seats[0].seat40)
            setSeat41(res.data.seats[0].seat41)
            setSeat42(res.data.seats[0].seat42)
            setSeat43(res.data.seats[0].seat43)
            setSeat44(res.data.seats[0].seat34)
            setSeat45(res.data.seats[0].seat45)
            setSeat46(res.data.seats[0].seat46)
            setSeat47(res.data.seats[0].seat47)
            setSeat48(res.data.seats[0].seat48)
            setSeat49(res.data.seats[0].seat49)
            setSeat50(res.data.seats[0].seat50)
            console.log("sets eats not null")
            setSeatsStatus(!null)


        }).catch((err) => {

            getSeats();
            setSeatsStatus(null)
            console.log("set seats null")
            setSeatsFalse()
        })


    }, [])



    const getSeats = () => {
        axios.get(`http://localhost:8000/seats/getseats/${busNumber}`).then((res) => {
            setSeats(res.data.seats[0])
            console.log("sets eats not null")
            setSeatsStatus(!null)


        }).catch((err) => {

            console.log("Seat error")

        })
    }


    const bookSeats = () => {


        const busId = busNumber;
        const seat1 = false;
        const seat2 = seat02;
        const seat3 = seat03;
        const seat4 = seat04;
        const seat5 = seat05;
        const seat6 = seat06;
        const seat7 = seat07;
        const seat8 = seat08;
        const seat9 = seat09;
        const seat10 = seat010;
        const seat11 = seat011;
        const seat12 = seat012;
        const seat13 = seat013;
        const seat14 = seat014;
        const seat15 = seat015;
        const seat16 = seat016;
        const seat17 = seat017;
        const seat18 = seat018;
        const seat19 = seat019;
        const seat20 = seat020;
        const seat21 = seat021;
        const seat22 = seat022;
        const seat23 = seat023;
        const seat24 = seat024;
        const seat25 = seat025;
        const seat26 = seat026;
        const seat27 = seat027;
        const seat28 = seat028;
        const seat29 = seat029;
        const seat30 = seat030;
        const seat31 = seat031;
        const seat32 = seat032;
        const seat33 = seat033;
        const seat34 = seat034;
        const seat35 = seat035;
        const seat36 = seat036;
        const seat37 = seat037;
        const seat38 = seat038;
        const seat39 = seat039;
        const seat40 = seat040;
        const seat41 = seat041;
        const seat42 = seat042;
        const seat43 = seat043;
        const seat44 = seat044;
        const seat45 = seat045;
        const seat46 = seat046;
        const seat47 = seat047;
        const seat48 = seat048;
        const seat49 = seat049;
        const seat50 = seat050;

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
            alert("Seats booked ")
            window.location.reload(false);
        }).catch((err) => {
            alert(err)
        })

    }




    const bookOrAdd = () => {
        if (seatsStatus == null) {
            console.log("Null seats")
            bookSeats()


        } else {
            console.log("already exisits",)
            //console.log(seats._id)

            updateSeats(seats._id)

        }
    }

    const setSeatsFalse = () => {
        setSeat1(false)
    }





    function updateSeats(id) {

        const busId = busNumber;
        const seat1 = seat01;
        const seat2 = seat02;
        const seat3 = seat03;
        const seat4 = seat04;
        const seat5 = seat05;
        const seat6 = seat06;
        const seat7 = seat07;
        const seat8 = seat08;
        const seat9 = seat09;
        const seat10 = seat010;
        const seat11 = seat011;
        const seat12 = seat012;
        const seat13 = seat013;
        const seat14 = seat014;
        const seat15 = seat015;
        const seat16 = seat016;
        const seat17 = seat017;
        const seat18 = seat018;
        const seat19 = seat019;
        const seat20 = seat020;
        const seat21 = seat021;
        const seat22 = seat022;
        const seat23 = seat023;
        const seat24 = seat024;
        const seat25 = seat025;
        const seat26 = seat026;
        const seat27 = seat027;
        const seat28 = seat028;
        const seat29 = seat029;
        const seat30 = seat030;
        const seat31 = seat031;
        const seat32 = seat032;
        const seat33 = seat033;
        const seat34 = seat034;
        const seat35 = seat035;
        const seat36 = seat036;
        const seat37 = seat037;
        const seat38 = seat038;
        const seat39 = seat039;
        const seat40 = seat040;
        const seat41 = seat041;
        const seat42 = seat042;
        const seat43 = seat043;
        const seat44 = seat044;
        const seat45 = seat045;
        const seat46 = seat046;
        const seat47 = seat047;
        const seat48 = seat048;
        const seat49 = seat049;
        const seat50 = seat050;

        const updateSeats = {
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

        axios.put(`http://localhost:8000/seats/update/${id}`, updateSeats).then(() => {
            alert("Seats booked ")
            window.location.reload(false);
            ;
            history.push("/payment", {
                BusNumber: busId ,
                adult: adult,
                child: child,
                student: student,
                busNumber : busNumber,
                routeId: routeId,
                time: time,
             
                
            })
        }).catch((err) => {
            alert(err)
        })
    }


    const [count, setCount] = useState(0)

    const increment = () => {
        if (count > (totalPassengers - 2)) {
            setDisabled(true)


        }
        setCount(count + 1)

    }


    const decrement = () => {
        setCount(count - 1)
    }


    const refresh = () => {
        window.location.reload(false);
    }


    const bookPassengerSeats = () => {

        const uId = id;
        const busId = busNumber;
        const seat1 = bookS1;
        const seat2 = bookS2;
        const seat3 = bookS3;
        const seat4 = bookS4;
        const seat5 = bookS5;
        const seat6 = bookS6;
        const seat7 = bookS7;
        const seat8 = bookS8;
        const seat9 = bookS9;
        const seat10 = bookS10;
        const seat11 = bookS11;
        const seat12 = bookS12;
        const seat13 = bookS13;
        const seat14 = bookS14;
        const seat15 = bookS15;
        const seat16 = bookS16;
        const seat17 = bookS17;
        const seat18 = bookS18;
        const seat19 = bookS19;
        const seat20 = bookS20;
        const seat21 = bookS21;
        const seat22 = bookS22;
        const seat23 = bookS23;
        const seat24 = bookS24;
        const seat25 = bookS25;
        const seat26 = bookS26;
        const seat27 = bookS27;
        const seat28 = bookS28;
        const seat29 = bookS29;
        const seat30 = bookS30;
        const seat31 = bookS31;
        const seat32 = bookS32;
        const seat33 = bookS33;
        const seat34 = bookS34;
        const seat35 = bookS35;
        const seat36 = bookS36;
        const seat37 = bookS37;
        const seat38 = bookS38;
        const seat39 = bookS39;
        const seat40 = bookS40;
        const seat41 = bookS41;
        const seat42 = bookS42;
        const seat43 = bookS43;
        const seat44 = bookS44;
        const seat45 = bookS45;
        const seat46 = bookS46;
        const seat47 = bookS47;
        const seat48 = bookS48;
        const seat49 = bookS49;
        const seat50 = bookS50;


        const newUserBooking = {
            uId,
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

        axios.post("http://localhost:8000/booking/add", newUserBooking).then(() => {
            window.location.reload(false);
        }).catch((err) => {
            alert("err")
        })
    }




    function push() {

    }



    return (
        <div className="usr_background">
            <Header />
            <div className="bookingdetails">
                <div>


    

                    <h1>{busNumber}</h1>
                    <h1>{routeName}</h1>
                    <h1>{time}</h1>
                    
                    <hr/>

                    <p>Count of Adults : &nbsp; &nbsp; &nbsp; &nbsp; {adult}</p>
                    <p>Count of Childs : &nbsp; &nbsp; &nbsp; &nbsp; {child}</p>
                    <p>Count of Students : &nbsp; &nbsp;{student}</p>
                    <hr/>
                    <p>Total passengers : &nbsp; &nbsp;&nbsp;&nbsp;{totalPassengers}</p>
                    <hr/>

                </div>
            </div>
            <div className="seat-container">
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        history.goBack()
                    }
                    }>

                    <i className="fas fa-backward"></i> Back to route selection</button>
                <h1>SELECT SEATS</h1>
                <hr />
                <form>
                    <div className="bus">

                        <div className="seat-rows">


                            {/* ====================== */}

                            <ul>


                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat1 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat1(checked);
                                            setBookS1(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" checked={seats.seat1 ? "checked" : null} disabled={disabled} className="seat occupied" /><i className={seats.seat1 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>


                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat2 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat2(checked);
                                            setBookS2(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat2 ? "checked" : null} className="seat occupied" /><i className={seats.seat2 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat3 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat3(checked);
                                            setBookS3(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat3 ? "checked" : null} className="seat occupied" /><i className={seats.seat3 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat4 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat4(checked);
                                            setBookS4(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat4 ? "checked" : null} className="seat occupied" /><i className={seats.seat4 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat5 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat5(checked);
                                            setBookS5(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat5 ? "checked" : null} className="seat occupied" /><i className={seats.seat5 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat6 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat6(checked);
                                            setBookS6(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat6 ? "checked" : null} className="seat occupied" /><i className={seats.seat6 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat7 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat7(checked);
                                            setBookS7(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat7 ? "checked" : null} className="seat occupied" /><i className={seats.seat7 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat8 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat8(checked);
                                            setBookS8(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat8 ? "checked" : null} className="seat occupied" /><i className={seats.seat8 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat9 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat9(checked);
                                            setBookS9(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat9 ? "checked" : null} className="seat occupied" /><i className={seats.seat9 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat10 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat10(checked);
                                            setBookS10(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat10 ? "checked" : null} className="seat occupied" /><i className={seats.seat10 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>

                            </ul>



                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat11 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat11(checked);
                                            setBookS11(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat11 ? "checked" : null} className="seat occupied" /><i className={seats.seat11 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat12 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat12(checked);
                                            setBookS12(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat12 ? "checked" : null} className="seat occupied" /><i className={seats.seat12 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat13 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat13(checked);
                                            setBookS13(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat13 ? "checked" : null} className="seat occupied" /><i className={seats.seat13 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat14 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat14(checked);
                                            setBookS14(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat14 ? "checked" : null} className="seat occupied" /><i className={seats.seat14 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat15 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat15(checked);
                                            setBookS15(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat15 ? "checked" : null} className="seat occupied" /><i className={seats.seat15 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat16 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat16(checked);
                                            setBookS16(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat16 ? "checked" : null} className="seat occupied" /><i className={seats.seat16 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat17 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat17(checked);
                                            setBookS17(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat17 ? "checked" : null} className="seat occupied" /><i className={seats.seat17 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat18 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat18(checked);
                                            setBookS18(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat18 ? "checked" : null} className="seat occupied" /><i className={seats.seat18 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat19 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat10(checked);
                                            setBookS19(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat19 ? "checked" : null} className="seat occupied" /><i className={seats.seat19 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat20 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat20(checked);
                                            setBookS20(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat20 ? "checked" : null} className="seat occupied" /><i className={seats.seat20 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>

                            </ul>


                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat21 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat21(checked);
                                            setBookS21(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat21 ? "checked" : null} className="seat occupied" /><i className={seats.seat21 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat22 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat22(checked);
                                            setBookS22(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat22 ? "checked" : null} className="seat occupied" /><i className={seats.seat22 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat23 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat23(checked);
                                            setBookS23(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat23 ? "checked" : null} className="seat occupied" /><i className={seats.seat23 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat24 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat24(checked);
                                            setBookS24(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat24 ? "checked" : null} className="seat occupied" /><i className={seats.seat24 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat25 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat25(checked);
                                            setBookS25(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat25 ? "checked" : null} className="seat occupied" /><i className={seats.seat25 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat26 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat26(checked);
                                            setBookS26(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat26 ? "checked" : null} className="seat occupied" /><i className={seats.seat26 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat27 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat27(checked);
                                            setBookS27(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat27 ? "checked" : null} className="seat occupied" /><i className={seats.seat27 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat28 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat28(checked);
                                            setBookS28(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat28 ? "checked" : null} className="seat occupied" /><i className={seats.seat28 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat29 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat29(checked);
                                            setBookS29(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat29 ? "checked" : null} className="seat occupied" /><i className={seats.seat29 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat30 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat30(checked);
                                            setBookS30(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat30 ? "checked" : null} className="seat occupied" /><i className={seats.seat30 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            <br />

                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat31 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat31(checked);
                                            setBookS31(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat31 ? "checked" : null} className="seat occupied" /><i className={seats.seat31 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat32 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat32(checked);
                                            setBookS32(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat32 ? "checked" : null} className="seat occupied" /><i className={seats.seat32 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat33 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat33(checked);
                                            setBookS33(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat33 ? "checked" : null} className="seat occupied" /><i className={seats.seat33 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat34 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat34(checked);
                                            setBookS34(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat34 ? "checked" : null} className="seat occupied" /><i className={seats.seat34 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat35 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat35(checked);
                                            setBookS35(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat35 ? "checked" : null} className="seat occupied" /><i className={seats.seat35 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat36 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat36(checked);
                                            setBookS36(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat36 ? "checked" : null} className="seat occupied" /><i className={seats.seat36 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat37 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat37(checked);
                                            setBookS37(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat37 ? "checked" : null} className="seat occupied" /><i className={seats.seat37 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat38 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat38(checked);
                                            setBookS38(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat38 ? "checked" : null} className="seat occupied" /><i className={seats.seat38 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat39 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat39(checked);
                                            setBookS39(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat39 ? "checked" : null} className="seat occupied" /><i className={seats.seat39 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat40 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat40(checked);
                                            setBookS40(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat40 ? "checked" : null} className="seat occupied" /><i className={seats.seat40 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>

                            </ul>

                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat41 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat41(checked);
                                            setBookS41(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat41 ? "checked" : null} className="seat occupied" /><i className={seats.seat41 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat42 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat42(checked);
                                            setBookS42(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat42 ? "checked" : null} className="seat occupied" /><i className={seats.seat42 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat43 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat43(checked);
                                            setBookS43(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat43 ? "checked" : null} className="seat occupied" /><i className={seats.seat43 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat44 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat44(checked);
                                            setBookS44(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat44 ? "checked" : null} className="seat occupied" /><i className={seats.seat44 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat45 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat45(checked);
                                            setBookS45(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat45 ? "checked" : null} className="seat occupied" /><i className={seats.seat45 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat46 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat46(checked);
                                            setBookS46(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat46 ? "checked" : null} className="seat occupied" /><i className={seats.seat46 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat47 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat47(checked);
                                            setBookS47(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat47 ? "checked" : null} className="seat occupied" /><i className={seats.seat47 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat48 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat48(checked);
                                            setBookS48(checked);
                                            checked ? increment() : decrement();
                                        }

                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat48 ? "checked" : null} className="seat occupied" /><i className={seats.seat48 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat49 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat49(checked);
                                            setBookS49(checked);
                                            checked ? increment() : decrement();
                                        }
                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat49 ? "checked" : null} className="seat occupied" /><i className={seats.seat49 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        if (seats.seat50 == true) {
                                            alert("you can't book this seat")
                                        } else {
                                            let checked = e.target.checked;
                                            setSeat50(checked);
                                            setBookS50(checked);
                                            checked ? increment() : decrement();
                                        }

                                    }}
                                    type="checkbox" disabled={disabled} checked={seats.seat50 ? "checked" : null} className="seat occupied" /><i className={seats.seat50 ? "i occupied fas fa-chair" : "i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>



                            </ul>

                        </div>
                    </div>
                </form>
                <div>
                    {disabled ? <font color="red "><p>You can't book more seats</p></font> : <p>You can book {totalPassengers - count} more seats</p>}
                </div>
                <div className="button">

                    <button onClick={() => {
                        bookOrAdd();
                        bookPassengerSeats();
                        push();
                    }} className="btn btn-success">Book my seats and continue</button>
                </div>
                <div className="button">
                    <button onClick={() => {
                        refresh();
                    }} className="btn btn-success"> Refresh </button>
                </div>
            </div>


        </div>
    )
}
