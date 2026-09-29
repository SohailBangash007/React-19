import React from "react";

const EditUser = () => {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="mt-6 text-3xl font-bold">Edit User Details</h1>
        <div className="flex flex-col  justify-center items-center gap-y-4 mt-6">
          <input
            type="text"
            placeholder="Enter User First Name"
            className="px-6 py-2 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Enter User  Last Name"
            className="px-6 py-2 border rounded-xl"
          />
          <input
            type="text"
            placeholder="User Age"
            className="px-6 py-2 border rounded-xl"
          />
          <input
            type="text"
            placeholder="User Email"
            className="px-6 py-2 border rounded-xl"
          />
          <button className="px-6 py-2 border rounded-xl bg-emerald-500 text-black font-medium text-xl">
            Edit User Detail
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
