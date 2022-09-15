import React, { useEffect ,useState} from "react";
import image from "../../assets/images/profile.jpeg";
import Navbar from "../../UiCore/Navbar/Navbar";
import "./Section2.css";
import UiButton from "../../UiCore/FormComponent/UiButton/UiButton";
import Data_table from "../Data_Table/data_table.js";
import {useLocation} from 'react-router-dom';

function Section2(props) {
  const [usersData,setUsersData]=useState([]);
  console.log(props)
  let location= useLocation();
  useEffect(()=>{
    setUsersData(location.state);
    // console.log("location data",location.state);
    console.log("my ud",usersData);
  })
  return (
    <div className="s2-outer-container">
      <Navbar />

      <div className="s2-inner-container1">
        <div className="s2-tabbar">
          <div className="s2-home">
            <p>Home</p>
          </div>
        </div>
        <div className="s2-tm">
          <div className="s2-tm-inner-container">
            <div>
              <h2>Teacher Management</h2>
            </div>
            <div className="s2-tm-table-container">
              <Data_table data={usersData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
