import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Home from "./pages/Home";
import Explore from "./pages/Explore";

import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Help from "./pages/Help";

function App(){

    return(
      <>
        <div>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Help" element={<Help/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Placeorder" element={<PlaceOrder/>}/>
        
      </Routes>
      </div>
      <Footer/>
      </>
    )
}

export default App