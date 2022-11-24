import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./ProfileCSS/Userreg.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authAction";
import Header from "../header";
import Background from "../../img/create-acc-back1.jpg"

export default function Adminregister() {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  };

  const [registerForm, setRegisterForm] = useState(initialState);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const[valierror,setValierror] = useState({
    email:"",
    phone:"",
    password:"",
  })

  const submit = () => {

    const payload = {
      UserName: registerForm.username,
      FirstName: registerForm.firstname,
      LastName: registerForm.lastname,
      Phone: registerForm.phone,
      Email: registerForm.email,
      Password: registerForm.password,
    };

    let sucess=true;

    if (!payload.Email?.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)){
      setValierror({...valierror,email:"incorrect email format"})
      sucess=false;
    }   
    if(!payload.Phone?.match(/^[0-9]{10}/)){
      setValierror({...valierror,phone:"incorrect number format"})
      sucess=false;
    }
    if(!payload.Password?.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/)){
      setValierror({...valierror,password:"incorrect. ex:1xxxxx"})
      sucess=false;
    }
    setTimeout(()=>{
      setValierror({   
      email:"",
      phone:"",
      password:""
      })
    },3000);

    if(sucess){
    if (registerForm.password === registerForm.password2) {
      axios
        .post(`http://localhost:8000/customer/add`, payload)
        .then(() => {
          dispatch(logout());
          history.push("/Login-Page");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setError("Password Missmatch");
      setTimeout(() => {
        setError("");
      }, 3000);
    }}
  };

  // const [isValid, setIsValid] = useState(false);
  // const [message, setMessage] = useState("");

  return (
    <div className="outer-block-acc-create">
      <Header/>
      <div className="mid-block">
        <div className="left-block">
          <div className="text-holder">
            <center>
              <h3>Welcome Back!</h3>
              <p>
                If you already have an account. To keep connected with us please
                login with your personal info
              </p>
              <Link to="./Login-Page">
              <button>SIGN IN</button>
              </Link>
            </center>
          </div>
        </div>

        {/* <div class="vl"></div> */}

        <div className="right-block">
          <center>
            <h3>CREATE ACCOUNT</h3>
            <hr />
            <table>
              <tr>
                <td>UserName :</td>
                <td>
                  <input
                    className="data-entries data-entries1"
                    type="text"
                    name="username"
                    placeholder="User Name"
                    onChange={onChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    className="data-entries"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={onChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Last Name:</td>
                <td>
                  <input
                    className="data-entries"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={onChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Enter Phone:</td>
                <td>
                  <input
                    className="data-entries"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    pattern="[0-9]{10}"
                    onChange={onChange}
                    required
                  />
                </td>
                
              </tr>
              {valierror.phone&&<tr><td><p>{valierror.phone}</p></td></tr>}

              <tr>
                <td>Enter Email:</td>
                <td>
                  <input
                    className="data-entries"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    required
                  />
                </td>     
              </tr>
              {valierror.email&&<tr><p>{valierror.email}</p></tr>}

              <tr>
                <td>Enter Password:</td>
                <td>
                  <input
                    className="data-entries"
                    id="myInput"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={onChange}
                    required
                  />
                </td>
              </tr>
              {valierror.password&&<tr><p>{valierror.password}</p></tr>}
              <tr>
                <td>Enter Password:</td>
                <td>
                  <input
                    className="data-entries"
                    type="password"
                    name="password2"
                    placeholder="Re Enter Password"
                    onChange={onChange}
                    required
                  />
                  <p style={{ color: "red" }}>{error}</p>
                </td>
              </tr>
            </table>
            <center>
              <button onClick={submit}>SIGN UP</button>
            </center>
          </center>
        </div>
      </div>
    </div>
  );
}

// <div className="usr_backgound">
//       <div className="outer-container">
//         <Header />
//         <div className="form-container">
//           <div className="form">
//             <center>
//               <h3>Passenger Registration Form</h3>
//             </center>
//             <hr />
//             <label className="Qheader">Username:</label>
//             <input
//               className="entries"
//               type="text"
//               name="username"
//               placeholder="First Name"
//               onChange={onChange}
//             />

//             <br />
//             <label className="Qheader">First Name:</label>
//             <input
//               className="entries"
//               type="text"
//               name="firstname"
//               placeholder="First Name"
//               onChange={onChange}
//             />

//             <br />
//             <label className="Qheader">Last Name:</label>
//             <input
//               className="entries"
//               type="text"
//               name="lastname"
//               placeholder="Last Name"
//               onChange={onChange}
//             />

//             <br />
//             <label className="Qheader">Enter Phone:</label>
//             <input
//               className="entries"
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               pattern="[0-9]{10}"
//               onChange={onChange}
//             />

//             <br />
//             <label className="Qheader">Enter Email:</label>
//             <input
//               className="entries"
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={onChange}
//               onClick={ validateEmail}
//               required
//             />
//             <div style={{color:"red"}} className={`message ${isValid ? 'success' : 'error'}`}>
//         {message}
//       </div>

//             <br />
//             <label className="Qheader">Enter Password:</label>
//             <input
//               className="entries"
//               type="text"
//               name="password"
//               placeholder="Enter Password"
//               onChange={onChange}
//             />

//             <br />
//             <label className="Qheader">Confirm Password:</label>
//             <input
//               className="entries"
//               type="text"
//               name="password2"
//               placeholder="Re Enter Password"
//               onChange={onChange}
//             />
//             <p style={{ color: "red" }}>{error}</p>

//             <center>
//             <button id="pattaneh" className="submitbtn" onClick={submit}>R E G I S T E R</button>
//             </center>
//           </div>
//         </div>
//       </div>
//     </div>
