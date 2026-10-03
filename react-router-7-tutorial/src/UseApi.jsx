import React, { use } from 'react'

const UseApi = ({DummyUsers}) => {

  const UsersData = use(DummyUsers);

  console.log(UsersData.users);
  
  return (
    <div>
        <h1 className='text-3xl font-bold mt-4'>Users List----</h1>
        {
          UsersData?.users?.map((user,index)=>(
             <h1 key={index} className='text-2xl font-bold'>Name : {user.firstName}</h1>
          ))
        }
    </div>
  )
}

export default UseApi