import { useEffect, useState } from "react";


export default function HookCheck() {
    let data = {
        username : "",
        lastname : ""
    }
    const [user , setUser] = useState(data);
    const userSunbmit = () => {
        debugger;
        alert("username" + user.username);
    }


    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name] : value
        })
        );
    }


    return (
        <>
        username : {user.username}
        <form onSubmit={userSunbmit}>
            <input type="text" placeholder="enter name"  name= "username" value={user.username} onChange={onHandleChange}/>
            <input type="text" placeholder="enter name" name= "lastname" value={user.lastname} onChange={onHandleChange}/>
            <button>Submit</button>
            </form>
            </>
    )

}