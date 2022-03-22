import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

export default function AddUser(props){
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    

    // const [user,setUser]=useState({
    //     username:"",
    //     age:""
    // });
    const [error,setError]=useState();
    
    // function handleChange(event){
    //     const {name,value}=event.target;
    //     setUser(prevUser=>{
    //         return {
    //             ...prevUser,
    //             [name]:value
    //         }
    //     })
    // }
    
    function addUserHandler(event){
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title:"Invalid input",
                message:'Please enter a valid name and age.'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:"Invalid age",
                message:'Please enter a valid age greater than 0.'
            })
            return;
        }
        props.onAddUser(enteredName,enteredAge);
        // setUser({
        //     username:"",
        //     age:""
        // });
    }

    function errorHandler(){
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={errorHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    id="username"
                    // onChange={handleChange}
                    // name="username"
                    // value={user.username} 
                    ref={nameInputRef} />
                    <label htmlFor="age">Age (in years)</label>
                    <input 
                    type="number" 
                    id="age" 
                    // onChange={handleChange} 
                    // name="age" 
                    // value={user.age} 
                    ref={ageInputRef} />
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}