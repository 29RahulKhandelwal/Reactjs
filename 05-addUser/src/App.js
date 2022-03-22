import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  
  function addUserHandler(userName,userAge){
    setUsersList(prevUsers=>{
      return [
        ...prevUsers,
        {username:userName,age:userAge}
      ]
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
