import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

   const url = "http://localhost:3000/users/"+id;

  useEffect(() => {
    getEditUser();
  }, []);

  const getEditUser = async () => {
   
    let response = await fetch(url);
    response = await response.json();

    setFirstName(response.firstName);
    setLastName(response.lastName);
    setAge(response.age);
    setEmail(response.email);
  };
  const UpdateUserData=async()=>{
   
    let response = await fetch(url,{
      method:"PUT",
     body:JSON.stringify({firstName,lastName,age,email})
    });
    response = await response.json();
    if(response){
      alert("Update  The User Data");
      navigate("/about");
    }
  }

  return (
    <>
      <div className="text-center items-center">
        <h1 className="mt-6 text-3xl font-bold">Edit User Details</h1>
        <div className="flex flex-col  justify-center items-center gap-y-4 mt-6">
          <input
            type="text"
            value={firstName}
            placeholder="Enter User First Name"
            className="px-6 py-2 border rounded-xl"
            onChange={(event)=>setFirstName(event.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Enter User  Last Name"
            className="px-6 py-2 border rounded-xl"
              onChange={(event)=>setLastName(event.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="User Age"
            className="px-6 py-2 border rounded-xl"
              onChange={(event)=>setAge(event.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="User Email"
            className="px-6 py-2 border rounded-xl"
              onChange={(event)=>setEmail(event.target.value)}
          />
          <button className="px-6 py-2 border rounded-xl bg-emerald-500 text-black font-medium text-xl"
          onClick={UpdateUserData}
          >
            Edit User Detail
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
