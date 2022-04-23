
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addUser" element={<AddUser />}/>
     </Routes>
    </div>
  );
}

export default App;
