import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Section1 from "./components/templates/Section1/Section1";
import Section2 from "./components/templates/Section2/Section2";
import Section3 from "./components/templates/Section3/Section3";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Section1 />} />
      <Route path="/section1" exact element={<Section1 />} />
      <Route path="/section1/section2" exact element={<Section2 />} />
      <Route path="/section1/section2/section3" exact element={<Section3/>}/>
    </Routes>
    // <div>
    //   {/* <Section1 /> */}
    //   {/* <Section2 /> */}
    //   {/* <Section3 /> */}
    // </div>
  );
}

export default App;
