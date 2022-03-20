import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(props){
    function addUserHandler(event){
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age (in years)</label>
                <input type="number" id="age" />
                <Button type="submit" onClick={AddUser}>Add User</Button>
            </form>
        </Card>
    )
}