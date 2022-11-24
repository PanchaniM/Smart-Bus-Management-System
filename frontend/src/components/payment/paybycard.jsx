import {React, useState}from 'react'
import axios from 'axios'
import { useLocation, useHistory, Link } from 'react-router-dom';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { FaApplePay } from 'react-icons/fa';
import { BsPaypal } from 'react-icons/bs';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaCcPaypal } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export default function Paybycard(props) {
    const [Name, setName] = useState("")
    const [CardNumbr, setcardNumber] = useState("")
    const [Expmonth, setExpMonth] = useState("")
    const [ExpYear, setExpYear] = useState("")
    const [cvv, setCvv] = useState("")


    const history = useHistory();
    const location = useLocation();

        const uId = props.busNumber;
        const totPrice = props.totalPrice
        const name = Name;
        const scheduleId = props.routeId;
        let adult = Number(location.state.adult)
        let child = Number(location.state.child)
        let student = Number(location.state.student)
        let time = location.state.time
        let routeName = location.state.routeName

    const payment = () =>{

        
        

         
        const cardNumber = CardNumbr;
        const expMonth = Expmonth;
        const expDate = ExpYear;
        const ccv = cvv;

        const newPayment ={
        
            
            uId,
            scheduleId,
            name,
            cardNumber,
            expMonth,
            expDate,
            ccv


        }
        
        axios.post("http://localhost:8000/cardpayment/add", newPayment).then(() => {
            alert("Your payment was sucessfull")
            history.push("/paymentreport", {
                uId : uId,
                scheduleId: scheduleId,
                expMonth: child,
                student: student,
                adult: adult,
                routeName: routeName,
                time: time,
                totPrice : totPrice

            })
        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div className="sub-payments">
            <div className="sub_payment_headings">
                <h1>PAYMENT</h1>
            </div>
            <div className="content">
                <div className="blue-bar">
                    <div className="icons">
                        <h1> <RiVisaFill /> </h1>
                        <h1> <FaCcMastercard /> </h1>
                        <h1> <SiAmericanexpress /> </h1>
                        <h1> <FaApplePay /> </h1>
                    </div>
                </div>



                <div className="form1">
                    <form action="">
                        <label htmlFor="name-on-card">
                            Name on card :
                        </label>
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }} type="text" />
                        <label htmlFor="name-on-card">
                            Card number :
                        </label>
                        <input
                            onChange={(e) => {
                                setcardNumber(e.target.value);
                            }} type="text" placeholder="0000 0000 0000 0000" />
                        <label htmlFor="name-on-card">
                            Expiration date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CCV/CDC
                        </label>
                        <br />
                        <input
                            onChange={(e) => {
                                setExpMonth(e.target.value);
                            }} className="subs" type="text" placeholder="mm" />
                        <input
                            onChange={(e) => {
                                setExpYear(e.target.value);
                            }} className="subs" type="text" placeholder="yy" />
                        <input
                            onChange={(e) => {
                                setCvv(e.target.value);
                            }} className="ccv" type="text" placeholder="****" />



                    </form>
                </div>

                <div className="payButton">
                    <Button variant="primary" 
                        onClick={() => {
                            payment();
                        }}
                    ><BsCashCoin /> Pay {props.totalPrice} LKR</Button>{' '}
                </div>
            </div>
        </div>
    )
}
