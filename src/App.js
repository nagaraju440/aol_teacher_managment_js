import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/newpassword" element={<NewPassword/>}/>
    </Routes>
  );
}

export default App;

