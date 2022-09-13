import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Section1 from "./components/templates/Section1/Section1";
import Section2 from "./components/templates/Section2/Section2";
import Section3 from "./components/templates/Section3/Section3";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Section1 />} />
    //   <Route path="/search-page" element={<Section1 />} />
    //   <Route path="/teachers-list" element={<Section2 />} />
    //   <Route path="/teacher-information" element={<Section3/>}/>
    // </Routes>
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
