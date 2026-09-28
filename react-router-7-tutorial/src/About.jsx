import React, { useEffect, useState } from "react";

const About = () => {

  const [UserDetails, setUserDetails]=useState([]);
  const [Loading, setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    getUserData();
  },[])

 const getUserData = async()=>{
  const url=("http://localhost:3000/user");
  let response= await fetch(url);
  response = await response.json();
  setUserDetails(response);
  setLoading(false)
 }

  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold"> This is About page</h1>
        <h1 className="text-center text-3xl font-semibold mt-10">Integrate Jason Server Api and Louder</h1>
      </div>

      <div className="items-center text-center">
          <ul className="flex justify-around border border-[#aaa]  p-4 mt-12">
          <li className="text-3xl font-bold"> First Name</li>
          <li className="text-3xl font-bold"> Last Name</li>
          <li className="text-3xl font-bold">Age</li>
          <li className="text-3xl font-bold">Email</li>
        </ul>
        {
          !Loading?
          UserDetails.map((user,index)=>(
          <ul className="flex justify-around border border-[#aaa]  p-4 text-center items-center " key={index}>
            <li className="text-center items-center">{user.Firstname}</li>
            <li className="text-center items-center">{user.Lastname}</li>
            <li className="text-center items-center">{user.age}</li>
            <li className="text-center items-center">{user.email}</li>
          </ul>
          )) 
          : <h1 className="text-3xl font-bold mt-6">Data Loading.....</h1>
        }
      </div>
    </>
  );
};

export default About;
