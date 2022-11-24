import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Paybycard from './paybycard';
import { useSelector, useDispatch } from "react-redux";
import Paybypackage from './paybypackage'

export default function MainPayment() {

    const history = useHistory();
    const location = useLocation();
    const [schedule, setShedule] = useState("")
    const [route, setRoute] = useState("")



    const busNumber = location.state.BusNumber
    let adult = Number(location.state.adult)
    let child = Number(location.state.child)
    let student = Number(location.state.student)
    let routeId = location.state.routeId
    let routeName = location.state.routeName
    let time = location.state.time

    const totalPrice = (adult * 60) + (student * 30) + (child * 15)


    console.log(route)




    const [paymentMethod, setPaymentMethod] = useState(false);

    return (
        <div className="payment-background">
            <div className="payment-container">
                <div className="payment_headings">
                    <h1>PAYMENT</h1>
                </div>
                <div className="main-paymentblock">
                    <div className="choose">
                        <div className="head">
                            <p>- Choose your payment method -</p>
                        </div>
                        <div className="chooseside">

                            <div className="button">
                                <label class="switch">
                                    <input
                                        onChange={(e) => {
                                            let checked = e.target.checked;
                                            setPaymentMethod(checked);
                                        }}
                                        type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>

                        </div>

                    </div>

                    {/* left */}
                    <div className={paymentMethod ? "left" : "left checked"}>
                        <div className={paymentMethod ? "hide" : "show "}>
                            <Paybypackage />
                        </div>
                    </div>




                    {/* right */}
                    <div className={paymentMethod ? "right checked" : "right "}>
                        <div className={paymentMethod ? "show" : "hide "}>
                            <Paybycard
                                busNumber={busNumber}
                                routeId={routeId}
                                time={time}
                                adult = {adult}
                                child = {child}
                                student = {student}
                                routeName = {routeName}
                                totalPrice={totalPrice} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
