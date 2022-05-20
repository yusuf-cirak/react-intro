import {Route, Routes } from "react-router-dom";
import "./App.css";
import UserAddForm from "./pages/user/UserAddForm";
import Users from "./pages/user/Users";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="app">
          <Navbar className="navbar"/>
          <hr/>
      <Routes>
            <Route exact path="/" component={<Users/>} />
            <Route exact path="/user/add" component={<UserAddForm />} />
      </Routes>
      </div>
  );
}

export default App;
