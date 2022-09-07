import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/forgetpassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard.js";

// import Navbar from "./components/UiCore/Navbar/Navbar.js";
import Tabbar from "./components/UiCore/TabBar/TabBar.js";
import HomePage from "./components/templates/Home/HomePage/HomePage.js";
// import Data_table from "./components/templates/Data_table/data_table";
// import All_reg from "./components/templates/All_register/Alreg.js";

function App() {
  return (
    // <div>
    // {/* <Navbar /> */}
    //   {/* <Tabbar /> */}
    //   {/* <HomePage /> */}
    //   {/* <Data_table /> */}
    //   {/* <All_reg /> */}
    // {/* </div> */}
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
