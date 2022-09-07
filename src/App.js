import React from "react";
import Navbar from "./components/UiCore/Navbar/Navbar.js";
// import { Routes, Route, Link } from "react-router-dom";
// import ForgotPassword from "./pages/forgetpassword";
// import NewPassword from "./pages/newpassword";
// import LoginPage from "./pages/login";
// import Home from "./pages/home";
// import AllReg from './components/templates/All_register/Alreg.js';
import TabBar from './components/UiCore/TabBar/TabBar.js';
import HomePage from "./pages/Home"
// import Data_table from './components/templates/Data_table/data_table'
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./pages/forgetpassword";
import NewPassword from "./pages/NewPassword";
import LoginPage from "./pages/login";
// import All_reg from './components/templates/All_register/Alreg'
// import Data_table from './components/templates/Data_table/data_table.js';
// import HomePage from "./pages/Home"
import "./App.css";
import Dashboard from "./pages/dashboard.js";
function App() {
  return (
    <div>
      <Navbar/>
      <HomePage></HomePage>

    </div>
    //     // <AllReg/>
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/forgotpassword" element={<ForgotPassword />} />
    //   <Route path="/newpassword" element={<NewPassword />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    // </Routes>
    //     // <HomePage></HomePage>
    //     // <Tabbar></Tabbar>
    //     // <div>
    //     // <Home />
    //     // <Data_table/>
    //       // <Navbar/>
    // // {/* <Data_table/> */}
    //     // <AllRe g/>
    //     // </div>
    //     // <Routes>
    //       /* <Route path="/" element={<LoginPage />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/forgotpassword" element={<ForgotPassword />} />
    //       <Route path="/newpassword" element={<NewPassword />} />
    //       <Route path="/homepage" element={<Home />} /> */
    //     // <TabBar></TabBar>
    //     // </Routes>
  );
}

export default App;
