import { Update } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./ProfileCSS/Userprofile.css";
import Popup from "./userpopup";
import { useSelector, useDispatch } from "react-redux";
import { logout, setimage, setid } from "../../actions/authAction";
import Header from "../header";
import Background from "../../img/profilepage_background.jpg"

//DELETE CUSTOMER
function DeleteCustomer({ id }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const deleteProfile = () => {
    axios
      .delete(`http://localhost:8000/customer/delete/${id}`)
      .then((req, res) => {
        dispatch(setid(null));
        history.push("/Login-Page");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const [btnlock, setBtnlock] = useState(false);
  console.log(btnlock);

  //Delete popup
  return (
    <div className="prof-delete-popup">
      <h6>Once deleted profile cannot be retrieved.</h6>
      <p>Are you sure you want to delete profile?</p>
      <input
       className="prof-delte-checkbox"
        onChange={() => setBtnlock(!btnlock)}
        value={btnlock}
        type="checkbox"
      >  
      </input>
      <button
        className="prof-delete-popup-btn"
        onClick={deleteProfile}
        disabled={!btnlock}
      >
        Confirm
      </button>
    </div>
  );
}

//UPDATE CUSTOMER
function UpdateCustomer({ customer, setOpenPopup }) {
  const [profile, setProfile] = useState(customer);

  const history = useHistory();

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    const { UserName, FirstName, LastName, Phone, Email, Password } = profile;

    const payload = {
      UserName,
      FirstName,
      LastName,
      Phone,
      Email,
      Password,
    };

    axios
      .put(`http://localhost:8000/customer/update/${customer._id}`, payload)
      .then((req, res) => {
        setOpenPopup(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  //UPDATE POPUP EKE PART EKAK
  return (
    <div className="profile-update-popup">
      <center>
      <table>
       <tr className="tabel-row-prof">
          <td >Username:</td>  
          <td>
            <input
              className="tabel-col-right"
              type="text"
              name="UserName"
              value={profile.UserName}
              placeholder="First Name"
              onChange={onChange}
            />
          </td>
        </tr>

        <tr className="tabel-row-prof">
          <td className="row-gap">First Name:</td>
          <td>
            <input
              className="tabel-col-right row-gap" 
              type="text"
              name="FirstName"
              value={profile.FirstName}
              placeholder="First Name"
              onChange={onChange}
            />
          </td>
        </tr>

        <tr className="tabel-row-prof">
          <td className="row-gap">Last Name:</td>
          <td>
            <input
              className="tabel-col-right row-gap"
              type="text"
              name="LastName"
              value={profile.LastName}
              placeholder="Last Name"
              onChange={onChange}
            />
          </td>
        </tr>

        <tr className="tabel-row-prof">
          <td className="row-gap">Phone:</td>
          <td>
            <input
              className="tabel-col-right row-gap"
              type="tel"
              name="Phone"
              value={profile.Phone}
              placeholder="Phone"
              onChange={onChange}
            />
          </td>
        </tr>

        <tr className="tabel-row-prof">
          <td className="row-gap">Email:</td>
          <td>
            <input
              className="tabel-col-right row-gap"
              type="email"
              name="Email"
              value={profile.Email}
              placeholder="Email"
              onChange={onChange}
            />
          </td>
        </tr>

        <tr className="tabel-row-prof">
          <td className="row-gap">Enter Password:</td>
          <td>
            <input
              className="tabel-col-right row-gap"
              type="text"
              name="Password"
              value={profile.Password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <button
        className="profile-update-popup-submitbtn"
        onClick={updateProfile}
      >
        Submit
      </button>
      </center>
    </div>
  );
}

///USER PROFILEEEE

export default function Userprofile() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [openPopup, setOpenPopup] = useState(false);

  const initialState = {
    _id: "",
    UserName: "",
    FirstName: "",
    LastName: "",
    Phone: null,
    Email: "",
    Password: "",
  };

  const [error, setError] = useState(false);

  const [profile, setProfile] = useState(initialState);

  //Retrieve id from login page
  //Meken thama id ganne
  const id = useSelector((state) => state.auth.id);

  const [isupdate, setisupdate] = useState(false);
  const [profilepic, setProfilepic] = useState(null);

  ///IMAEG HANDLER

  const [image, setImage] = useState(null);

  const imageHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    setImage(formData);

    console.log(formData, "ccccc");
  };

  //IMAGE UP BTN function

  const uploadImage = () => {
    axios
      .post(`http://localhost:8000/customer/image/${id}`, image, {
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
  };

  const [userPackage, setUserPackage] = useState();
  const[userBooking, setUserBooking] = useState();

  

  useEffect(() => {
    //GETTER FOR BOOKING
    axios
      .get(`http://localhost:8000/booking/${id}`)
      .then((response) => {
        setUserBooking(response?.data);
      })
      .catch((err) => {
        setError(true);
      });

    //Subscription Detail retriever
    axios
      .get(`http://localhost:8000/userpackage/${id}`)
      .then((response) => {
        setUserPackage(response?.data);
      })
      .catch((err) => {
        setError(true);
      });

    //Customer Details getter
    axios
      .get(`http://localhost:8000/customer/${id}`)
      .then((response) => {
        setProfile(response?.data?.customer);
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
        dispatch(setimage(data[1]));
      })
      .catch((err) => {});
  }, []);

  //LOGOUT
  const userlogout = () => {
    dispatch(logout());
    history.push("/");
  };

  if (error) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

  //REMOVE PACKAGE
  function remove_package(pID) {
    axios
      .delete(`http://localhost:8000/userpackage/delete/${pID}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  
  //REMOVE BOOKING
  function remove_booking(pID) {
    axios
      .delete(`http://localhost:8000/booking/delete/${pID}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }


  ///REAL PAGE WORK START FROM HERE
  return (
    <div className="extraout-container">
      <div className="outermost-container">
        <Header/>
        <img className="background-img" src={Background}/>
        <div className="outer-container">
          <div className="left-container">
          <button className="logout-btn" id="logout-btn" onClick={userlogout}>
                LOG OUT
              </button>
            <div className="profilepic-container">
              <center>
                {profilepic && (
                  <img
                    className="profilepicture"
                    src={`http://localhost:8000/${profilepic}`}
                    alt="img"
                  />
                )}
                <h1>{profile.UserName}</h1>
                <hr className="ultimate-hr"/>
              </center>
            </div>
            <div className="userinfo-container">
              <h4>First Name:</h4>
              <p style={{ fontSize: "18px" }}>{profile.FirstName}</p>
              <h4>Last Name:</h4>
              <p style={{ fontSize: "18px" }}>{profile.LastName}</p>
              <h4> Phone:</h4>
              <p style={{ fontSize: "18px" }}>{profile.Phone}</p>
              <h4>Email:</h4>
              <p style={{ fontSize: "18px" }}>{profile.Email}</p>
            </div>

            <div className="button-container">
              <div className="imageadd">
                {!profilepic && (
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple={false}
                    onChange={imageHandler}
                  />
                )}
                {!profilepic && (
                  <button
                    className="picAdd"
                    disabled={!image}
                    onClick={uploadImage}
                  >
                    UPLOAD IMAGE
                  </button>
                )}
              </div>

              <button
                className="delete-btn"
                onClick={() => {
                  setOpenPopup(true);
                  setisupdate(false);
                }}
              >
                DELETE PROFILE
              </button>

              <button
                className="update-btn"
                onClick={() => {
                  setOpenPopup(true);
                  setisupdate(true);
                }}
              >
                UPDATE PROFILE
              </button>

              <Popup
                openPopup={openPopup}
                title={isupdate ? "Update Profile Form" : "Delete Profile Form"}
                setOpenPopup={setOpenPopup}
              >
                {isupdate ? (
                  <UpdateCustomer
                    customer={profile}
                    setOpenPopup={setOpenPopup}
                  />
                ) : (
                  <DeleteCustomer id={id} />
                )}
              </Popup>
            </div>
          </div>

          {/*---------------------RIGHT SIDE-------------------------- */}
          <div className="right-container">
            <h2 className="subscription-view">Subscribed Packages</h2>
            <hr/>

            <table className="table table-prof">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subscription Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Validity</th>
                  <th scope="col">Action</th>
                </tr>

                {userPackage?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col">{index + 1}</td>
                      <td scope="col">{item.packageName}</td>
                      <td scope="col">{item.packageDesc}</td>
                      <td scope="col">{item.packageTime +" days"}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            remove_package(item._id);
                          }}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Unsubscribe
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </thead>
            </table>
            <br />
            <br />

            <h2 className="subscription-view2">Bookings</h2>
            <hr />
            <table className="table" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Booking id</th>
                  <th scope="col">Date</th>
                  <th scope="col">Seat No</th>
                  <th scope="col">Action</th>
                </tr>
                
               

                {userBooking?.map((item, index) => {
                  
                  return (
                    <tr key={index}>
                      <td scope="col">{index + 1}</td>
                      <td scope="col">{item[0].value}</td>
                      <th scope="col" style={{fontWeight:"200"}}>10-12-2021</th>
                      <td scope="col">{item.map((seat, i)=>{
                        if(i!==0){
                          console.log(seat.key);
                          return (`${seat.key} `);
                          
                        }
                      })}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            remove_booking(item[0].value);
                          }}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Remove Booking
                        </button>
                      </td>
                    </tr>
                  );
                })}

              </thead>
            </table>
            <br />
            <br />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
