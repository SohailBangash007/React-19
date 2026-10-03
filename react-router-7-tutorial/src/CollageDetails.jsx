import React, { lazy, Suspense, useState } from "react";
import { NavLink } from "react-router";
import UseApi from "./UseApi";
// import LazyLoading from "./LazyLoading";
const LazyLoading = lazy(()=>import("./LazyLoading"));


const fetchData =()=>fetch("https://dummyjson.com/users").then((response)=>response.json());

const DummyUsers = fetchData();

const CollageDetails = () => {
  const [Load, setLoad] = useState(false);
  return (
    <>
    <div className="">
      <h1 className="text-3xl font-bold">CollageDetails Page </h1>

      <h2 className="text-2xl font-bold mt-4">Lazy LOADING</h2>
      {
        Load ? <Suspense fallback={<h1 className="text-3xl font-bold mt-4">Loading......</h1>}> <LazyLoading /> </Suspense>    : null
      }

      <button
        className="mt-4 px-8 py-2 bg-blue-300 border-2 font-bold rounded-2xl text-2xl"
        onClick={() => setLoad(true)}
      >
        Load User
      </button>
    </div>

    <div>
      <h1 className="text-3xl font-bold mt-6">UseApi and Rest Api With react</h1>
      <Suspense fallback={<h2 className="text-4xl font-bold mt-4">Loading Dummy Data........</h2>}>
         <UseApi DummyUsers={DummyUsers}/>
      </Suspense>
    </div>
  

   </>
  );
};

export default CollageDetails;
