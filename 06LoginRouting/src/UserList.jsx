import React from "react";
import {Link} from "react-router-dom";
import data from "./data.json";

const UserList = ({match}) => {

    const {users} = data;
    console.log(users);

    return(
        <>
            <h2>UserList</h2>
            <ul>
                {users.map( ({id, name}) => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;