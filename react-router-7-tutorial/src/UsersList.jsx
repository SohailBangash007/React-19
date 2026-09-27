import { Link } from "react-router";

const UsersList = () => {
  const UserDetails = [
    { id: 1, name: "Sohail" },
    { id: 2, name: "Arif" },
    { id: 3, name: "Basit" },
    { id: 4, name: "Numan" },
    { id: 5, name: "Subhan" },
    { id: 6, name: "Kashif" },
  ];

  return (
    <div style={{marginLeft:20}}>
      <h1>User  List Page Data.</h1>
      {UserDetails.map((items) => (
        <div>
          <h2>
            <Link to={"/user/"+items.id}>{items.name}</Link>
          </h2>
        </div>
      ))}

  <h1>User List Page Data with Name and Url.</h1>
      {UserDetails.map((items) => (
        <div>
          <h2>
            <Link to={"/user/"+items.id+"/"+items.name}>{items.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
