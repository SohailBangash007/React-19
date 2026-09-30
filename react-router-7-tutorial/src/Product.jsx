import React, { useState } from "react";

const Product = () => {
  const [name, setName] = useState("");
  const [NameError, setNameError] = useState();
  const [Password, setPassword] = useState("");
  const [PassError, setPassError] = useState();

  const handlerName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 10) {
      setNameError("Please Enter The 10 Alphabets");
    } else {
      setNameError("");
    }
  };

  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPassError();
    } else {
      setPassError(
        "Please Enter The Alphabets and Numeric words Special characters not Allowed",
      );
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4">
        Simple Validation in input Fields
      </h1>

      <div className="flex flex-col  justify-center items-center   mt-6">
        <div className=" flex flex-col">
          <label htmlFor="name" className="mb-2 text-2xl font-bold">
            Enter Name
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
            onChange={handlerName}
            className={`px-8 py-2 border-2 rounded-xl ${NameError ? "error": ""} `}
          />
          <span className="text-red-500 text-2xl mt-2 outline-red-500">
            {NameError && NameError}
          </span>
        </div>

        <br />
        <div className=" flex flex-col">
          <label htmlFor="password" className="mb-2 text-2xl font-bold">
            Enter Password
          </label>
          <input
            type="text"
            placeholder="Enter User Password"
            onChange={handlePassword}
            className={`px-8 py-2 border-2 rounded-xl ${PassError ?"error": ""} `}
          />
          <span className="text-red-500 text-2xl mt-2 outline-red-500">
            {PassError && PassError}
          </span>
        </div>

        <br />
        <button
          className="px-8 py-2 border font-bold text-xl"
          disabled={PassError || NameError}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Product;
