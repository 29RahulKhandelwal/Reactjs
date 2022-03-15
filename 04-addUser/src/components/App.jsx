import React from "react";
import Input from "./Input";

export default function App(){
  return (
    <div>
      <Input name="Username " />
      <Input name="Age (in years) " />
      <button type="submit">Add User</button>
    </div>
  )
}