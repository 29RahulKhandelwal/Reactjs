import React, { useState } from "react";

export default function App(){
  // const [userData,setUserData]=useState()


  return (
    <div>
      <form>
        <div>
          <label htmlFor="Username">Username </label>
          <input type="text"  id="Username" />
        </div>
        <div>
          <label htmlFor="Age">Age (in years) </label>
          <input type="text" id="Age" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}