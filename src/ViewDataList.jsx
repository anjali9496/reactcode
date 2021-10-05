import { React, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Table } from "./components/table";

export function ViewList(props) {
  const task = {
    taskName: "",
    date: "" 
  };
  const [user, setUser] = useState([]);
  const [toDoTask, setTask] = useState(task);
  const [toDoTaskView, setTaskView] = useState([]);
  const [toDoTaskCompleteView, setTaskCompleteView] = useState([]);
  const AddData = () => {debugger;
    props.history.push("./addForm3");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myData"));
    if (data) setUser(data);
    const data2 = JSON.parse(localStorage.getItem("myTask"));
    if (data2) setTaskView(data2);
    const data3 = JSON.parse(localStorage.getItem("myCompletask"));
    if (data3) setTaskCompleteView(data3);
  }, []);

  const deleteUser = (e) => {
    console.log("delete");
    //  First Solution
    const name = e.target.getAttribute("name");
    setUser(user.filter((user) => user.firstname !== name));
    const temp = user.filter((user) => user.firstname !== name);
    localStorage.setItem("myData", JSON.stringify(temp));

  };

  const editUser = (index) => {
    const data = JSON.parse(localStorage.getItem("myData"));
    if (data) {
      props.history.push({ pathname: "./addForm3", state: data[index] });
    }
  };

  const onChnageHandelTask = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const addTask = (e) => {
    debugger;
    let taskData = JSON.parse(localStorage.getItem("myTask"));
    let today = new Date();
    toDoTask.date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    if (taskData) {
      taskData.push(toDoTask);
      localStorage.setItem("myTask", JSON.stringify(taskData));
    } else {
      let dataArray = [];
      dataArray.push(toDoTask);
      localStorage.setItem("myTask", JSON.stringify(dataArray));
    }
    toDoTask.taskName = "";
    const temp = JSON.parse(localStorage.getItem("myTask"));
    setTaskView(temp);
  };

  const addComplete = (name) => {
    debugger;
    let temp = JSON.parse(localStorage.getItem("myTask"));
    if (temp) {
      debugger;
      let temp2 = temp.filter((temp) => temp.taskName !== name);
      setTaskView(temp2);
      localStorage.setItem("myTask", JSON.stringify(temp2));
      let completeTask = JSON.parse(localStorage.getItem("myCompletask"));
      temp = temp.filter((temp) => temp.taskName === name);
      let today = new Date();
      temp[0].date =
        today.getDate() +
        "-" +
        parseInt(today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      if (completeTask) {
        completeTask.push(temp[0]);
        localStorage.setItem("myCompletask", JSON.stringify(completeTask));
      } else {
        let dataArray = [];
        dataArray.push(temp[0]);
        localStorage.setItem("myCompletask", JSON.stringify(dataArray));
      }
      const myCompletask = JSON.parse(localStorage.getItem("myCompletask"));
      setTaskCompleteView(myCompletask);
    }
  };

  return (
    <div className="container">
    
   <hr />
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-2">
          <button className="btn btn-primary Addbutton" onClick={AddData}>
            Add Data
          </button>
        </div>
      </div>
      <h1 id="title">User Data</h1>
      <table id="students" className="table table-sm ">
        <tbody>
          <tr>
            <td>S No.</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>DOB</td>
            <td>email</td>
            <td>mobile</td>
            <td>Action</td>
          </tr>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
              <td>{item.mobileNumber}</td>
              <td>
                <svg
                  name={item.firstname}
                  onClick={deleteUser}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                <svg
                  onClick={() => editUser(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
