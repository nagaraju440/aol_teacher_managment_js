import React from 'react';
import Navbar from './components/UiCore/Navbar/Navbar.js';
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
import Home from "./pages/Home";
import AllReg from './components/templates/All_register/Alreg.js';
// import HomePage from "./pages/Home"
import Tabbar from "./pages/Tabbar";
import Data_table from './components/templates/Data_table/data_table'
function App() {
  return (
    <AllReg/>
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/forgotpassword" element={<ForgotPassword />} />
    //   <Route path="/newpassword" element={<NewPassword />} />
    //   <Route path="/homepage" element={<Home />} />
    // </Routes>
    // <HomePage></HomePage>
    // <Tabbar></Tabbar>
    // <div>
    //   <Navbar/>
// {/* <Data_table/> */}
    // <AllReg/>
    // </div>
    // <Routes>
      /* <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/homepage" element={<Home />} /> */

    // </Routes>
    // <HomePage></HomePage>
  );
}

export default App;

