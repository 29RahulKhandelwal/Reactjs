import React from "react";

export default function Input(props){
    return (
        <div>
            <div>
            <label htmlFor="input">{props.name}</label>
            <input type="text" name="input" id="input" />
            </div>
        </div>
    )
}