import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function FinelPayment() {
    const history = useHistory();
    const location = useLocation();


    const busNumber = location.state.BusNumber
    let adult = Number(location.state.adult)
    let child = Number(location.state.child)
    let student = Number(location.state.student)
    let routeId = location.state.routeId
    let routeName = location.state.routeName
    let totPrice = location.state.totPrice
    let time = location.state.time

    const push = () =>{
        history.push("/Userprofile")
    }

    const generatePDF = () => {

      
      };

    return (
        <div className="payment-background">
            <div className="report-container">
                <h1>Bus Booked Successfully</h1>
                <hr />
                <p>Route name : {routeName}</p>
                <p>Bus Number : {busNumber}</p>
                <p>Time : {time}</p>
                <p>Total Pice : {totPrice}</p>
                <hr />
                <div className="buttoncomponrnt">
                    
                    <button  className="btn btn-primary" onClick={()=>{
                        push()
                    }}>go to profile</button>
                    
                    <button onClick={()=>{
                        generatePDF()
                    }} className="btn btn-warning">print report </button>
                </div>
            </div>


        </div>
    )
}
