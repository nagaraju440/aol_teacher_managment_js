import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    //     <Route path="/newpassword" element={<NewPassword/>}/>
    // </Routes>
    <HomePage/>
  );
}

export default App;

