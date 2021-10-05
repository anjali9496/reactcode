import { React } from "react";
export const Table = (props) => {
    return (<div>
        <table id="students" className="table table-bordered ">
            <tbody>
                <tr>
                    {props.title}
                </tr>
                <tr>
                    <td>Action</td>
                    <td>S No.</td>
                    <td> Name</td>
                    <td>Date</td>
                    <td>ACtion Delete</td>
                </tr>
                {props.data.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                onClick={() => props.addComplete(item.taskName)} disabled={props.isDisable} checked={props.isChecked}
                            />
                        </td>
                        <td>{index + 1}</td>
                        <td>{item.taskName}</td>
                        <td>{item.date}</td>
                        <td>
                <svg
                  name={item.firstname}
                  onClick={props.deleteTask}
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
                </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};