import {Route, Routes } from "react-router-dom";
import "../../App.css"
import UserAddForm from "../user/UserAddForm";
import Users from "../user/Users";
import Navbar from "../../layouts/Navbar";
import NotFound from "../common/NotFound";
import UserUpdateForm from "../user/UserUpdateForm";

function App() {
  return (
    <div className="app">
          <Navbar className="navbar"/>
          <hr/>
      <Routes>
            <Route exact path="/" element={<Users/>} />
            <Route exact path="/user/add" element={<UserAddForm />} />
            <Route exact path="/user/update/:id" element={<UserUpdateForm/>} />

            <Route element={<NotFound/>}/>
      </Routes>
      </div>
  );
}

export default App;
