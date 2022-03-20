import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(props){
    const [user,setUser]=useState({
        username:"",
        age:""
    });

    function handleChange(event){
        const {name,value}=event.target;
        setUser(prevUser=>{
            return {
                ...prevUser,
                [name]:value
            }
        })
    }

    function addUserHandler(event){
        console.log(user);
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={handleChange} name="username" value={user.username} />
                <label htmlFor="age">Age (in years)</label>
                <input type="number" id="age" onChange={handleChange} name="age" value={user.age} />
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
}