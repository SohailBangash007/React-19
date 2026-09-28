import React, { useState } from "react";

const AddUser = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const createUser = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({ firstName, lastName, age, email }),
    });
    response = await response.json();
    if(response){
        alert("New User Added")
    }
  };

  return (
    <div className="text-center items-center">
      <h1 className="mt-6 text-3xl font-bold">Add New User</h1>
      <div className="flex flex-col  justify-center items-center gap-y-6 mt-6">
        <input
          type="text"
           value={firstName}
          placeholder="Enter User First Name"
          className="p-2 border-2"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
         value={lastName}
          placeholder="Enter User  Last Name"
          className="p-2 border-2"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
           value={age}
          placeholder="User age"
          className="p-2 border-2"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="User Email"
          className="p-2 border-2"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className="p-2 border-2 bg-blue-400 text-black font-medium"
          onClick={createUser}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
