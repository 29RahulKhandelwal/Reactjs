import React from "react";

export default function AddUser(props){
    function addUserHandler(event){
        
        event.preventDefault();
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (in years)</label>
            <input type="number" id="age" />
            <button type="submit">Add User</button>
        </form>
    )
}