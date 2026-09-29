import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const About = () => {
  const [UserDetails, setUserDetails] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserDetails(response);
    setLoading(false);
  };

  const EditUser =(id)=>{
    navigate("/edit/"+id)
  }
  const DeleteData = async (id) => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url+"/"+id,{
      method:"delete"
    });
    response = await response.json();
    if (response) {
      alert("User Id was Deleted");
      getUserData();
    }
    
  };

  return (
    <>
      <div>
        <h1 className="text-center text-3xl sm:text-4xl font-bold mt-6 text-slate-800">
          This is About page
        </h1>
        <h1 className="text-center text-xl sm:text-3xl font-semibold mt-4 sm:mt-10 text-slate-500">
          Integrate Jason Server Api and Louder
        </h1>
      </div>

      <div className="items-center text-center px-2 sm:px-6 mt-8 max-w-6xl mx-auto">
        {/* Header row — hidden on mobile, shown from md up */}
        <ul className="hidden md:flex justify-around items-center bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-xl p-4 shadow-lg">
          <li className="flex-1 text-lg font-bold tracking-wide">First Name</li>
          <li className="flex-1 text-lg font-bold tracking-wide">Last Name</li>
          <li className="flex-1 text-lg font-bold tracking-wide">Age</li>
          <li className="flex-1 text-lg font-bold tracking-wide">Email</li>
          <li className="flex-1 text-lg font-bold tracking-wide">Action</li>
          <li className="flex-1 text-lg font-bold tracking-wide">Edit User</li>
        </ul>

        {!Loading ? (
          <div className="flex flex-col gap-3 md:gap-0 mt-4 md:mt-0">
            {UserDetails.map((user, index) => (
              <ul
                className="flex flex-col md:flex-row justify-around items-center md:items-center
                           bg-white even:bg-slate-50 border border-slate-200
                           md:border-t-0 md:border-x-0 md:border-b
                           rounded-xl md:rounded-none
                           p-4 gap-2 md:gap-0
                           shadow-sm md:shadow-none
                           hover:bg-blue-50 transition-colors duration-200
                           last:md:rounded-b-xl"
                key={index}
              >
                <li className="flex-1 w-full md:w-auto text-center text-slate-700 font-medium">
                  <span className="md:hidden font-bold text-slate-400 mr-2">First Name:</span>
                  {user.firstName}
                </li>
                <li className="flex-1 w-full md:w-auto text-center text-slate-700 font-medium">
                  <span className="md:hidden font-bold text-slate-400 mr-2">Last Name:</span>
                  {user.lastName}
                </li>
                <li className="flex-1 w-full md:w-auto text-center text-slate-700 font-medium">
                  <span className="md:hidden font-bold text-slate-400 mr-2">Age:</span>
                  {user.age}
                </li>
                <li className="flex-1 w-full md:w-auto text-center text-slate-700 font-medium break-all">
                  <span className="md:hidden font-bold text-slate-400 mr-2">Email:</span>
                  {user.email}
                </li>
                <li className="flex-1 w-full md:w-auto text-center mt-2 md:mt-0">
                  <button
                    className="border border-red-300 bg-red-100 text-red-700 hover:bg-red-500 hover:text-white
                               px-5 py-1.5 rounded-lg font-semibold shadow-sm transition-colors duration-200"
                    onClick={() => DeleteData(user.id)}
                  >
                    Delete
                  </button>
                  
                </li>
                <li className="flex-1 w-full md:w-auto text-center mt-2 md:mt-0">
                  <button
                    className="border border-black bg-emerald-300 text-black hover:bg-emerald-500 hover:text-white
                               px-5 py-1.5 rounded-lg font-semibold shadow-sm transition-colors duration-200"
                    onClick={() => EditUser(user.id)}
                  >
                    Edit
                  </button>
                  
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl sm:text-3xl font-bold mt-10 text-slate-500 animate-pulse">
            Data Loading.....
          </h1>
        )}
      </div>
    </>
  );
};

export default About;