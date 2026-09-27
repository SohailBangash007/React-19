import {Routes, Route} from "react-router"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Navbar from "./Navbar"


function App() {
 

  return (
    <>
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}  />
       <Route path="/about" element={<About/>}  />
       <Route path="/product" element={<Product/>}  />
       
     </Routes>
   
    </>
  )
}

export default App
