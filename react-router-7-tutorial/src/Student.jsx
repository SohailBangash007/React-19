import React, { useActionState } from "react";
import { NavLink } from "react-router";

const Student = () => {
  const HandlerStudent = (PrevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 7) {
      return { error: " Enter the Correct Student Name Add Just 7 letter in alphabets and Number" };
    } else if (!regex.test(password)) {
      return { error: "The  password just Number and Alphabets" };
    } else {
      return { message: "Log in Successfully" };
    }
  };

  const [data, action, pending] = useActionState(HandlerStudent);
  console.log(data);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mt-6 mb-8">
        Student Page Validation with useActionState in react
      </h1>
      <div className="flex flex-col justify-center">
        {
          data?.message && <span>{data.message}</span>
        }
        {
          data?.error && <span>{data.error}</span>
        }
        <form
          action={action}
          className="flex flex-col  justify-center items-center gap-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Student Name"
            className="border p-2 bg-blue-200"
          />

          <input
            type="text"
            name="password"
            placeholder="Enter Student Password"
            className="border p-2 bg-blue-200"
          />
          <button className="px-10 py-2 border bg-cyan-200">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Student;
