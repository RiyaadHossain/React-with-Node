
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {

  

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addUser" element={<AddUser />}/>
        <Route path="/updateUser/:id" element={<UpdateUser />}/>
     </Routes>
    </div>
  );
}

export default App;
