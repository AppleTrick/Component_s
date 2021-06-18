import React from "react";
import data from './data.json';

const UserDetail = ({match , history}) => {
    
    const {users} = data;
    console.log(users);

    const user = users.find((user) => user.id === match.params.id);
    return(
        <>
            <h2>User Detail</h2>
            <dt>id</dt>
            <dd>{user.id}</dd>
            <dt>name</dt>
            <dd>{user.name}</dd>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    );
}

export default UserDetail;