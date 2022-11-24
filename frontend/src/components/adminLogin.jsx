import React, { useState } from "react";
import axios from "axios";
import logo from "../img/adminlogin/bus-blue.png";
import admincss from "../CSS/adminlogin.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setadminid } from "../actions/authAction";

export default function AdminLogin() {
  const history = useHistory();

  const dispatch = useDispatch();

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
      .post(`http://localhost:8000/admin/login`, payload)
      .then((response) => {
        console.log(response);
        dispatch(setadminid(response.data._id));
        history.push(`/dashbord`);
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
  };

  return (
    <div className="ad-log-outer-container">
      <div className="midbox">
        <div className="leftside">
          <img src={logo} />
        </div>
        <div class="vl"></div>
        <div className="rightside">
          <center>
          <h2>LOGIN AS ADMIN</h2>
          <hr/>
          </center>
          <div className="form">
          <div>
            <label for="email">Email</label>
            <br />
            <input
              id="email"
              name="email"
              className="textboxes-adminlog"
              placeholder="example@abcgmail.com"
              type="text"
              onChange={onChange}
            /><br/>

            <label for="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              className="textboxes-adminlog"
              placeholder="Enter your password..."
              type="password"
              onChange={onChange}
            />
            <br />
            <a href="#">Forgot password?</a>
            <input
              className="admin-loginbtn"
              onClick={submit}
              type="button"
              value="L O G I N"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
