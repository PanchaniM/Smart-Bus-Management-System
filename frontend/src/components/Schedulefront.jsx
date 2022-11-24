import { Link } from 'react-router-dom'
import Header from './header'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
//Import the main component
import  PDF1 from "../pdf/pdf1.pdf"
import PDF2 from "../pdf/pdf2.pdf"
import  PDF4 from "../pdf/pdf4.pdf"
import PDF5 from "../pdf/pdf5.pdf"
import  PDF6 from "../pdf/pdf6.pdf"
import PDF7 from "../pdf/pdf7.pdf"
import  PDF8 from "../pdf/pdf8.pdf"
import PDF10 from "../pdf/pdf9.pdf"

import Busfairs from "./busfares"

import React from 'react';






export default function Schedulefront() {

    return (

        



        

        

<div>

<Header/>
<form action="https://www.google.com/maps/dir/Kandy+Bus+Stand+(%E0%B6%B8%E0%B7%84%E0%B6%B1%E0%B7%94%E0%B7%80%E0%B6%BB+%E0%B6%B6%E0%B7%83%E0%B7%8A+%E0%B6%B1%E0%B7%90%E0%B7%80%E0%B6%AD%E0%B7%94%E0%B6%B8%E0%B7%8A%E0%B6%B4%E0%B7%9C%E0%B7%85+),+Kandy/Fort,+Colombo/@7.1202492,80.3659598,9.63z/data=!4m14!4m13!1m5!1m1!1s0x3ae36970c5a5a31f:0xd6e19563d79cbf59!2m2!1d80.6310872!2d7.2898251!1m5!1m1!1s0x3ae259215509991f:0xc20babe3d8e8795e!2m2!1d79.8450497!2d6.9360701!3e3?hl=en"><input type="submit" value="View Schedules" /></form>  
<Link to="/busfares">
<button style={{position:"relative", float:"left", right:"0"}}>Bus Fares</button>
</Link>
<div style={{padding:"50px"}}>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ROUTE NUMBER</th>
      <th>ROUTE NAME</th>
      <th>PDF</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>C001 [CityBus]</td>
      <td>Makubura-Pettah [Via Nugegoda,lakeHouse]</td>
      <td><a href={PDF1}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>C002 [CityBus]</td>
      <td>	Makubura - Bambalapitiya [Via Narahenpita,Kollupitiya]</td>
      <td><a href={PDF2}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Colombo-Kandy(A/C)</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>01-1</td>
      <td>Colombo-Kegalle</td>
      <td><a href={PDF4}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>01-2</td>
      <td>Colombo-Mawanella</td>
      <td><a href={PDF5}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Colombo-Mathara</td>
      <td><a href={PDF6}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>02-1</td>
      <td>Colombo-Galle</td>
      <td><a href={PDF7}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>02-3</td>
      <td>Colombo-Ambalangoda(Normal)</td>
      <td><a href={PDF8}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>4-9</td>
      <td>Colombo-Anamaduwa(A/C)</td>
      <td><a href={PDF10}> Sinhala</a> | Tamil | English</td>
    </tr>
    <tr>
      <td>4-11</td>
      <td>Colombo-Chilaw</td>
      <td> Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>05</td>
      <td>Colombo-Kurunegala</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>15-1,15-1-1</td>
      <td>Colombo-Anuradhapura</td>
      <td>Sinhala | Tamil | Englishr</td>
    </tr>
    <tr>
      <td>15-7</td>
      <td>Colombo-Vavuniya</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>15-87</td>
      <td>Colombo-Jaffna</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Panadura-Kandy</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Colombo-Gampola</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>22-2</td>
      <td>Kandy-Ampara</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Colombo-Kataragama</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>35-3</td>
      <td>Mathara-Monaragala</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>43-857</td>
      <td>Kandy-Vavuniya</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Colombo-Trincomale</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>57</td>
      <td>Colombo-Anuradhapura</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>87-2</td>
      <td>Colombo-Vavuniaya</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>98</td>
      <td>Colombo - Balangoda,Badalkubura</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>218-2</td>
      <td>Kaduruwela - Mahiyanganaya</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Elpitiya - Colombo</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>602</td>
      <td>Kandy - Kurunegala</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>662</td>
      <td>Kandy - Kegalle</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>662-1</td>
      <td>Kandy - Mawanella</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX-1-1</td>
      <td>Makubura - Matara</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1</td>
      <td>Makubura - Galle</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-2</td>
      <td>Kaduwela - Matara</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-23</td>
      <td>Kaduwela - Galle</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-22</td>
      <td>Kadawatha - Mathara</td>
      <td>Sinhala | Tamil | English</td>
    </tr> <tr>
      <td>EX 1-21</td>
      <td>Kadawatha - Galle</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-18</td>
      <td>Colombo - Mathara</td>
      <td>Sinhala | Tamil | English</td>
    </tr> <tr>
      <td>EX 1-25/450</td>
      <td>Panadura - Mathara</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-16</td>
      <td>Elpitiya - Colombo</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX 1-18</td>
      <td>Matara - Moratuwa</td>
      <td>Sinhala | Tamil | English</td>
    </tr>
    <tr>
      <td>EX-01/27/01, EX-1-33/270</td>
      <td>Galle- Kandy/Negombo [Via Kadawatha]</td>
      <td>Sinhala | Tamil | English</td>
    </tr>



  </tbody>
</Table>
</div>

</div>

        

    )

}