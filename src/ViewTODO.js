import { React, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Table } from "./components/table";

export function ViewListToDo(props) {
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

    /* Second Solution
const temp = [...user];

    
     temp.splice(0, 1);
     setUser(temp);
     localStorage.setItem("myData", JSON.stringify(user));
  */
  };

  const editUser = (index) => {
    const data = JSON.parse(localStorage.getItem("myData"));
    if (data) {
      props.history.push({ pathname: "./addForm", state: data[index] });
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
      <div>
        <h5>TO DO </h5>
        <div className="row border">
          <div className="col-md-6">
            <input
              type="text"
              className="inputwidth"
              name="taskName"
              value={toDoTask.taskName}
              placeholder="Enter Task"
              onChange={onChnageHandelTask}
            />
          </div>
          <div className="col-md-6">
            <button className="btn btn-success" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>

        <Table
          data={toDoTaskView}
          addComplete={addComplete}
          title="To Do List"
        />
        <Table
          data={toDoTaskCompleteView}
          title="Completed"
          isDisable={true}
          isChecked={true}
        />
     
      </div>
      <hr /> <hr />
       </div>
  );
}
