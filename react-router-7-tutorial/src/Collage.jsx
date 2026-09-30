import React from "react";
import { NavLink, Outlet } from "react-router";

const Collage = () => {
  return (
    <div className="flex-col gap-x-10 text-center p-10 items-center justify-center ">
      <h1 className="text-4xl font-black mb-2">Collage Page</h1>

      <div>
        <NavLink
          to="/"
          className="text-2xl font-semibold mt-12 border px-6 bg-blue-300"
        >
          Go Back To Home Page
        </NavLink>
      </div>

      <div className="mt-12">
        {/* NavLinks in same row */}
        <div className="flex flex-row gap-10 justify-center">
          <NavLink className="Link text-2xl font-bold" to="">
            Student
          </NavLink>

          <NavLink className="Link text-2xl font-bold" to="departments">
            Departments
          </NavLink>

          <NavLink className="Link text-2xl font-bold" to="collageDetails">
            Collage Details
          </NavLink>
        </div>

        {/* Page content appears below */}
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Collage;