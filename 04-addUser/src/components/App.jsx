import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function App(){
  return (
    <div>
      <Input name="Username" />
      <Input name="Age (Years)" />
      <Button btnName="Add User" />
    </div>
  )
}