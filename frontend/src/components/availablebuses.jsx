import React from 'react'
import { Link } from 'react-router-dom'


export default function availablebuses() {
    return (
        <div>
            <div className="booking-container-1">
                <div className="booking-container-2">
                    <div className="booking-container-left">
                       <div className="abotSearch-container">
                            <value for="date" >Date</value><input type="text" value="[date DB]"/><br/><hr/>
                            <value for="date" >Time</value><input type="text" value="[Time db]"/><br/><hr/>
                            <value for="date" >Depature</value><input type="text" value="[Depature DB]"/><br/>  <hr/>  
                            <value for="date" >Destination</value><input type="text" value="Ddestinationgit s DB]"/><br/><hr/>
                       </div>
                
                    </div>
                    <div className="booking-container-right">
                        <h1>ticket reservation</h1>
                        <hr className="gold-hr"/>
                        <div className="available-bus-tbl">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Depature time</th>
                                    <th scope="col">Adult</th>
                                    <th scope="col">Child</th>
                                    <th scope="col">Student</th>
                                    <th scope="col">Remining seats /total seats</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Link to="/seats">
                                            <button type="button" class="btn btn-light"><p><font color="red">12</font>/52</p></button>
                                        </Link>
                                    </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                      
                    </div>
                </div>
            
            </div>
        </div>
    )
}
