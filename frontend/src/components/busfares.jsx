import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'

import Header from './header'

import  BF1 from "../pdf/bf1.pdf"
import BF2 from "../pdf/bf2.pdf"
import  BF3 from "../pdf/bf4.pdf"
import BF4 from "../pdf/bf4.pdf"
import  BF5 from "../pdf/bf5.pdf"
import BF6 from "../pdf/bf6.pdf"
import  BF7 from "../pdf/bf7.pdf"
import BF8 from "../pdf/bf8.pdf"
import  BF9 from "../pdf/bf9.pdf"
import BF10 from "../pdf/bf10.pdf"
import  BF11 from "../pdf/bf11.pdf"




import React from 'react'



export default function Bfares() {

    return (
        
<div>
<Header/>
       <div style={{padding:"50px"}}>
         
           <h1>Bus Fares</h1>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>NAME</th>
      <th>PDF</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>CityBus Fare</td>
      <td><a href={BF1}> Sinhala</a></td>
      
    </tr>
    <tr>
      <td>1</td>
      <td>Paper Ad</td>
      <td><a href={BF2}> Sinhala</a> | <a href={BF3}>Tamil</a></td>
    </tr>

    <tr>
      <td>2</td>
      <td>Fare Stages</td>
      <td><a href={BF4}> Sinhala</a></td>
    </tr>

    <tr>
      <td>3</td>
      <td>Normal Bus Fare</td>
      <td><a href={BF5}> Sinhala</a></td>
    </tr>

    <tr>
      <td>4</td>
      <td>Semi Luxary Bus Fare</td>
      <td><a href={BF6}> Sinhala</a></td>
    </tr>

    <tr>
      <td>5</td>
      <td>Air-conditioned Bus Fare</td>
      <td><a href={BF7}> Sinhala</a></td>
    </tr>

    <tr>
      <td>6</td>
      <td>Super Luxary Bus Fare</td>
      <td><a href={BF8}> Sinhala</a></td>
    </tr>

    <tr>
      <td>7</td>
      <td>Bus Fare of Express Services</td>
      <td><a href={BF9}> Sinhala</a></td>
    </tr>

    <tr>
      <td>8</td>
      <td>Fare of Highway Bus Services with Fare Stages</td>
      <td><a href={BF10}> Sinhala</a></td>
    </tr>

    <tr>
      <td>9</td>
      <td>Sisu Seriya Fares</td>
      <td><a href={BF11}> Sinhala</a></td>
    </tr>

    

  </tbody>
</Table>
       </div>
       </div>
        

    )

}