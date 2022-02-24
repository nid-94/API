import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

function UserList() {
    const [users, setusers] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        //first method with fetch
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((res) => setusers(res))
        //     .catch((err) => setError(err));
        //SEcond method with axios
        // axios
        //     .get("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => setusers(res.data))
        //     .catch((err) => setError(err));
            // third method with axios && try /catch
            // const fetchData=async()=>{
            //     try {
            //       const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
            //        setUsers(data)
            //     } catch (err) {
            //       setError(err)
            //     }
            //   }
            //   fetchData()
    }, []);

    console.log(users);

    return (
        <div>
            UserList
            {error ? <Spinner animation="grow" /> : users && users.map((el) => <h4>{el.name}</h4>)}
        </div>
    );
}

export default UserList;
