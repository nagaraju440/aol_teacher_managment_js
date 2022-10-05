import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/forgetpassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
import Change_Password from "./components/templates/Auth/ChangePassword/changepassword.js";
import ExportPage from "./pages/home/export";
import Home from "./pages/home/home";
// import Data_table from "./components/templates/Data_table/data_table";
// import All_reg from "./components/templates/All_register/Alreg.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/changepassword" element={<Change_Password />} />
      <Route path="/home/export" element={<ExportPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
