import React, { use } from 'react'

const UseApi = ({DummyUsers}) => {

  const UsersData = use(DummyUsers);

  console.log(UsersData.users);
  
  return (
    <div>
        <h1 className='text-3xl font-bold mt-4'>Users List----</h1>
        {
          UsersData?.users?.map((user,index)=>(
            <div key={index}>
             <h1  className='text-2xl font-bold'>Name : {user.firstName}</h1>
             <h2  className='text-2xl font-bold'>Email : {user.email}</h2>
             </div>
          ))
        }
    </div>
  )
}

export default UseApi