import React, { Activity, useEffect, useState } from "react";
import Cards from "./Cards";
import ActivityReact from "./ActivityReact";

const Home = () => {
  const [show, setShow] = useState(true);
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

  const DeleteUser = async (id) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("Deleted The User Id ");
      getUserData();
    }
  };

  return (
    <>
      <div className="text-teal-800 font-bold pt-6">
        <h1 className="text-center text-3xl sm:text-4xl">This is Home Page</h1>
        <h1 className="text-center mt-4 text-xl sm:text-2xl text-teal-600">
          Fetch Data with Api
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-10 px-3 sm:px-6">
        {/* Header row — hidden below md, shown as a table header from md up */}
        <ul className="hidden md:flex justify-around bg-teal-800 text-white rounded-t-lg m-0 p-4 shadow-md">
          <li className="flex-1 text-center text-xl font-bold">First Name</li>
          <li className="flex-1 text-center text-xl font-bold">Last Name</li>
          <li className="flex-1 text-center text-xl font-bold">Email</li>
          <li className="flex-1 text-center text-xl font-bold">Delete</li>
        </ul>

        <div className="flex flex-col gap-3 md:gap-0 mt-4 md:mt-0">
          {userData &&
            userData.map((user) => (
              <ul
                key={user.id}
                className="flex flex-col md:flex-row justify-around items-center
                           bg-white even:bg-teal-50 border border-teal-100
                           md:border-t-0 md:border-x-0 md:border-b
                           rounded-lg md:rounded-none
                           p-4 gap-1 md:gap-0
                           shadow-sm md:shadow-none
                           hover:bg-teal-50 transition-colors duration-150
                           last:md:rounded-b-lg"
              >
                <li className="flex-1 w-full md:w-auto text-center text-teal-900 font-medium">
                  <span className="md:hidden text-teal-500 font-semibold mr-2">
                    Name:
                  </span>
                  {user.name}
                </li>
                <li className="flex-1 w-full md:w-auto text-center text-teal-900 font-medium">
                  <span className="md:hidden text-teal-500 font-semibold mr-2">
                    Username:
                  </span>
                  {user.username}
                </li>
                <li className="flex-1 w-full md:w-auto text-center text-teal-700 break-all">
                  <span className="md:hidden text-teal-500 font-semibold mr-2">
                    Email:
                  </span>
                  {user.email}
                </li>
                <li className="flex-1 w-full md:w-auto text-center mt-2 md:mt-0">
                  <button
                    className="border border-red-300 bg-red-100 text-red-700 hover:bg-red-500 hover:text-white
                               px-5 py-1.5 rounded-lg font-semibold shadow-sm transition-colors duration-200"
                    onClick={() => DeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-8 py-2  bg-emerald-200 border"
          onClick={() => setShow(true)}
        >
          Cards
        </button>
        <button
          className="px-8 py-2  bg-emerald-200 border"
          onClick={() => setShow(false)}
        >
          Form
        </button>
      </div>
      <Activity mode={show==true? "visible":"hidden"}>
         <Cards />
      </Activity>
      <Activity mode={show==false? "visible":"hidden"}>
         <ActivityReact />
      </Activity>
      
    </>
  );
};

export default Home;
