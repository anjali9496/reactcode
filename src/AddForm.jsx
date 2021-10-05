import React, { useState } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export function AddForm(props) {
  debugger;
  let userDataObj = {};
  if (props.location.state === undefined)
    userDataObj = {
      id: "",
      firstname: "",
      lastname: "",
      dob: "",
      gender: "",
      email: "",
      mobileNumber: ""
    };
  else {
    userDataObj = props.location.state;
  }
  const [user, setUser] = useState(userDataObj);
  const onChnageHandel = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const addUSER = async (e) => {
    e.preventDefault();
    let userData = JSON.parse(await localStorage.getItem("myData"));

    if (userData) {
      if (props.location.state === undefined) {
        user.id = userData.length;
        userData.push(user);
        localStorage.setItem("myData", JSON.stringify(userData));
      } else {
        userData = userData.filter((userData) => userData.id !== user.id);
        userData.push(user);
        localStorage.setItem("myData", JSON.stringify(userData));
      }
    } else {
      user.id = 0;
      let dataArray = [];
      dataArray.push(user);
      localStorage.setItem("myData", JSON.stringify(dataArray));
    }
    props.history.push("/ViewList");
  };

  return (
    <form onSubmit={addUSER} className="AddFormload">
      <div className="row border">
        <div className="col-md-6">
          <input
            type="text"
            className="inputwidth"
            name="firstname"
            value={user.firstname}
            placeholder="Enter First Name"
            onChange={onChnageHandel}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputwidth"
            name="lastname"
            value={user.lastname}
            placeholder="Enter Last Name "
            onChange={onChnageHandel}
          />
        </div>
      </div>
      <div className="row border">
        <div className="col-md-6">
          <select
            className="inputwidth"
            name="gender"
            value={user.gender}
            onChange={onChnageHandel}>
            <option default>--Select--</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="date"
            className="inputwidth"
            name="dob"
            value={user.dob}
            onChange={onChnageHandel}
          />
        </div>
      </div>
      <div className="row border">
        <div className="col-md-6">
          <input
            type="email"
            className="inputwidth"
            name="email"
            value={user.email}
            onChange={onChnageHandel}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputwidth"
            name="mobileNumber"
            value={user.mobileNumber}
            onChange={onChnageHandel}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-9"></div>
        <div className="col-md-3">
          <button className="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
  );
}
