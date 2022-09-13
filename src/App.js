import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Section1 from "./components/templates/Section1/Section1";
import Section3 from "./components/templates/Section3/Section3";
import Navbar from "./components/UiCore/Navbar/Navbar";

// import Data_table from "./components/templates/Data_table/data_table";
// import All_reg from "./components/templates/All_register/Alreg.js";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
      
    // </Routes>
    <div>
      {/* <Navbar/> */}
      <Section1/>
      {/* <Section3/> */}
      {/* <p>hiiii</p> */}
    </div>
  );
}

export default App;
