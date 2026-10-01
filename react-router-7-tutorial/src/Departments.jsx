import React, { useReducer } from "react";
import { NavLink } from "react-router";

const Departments = () => {
  const EmptyData = {
    name: "",
    password: "",
    email: "",
    city: "",
    address: "",
  };

  const reducer = (data, action) => {
    return { ...data, [action.type]: action.val };
  };

  const [state, dispatch] = useReducer(reducer, EmptyData);
  console.log(state);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Department Page</h1>

      <h2 className="text-2xl font-bold mb-4">Use Reducer</h2>
      <div className="flex flex-col justify-center items-center gap-y-6">
        <input
          type="text"
          placeholder="User Name"
          className="border bg-gray-200 rounded-2xl px-8 py-2 text-black"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "name" })
          }
        />
        <input
          type="text"
          placeholder="Password"
          className="border bg-gray-200 rounded-2xl px-8 py-2"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "password" })
          }
        />
        <input
          type="text"
          placeholder="Email"
          className="border bg-gray-200 rounded-2xl px-8 py-2"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "email" })
          }
        />
        <input
          type="text"
          placeholder="City"
          className="border bg-gray-200 rounded-2xl px-8 py-2"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "city" })
          }
        />
        <input
          type="text"
          placeholder="Address"
          className="border bg-gray-200 rounded-2xl px-8 py-2"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "address" })
          }
        />

        <ul className="text-2xl font-bold border bg-blue-400 p-8">
          <li>Name : {state.name}</li>
          <li>Password : {state.password}</li>
          <li>Email : {state.email}</li>
          <li>City : {state.city}</li>
          <li>Address : {state.address}</li>
        </ul>

        <button
          onClick={() => dispatch("successfully")}
          className="px-4 py-2 border bg-gray-400"
        >
          Add Details
        </button>
      </div>
    </div>
  );
};

export default Departments;
