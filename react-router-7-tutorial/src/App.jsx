import { Routes, Route, NavLink } from "react-router";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import Collage from "./Collage";
import Student from "./Student";
import Departments from "./Departments";
import CollageDetails from "./CollageDetails";
import UsersList from "./UsersList";
import UserData from "./UserData";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import UseOptimisticHooks from "./UseOptimisticHooks";

function App() {
  return (
    <>
      <ul className="flex justify-around text-2xl font-bold list-none w-[550px]  mt-10">
        <li className="border p-2 bg-cyan-100">
          <NavLink to="/about">Bact to About</NavLink>
        </li>
        <li className="border p-2 bg-fuchsia-400">
          <NavLink to="/about/add">AddUser</NavLink>
        </li>
        <li className="border p-2 bg-emerald-400">
          <NavLink to="/">Bact to Home</NavLink>
        </li>
      </ul>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user/list?" element={<UsersList />} />
          <Route path="/user/:id/:name?" element={<UserData />} />
        </Route>
        <Route>
          <Route path="/about" element={<About />} />
          <Route path="/about/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Route>

        <Route path="/collage" element={<Collage />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="collageDetails" element={<CollageDetails />} />
        </Route>
        <Route path="/UseOptimisticHooks" element={<UseOptimisticHooks/>}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
