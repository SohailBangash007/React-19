import { Routes, Route } from "react-router";
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

function App() {
  return (
    <>
      
      <Routes>
        <Route element={<Navbar/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/list?" element={<UsersList />} />
        <Route path="/user/:id/:name?" element={<UserData />} />
        </Route>
      
        <Route
         path="/collage" element={<Collage />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="collageDetails" element={<CollageDetails />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
