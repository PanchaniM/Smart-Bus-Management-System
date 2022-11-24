import React, { useState, useEffect } from "react";
import "./blocks.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Datetime from "../datetime";
import Calender from "../../../img/dashbord/calendar.png";
import Profilepics from "../../../img/dashbord/profilepics.jpeg";
import Welcomeimg from "../../../img/dashbord/welcomeimg.png";
import Block3 from "../../../img/dashbord/3rdblock.png";
import TinyBlock from '../features/tinyblocks'
import { useSelector } from 'react-redux';
import { Button } from "@material-ui/core";
import Popup from "../../popup";

function UpdateAdmin({admin,setOpenPopup}) {



  const [profile, setProfile] = useState(admin);
  const [profilepic, setProfilepic] = useState(null);
  const history = useHistory();

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
    ///IMAEG HANDLER

    const [image, setImage] = useState(null);

    const imageHandler = (event) => {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
  
      setImage(formData);
  
      console.log(formData, "ccccc");
    };

  //ADD PROFILE PICTURE
  const addprofilepic=()=>{
    axios
    .post(`http://localhost:8000/customer/image/${admin._id}`, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      setImage(null);
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const updateProfile = () => {
    const { Name, Password, Phone, Email, NIC, Type } = profile;

    const payload = {
      Name,
      Password,
      Phone,
      Email,
      NIC,
      Type,
    };
    //UPDATE ADMIN
    axios
      .put(`http://localhost:8000/admin/update/${admin._id}`, payload)
      .then((req, res) => {
        setOpenPopup(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <div className="col-md-12">
        <label htmlFor="nic" className="form-label">NIC :</label>
          
          <input
          className="form-control"
            type="text"
            name="UserName"
            value={profile.NIC}
            onChange={onChange}
          />
          </div>
          <div className="col-md-12">
        

          Enter Name:
          <input
          className="form-control"
            type="text"
            name="Name"
            value={profile.Name}
            onChange={onChange}
          />
          </div>
          <div className="col-md-12">
       
          Enter Phone:
          <input
          className="form-control"
            type="text"
            name="Phone"
            value={profile.Phone}
            onChange={onChange}
          />
          </div>
          <div className="col-md-12">
        
          Enter Type:
          <input
          className="form-control"
            type="text"
            name="Type"
            value={profile.Type}
            placeholder="Email"
            onChange={onChange}
          />
          </div>
          <div className="col-md-12">
        
        

          Enter Email:
          <input
          className="form-control"
            type="tel"
            name="Email"
            value={profile.Email}
            onChange={onChange}
          />
          </div>
          <div className="col-md-12">
          
          Enter Password:
          <input
          className="form-control"
            type="text"
            name="Password"
            value={profile.Password}
            placeholder="Enter Password"
            onChange={onChange}
          />
          </div>
          <br/>
          <div className="col-md-8">
        {!profilepic && (
          <input
          className="form-control "
          type="file"
          name="image"
          accept="image/*"
          multiple={false}
          onChange={imageHandler}
          />
          )}

      {!profilepic && (
        <div className="col-md-4">
        <button disabled={!image} className="button-upload upload form-control btn btn-warning" onClick={addprofilepic}>
          <i class="fas fa-upload"></i>
        </button>
        </div>
      )}
          <br/>
        </div>
      <button class="btn btn-primary" onClick={updateProfile}>Submit</button>
      </center>
    </div>
  );}

export default function Blocks() {
  const [profilepic, setProfilepic] = useState(null);
  const id = useSelector(state => state.auth.adminid)
  const [openPopup, setOpenPopup] = useState(false);

  const initialState = {
    _id:"",
    Name:"",
    Password:"",
    Phone:null,
    Email:"",
    NIC:null,
    Type:"",
  };

  const [adminprofile, setAdminProfile] = useState(initialState);
  const [error, setError] = useState(false);


  //GET
  useEffect(() => {
    axios
      .get(`http://localhost:8000/admin/${id}`)
      .then((response) => {
        setAdminProfile(response?.data?.admin);
      })
      .catch((err) => {
        setError(true);
      });

      //IMAGE
      axios
      .get(`http://localhost:8000/customer/image/${id}`)
      .then((response) => {
        const data = response?.data?.image?.image?.split("/");
        setProfilepic(data[1]);
      })
      .catch((err) => {});
  }, []);

  if (error) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

const updateprofile=()=>{
  setOpenPopup(true);
}

  return (
    <div>
      <div className="main-container">
        {/* <div className="nameDate-container">
          <div className="dashbord-name">
            <DashboardIcon className="dashbord-image" />
            Dashbord
          </div>
          <div className="dashbord-date">
            <img className="calendar" src={Calender} />
            <Datetime className="dt" />
          </div>
        </div> */}
        <div className="featured">
          <div className="featuredItems_component">

            {/* --------------------- card 1 ------------------- */}

            <div className="featuredItem">
              <center>

                <p className="personal-info">Personal Info</p>
                <hr />
                <span className="featuredTile">
                    {profilepic && (
                        <img className="profilepics" src={`http://localhost:8000/${profilepic}`} alt="img" />
                      )}
                </span>
                <div className="block1-container">
                  <div className="feature-profile">
                    <p className="header">Name:</p>
                    <p className="values">{adminprofile.Name}</p>
                  </div>
                  <div className="feature-profile">
                    <p className="header">Email:</p>
                    <p className="values">{adminprofile.Email}</p>
                  </div>
                  <div className="feature-profile">
                    <p className="header">Position:</p>
                    <p className="values">{adminprofile.Type}</p>
                  </div>

                <button class="btn btn-primary" onClick={updateprofile}>
                  Edit Profile
                </button>
                </div>

              </center>

            </div>
            {/* --------------------- card 1 ------------------- */}
            <div className="featuredItem">

              <center>
                <p className="personal-info">Welcome to BuzzyBus Admin Portal</p>
                <hr />
              </center>
              <div className="block2-container">
                <img src={Welcomeimg} className="welcome-img" />
              </div>
            </div>

            {/* --------------------- card 1 ------------------- */}

            <div className="featuredItem">
              <div className="block3-container">
                <img src={Block3} className="block3-img" />
              </div>
              <p className="block3-para">
                With a whole new experience and completely adaptable booking, your
                significant serenity begins the second you start dreaming
              </p>
            </div>
          </div>
          {/* <TinyBlock/> */}


          {/* <div className="featuredItem">
            <center>
              <p className="personal-info">Personal Info</p>
              <hr />
            </center>

            <span className="featuredTile">
              <img class="profilepics" src={Profilepics} />
            </span>
            <div className="block1-container">
              <div className="feature-profile">
                <p className="header">Name:</p>
                <p className="values">{adminprofile.Name}</p>
              </div>
              <div className="feature-profile">
                <p className="header">Email:</p>
                <p className="values">{adminprofile.Email}</p>
              </div>
              <div className="feature-profile">
                <p className="header">Position:</p>
                <p className="values">{adminprofile.Type}</p>
              </div>
            </div>
          </div>

          <div className="featuredItem">
            <center>
              <p className="personal-info">Welcome to BuzzyBus Admin Portal</p>
              <hr />
            </center>
            <div className="block2-container">
              <img src={Welcomeimg} className="welcome-img" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="block3-container">
              <img src={Block3} className="block3-img" />
            </div>
            <p className="block3-para">
              With a whole new experience and completely adaptable booking, your
              significant serenity begins the second you start dreaming
            </p>
          </div> */}
        </div>
        
      </div>
      <Popup
        openPopup={openPopup}
        title={"Delete Profile form"}
        setOpenPopup={setOpenPopup}
      >
          <UpdateAdmin admin={adminprofile} setOpenPopup={setOpenPopup} />
      </Popup>
    </div>
  );
}