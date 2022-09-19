import React from "react";
import "./Allreg.css";
import Cards from "./Cards";

function AllReg(props) {
  console.log("props in all reg", props.data);
  return (
    <div className="Background">
      <div className="AllReg-outer-contanier">
        <div className="AllReg-inner-container1">
          <div className="AllReg-inner-container2">
            <h3>All Regions Summary</h3>
          </div>
        </div>
      </div>
      <div className="All-Cards-Container">
        <Cards data={props.data} />
      </div>
    </div>
  );
}

export default AllReg;
