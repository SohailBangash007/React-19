import React, { useEffect, useOptimistic, useState } from "react";

const UseOptimisticHooks = () => {
  const [name, setName] = useState([]);
  const [skill, setSkill] = useState([]);
  const [optSkill, setOptSkill] = useOptimistic(skill);
  useEffect(() => {
    getSkill();
  }, []);

  const sleep =(ms)=>{
   return new Promise(resolve=>setTimeout(resolve,ms))
  }

  const getSkill = async () => {
    let resp = await fetch("http://localhost:3000/skills");
    resp = await resp.json();
    setSkill(resp);
  };

  const AddSkill = async(event)=>{
    const id = Math.random() * 100000;
    setOptSkill((prev)=>[...prev,{name, id}])

    let resp = await fetch("http://localhost:3000/skills",{
      method: "post",
      body:JSON.stringify({ name, id})
    });
    await sleep(3000)
    resp = await resp.json();

    if (resp){
      getSkill();
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-y-6">
      <h1 className="text-3xl font-bold ">
        UseOptimistic Hooks Use With React
      </h1>
      <form action={AddSkill}>
      <input
        type="text"
        placeholder="Enter Skill"
        className="border px-8 py-2 bg-cyan-100"
        onChange={(event) => setName(event.target.value)}
      />
      <button className="px-8 py-2 rounded-4xl bg-blue-200" >Add</button>
   </form>

      {
        optSkill.map((item)=>(
          <div key={item.id} className="text-2xl font-bold">Skills : {item.name}</div>
        ))
      }
    </div>
  );
};

export default UseOptimisticHooks;
