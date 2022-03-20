import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  
  function addUserHandler(user){
    setUsersList(prevUsers=>{
      return [
        ...prevUsers,
        user
      ]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
