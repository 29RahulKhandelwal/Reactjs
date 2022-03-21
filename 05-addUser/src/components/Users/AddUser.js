import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export default function AddUser(props){
    const [user,setUser]=useState({
        username:"",
        age:""
    });
    const [error,setError]=useState();
    
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
        if(user.username.trim().length === 0 || user.age.trim().length === 0 ){
            setError({
                title:"Invalid input",
                message:'Please enter a valid name and age.'
            })
            return;
        }
        if(+user.age < 1){
            setError({
                title:"Invalid age",
                message:'Please enter a valid age greater than 0.'
            })
            return;
        }
        props.onAddUser(user);
        setUser({
            username:"",
            age:""
        });
        event.preventDefault();
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={handleChange} name="username" value={user.username} />
                    <label htmlFor="age">Age (in years)</label>
                    <input type="number" id="age" onChange={handleChange} name="age" value={user.age} />
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}