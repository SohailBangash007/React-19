import React from 'react'
import {useParams, Link} from "react-router"
const UserData = () => {
    const ParamsData=useParams();
  return (
    <div style={{marginLeft:20}}>
        <h1>User Data is Here</h1>
        <h2>User Id is : {ParamsData.id}</h2>
        <h3><Link to="/user">Go Back UsersList</Link></h3>
     </div>
  )
}

export default UserData