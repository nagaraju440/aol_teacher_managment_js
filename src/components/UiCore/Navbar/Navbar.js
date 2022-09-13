import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Aol from "../../assets/images/aol logo.png";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar-full-container">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <div>
              <MenuIcon className="menu-icon" />
            </div>
            <div>
              <img src={Aol} alt="" className="navbar-aolimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
