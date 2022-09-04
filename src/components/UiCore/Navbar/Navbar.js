import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Aol from "../../assets/images/aol logo.png";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div className="navbar-full-container">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <div>
              <MenuIcon />
            </div>
            <div>
              <img src={Aol} alt="" className="navbar-aolimage" />
            </div>
          </div>
          <div className="navbar-right">
            <div>
              <Avatar sx={{backgroundColor:'whitesmoke',color:'lightgrey'}}>A</Avatar>
            </div>
            <div className="navbar-right-content">Admin</div>
          </div >
        </div>
      </div>
    </div>
  );
}

export default Navbar;
