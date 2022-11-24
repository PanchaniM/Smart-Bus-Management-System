import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { createHashHistory } from "history";
import { useHistory, useParams, Redirect } from "react-router-dom";
import async from "async";

import "../CSS/App.css";

function Updatepackage(props) {
  const History = createHashHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [trips_count, setTripsCount] = useState("");
  const [time_period, setTimePeriod] = useState("");
  const [price, setPrice] = useState("");

  function editPackage(e) {
    e.preventDefault();

    const updatePackage = {
      name,
      description,
      trips_count,
      time_period,
      price,
    };

    axios
      .put(
        `http://localhost:8000/package/update/${props.match.params.id}`,
        updatePackage
      )
      .then((res) => {
        alert("Package Updated");
        this.setState({ redirect: "/home" });
      })
      .catch((err) => {
        alert(err);
      });
  }

  const [packageList, setPackage] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    trips_count: "",
    time_period: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/package/get/${props.match.params.id}`)
      .then((res) => {
        setData(res.data.package);

        console.log(name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" key="index">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="packageName" className="form-label" value="">
            Package Name
          </label>
          <input
            type="text"
            className="form-control"
            id="packageName"
            placeholder="Name"
            defaultValue={data.name}
            requird
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div className="input-group">
          <span className="input-group-text">Descrioprion</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            defaultValue={data.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripsCount" className="form-label">
            Trips Count
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter trips count"
            defaultValue={data.trips_count}
            onChange={(e) => {
              setTripsCount(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="timePeriod" className="form-label">
            Time Period
          </label>
          <input
            type="text"
            className="form-control"
            id="timePeriod"
            placeholder="Days"
            defaultValue={data.time_period}
            onChange={(e) => {
              setTimePeriod(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="LKR"
            defaultValue={data.price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary"
            href="/home"
            onClick={editPackage}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updatepackage;
