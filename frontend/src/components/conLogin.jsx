import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../CSS/conLogin.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header"
import { setconductorid } from "../actions/authAction";


export default function UserLogin() {
  const dispatch = useDispatch();

  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialValues);

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const payload = {
      Email: loginForm.email,
      Password: loginForm.password,
    };

    console.log(payload);
    axios
      .post(`http://localhost:8000/employee/login`, payload)
      .then((response) => {
        dispatch(setconductorid(response.data._id));
        console.log(response);
        history.push(`/conDash`);
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
  };

  return (
    <center>
    <div>
      <div className="usr_backgound">
        <Header/>
        <div className="inner-container">
          <div className="form">
            <div className="header">
              <h2>WELCOME CONDUCTOR</h2>
              <hr className="linebar"/>
            </div>
            <br/>
            <br/>
            <label className="classheader" for="email">
              Enter Email:
            </label>
            <br />
            <input
              className="classanswer"
              type="text"
              name="email"
              placeholder="jhonedoe@gmial.com"
              onChange={onChange}
            />
            <br />
            <br />
            <label className="classheader" for="password">
              Enter Password:
            </label>
            <br />
            <input
              className="classanswer"
              type="text"
              name="password"
              placeholder="X X X X X X"
              onChange={onChange}
            />

            <br />
            <p className="Forgotp"><a href="#">Forget Password?</a></p>
            
            <button className="submitbtn" 
            onClick={submit}
            >
              L O G I N
            </button>
           
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}
