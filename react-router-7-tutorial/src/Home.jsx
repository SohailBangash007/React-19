import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
  };
  return (
    <>
      <div className=" text-blue-700 font-bold">
        <h1 className="text-center text-4xl">This is Home Page</h1>
        <h1 className="text-center mt-6 text-2xl">Fetch Data with Api</h1>
      </div>
      <div>
        <ul className="flex justify-around border border-[#aaa] m-0 p-4">
          <li className="text-3xl font-bold"> First Name</li>
          <li className="text-3xl font-bold"> Last Name</li>
          <li className="text-3xl font-bold">Email</li>
        </ul>
        
          {
        userData && userData.map((user)=>(
        <ul className="flex justify-around border border-[#aaa] m-0 p-4 ">
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
        </ul>
        ))
      }
      </div>
    
    </>
  );
};

export default Home;
