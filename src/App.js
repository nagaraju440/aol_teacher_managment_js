import React from 'react';
import Navbar from './components/UiCore/Navbar/Navbar.js';
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Navbar/>

    
    </div>
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

