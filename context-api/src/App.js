import {Route, Routes } from "react-router-dom";
import "./App.css";
import UserAddForm from "./pages/user/UserAddForm";
import Users from "./pages/user/Users";
import Navbar from "./layouts/Navbar";
import NotFound from "./pages/common/NotFound";

function App() {
  return (
    <div className="app">
          <Navbar className="navbar"/>
          <hr/>
      <Routes>
            <Route exact path="/" element={<Users/>} />
            <Route exact path="/user/add" element={<UserAddForm />} />
            <Route element={<NotFound/>}/>
      </Routes>
      </div>
  );
}

export default App;
